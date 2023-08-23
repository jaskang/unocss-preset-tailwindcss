import type { VariantObject } from '@unocss/core'

import type { Theme } from '../theme/types'

export function calcMaxWidthBySize(size: string) {
  const value = size.match(/^-?[0-9]+\.?[0-9]*/)?.[0] || ''
  const unit = size.slice(value.length)
  if (unit === 'px') {
    const maxWidth = Number.parseFloat(value) - 0.1
    return Number.isNaN(maxWidth) ? size : `${maxWidth}${unit}`
  }
  return `calc(${size} - 0.1px)`
}

export function variantBreakpoints(): VariantObject<Theme> {
  const regexCache: Record<string, RegExp> = {}
  return {
    name: 'breakpoints',
    match(matcher, context) {
      const variantEntries: Array<[string, string, number]> = Object.entries(
        context.theme.screens
      ).map(([point, size], idx) => [point, size, idx])
      for (const [point, size, idx] of variantEntries) {
        if (!regexCache[point])
          regexCache[point] = new RegExp(
            `^((?:([al]t-|[<~]))?${point}(?:${context.generator.config.separators.join('|')}))`
          )

        const match = matcher.match(regexCache[point])
        if (!match) continue

        const [, pre] = match

        const m = matcher.slice(pre.length)
        // container rule is responsive, but also is breakpoint aware
        // it is handled on its own module (container.ts) and so we
        // exclude it from here
        if (m === 'container') continue

        const isLtPrefix = pre.startsWith('lt-') || pre.startsWith('<')

        let order = 1000 // parseInt(size)

        if (isLtPrefix) {
          order -= idx + 1
          return {
            matcher: m,
            handle: (input, next) =>
              next({
                ...input,
                parent: `${
                  input.parent ? `${input.parent} $$ ` : ''
                }@media (max-width: ${calcMaxWidthBySize(size)})`,
                parentOrder: order,
              }),
          }
        }

        order += idx + 1

        return {
          matcher: m,
          handle: (input, next) =>
            next({
              ...input,
              parent: `${input.parent ? `${input.parent} $$ ` : ''}@media (min-width: ${size})`,
              parentOrder: order,
            }),
        }
      }
    },
    multiPass: true,
    autocomplete: '(at-|lt-|)$screens:',
  }
}
