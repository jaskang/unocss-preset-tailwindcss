import type { VariantObject } from '@unocss/core'

import type { FullTheme } from '../theme/types'

export const breakpointsVariant: VariantObject<FullTheme> = {
  name: 'breakpoints',
  match(matcher, context) {
    const screens: Array<[string, string, number]> = Object.entries(context.theme.screens).map(
      ([point, size], idx) => [point, size, idx]
    )
    const screen = screens.find(([point]) => matcher.startsWith(`${point}:`))
    if (screen) {
      const [point, size, idx] = screen
      const m = matcher.slice(point.length + 1)
      const order = 1000 + idx + 1
      // console.log('screen', screen, m, order, matcher)
      return {
        matcher: m,
        handle: (input, next) => {
          return next({
            ...input,
            parent:
              // m === 'container'
              //   ? `@media (min-width: ${size}) ${input.parent ? `$$ ${input.parent}` : ''}`
              `${input.parent ? `${input.parent} $$ ` : ''}@media (min-width: ${size})`,
            parentOrder: order,
          })
        },
      }
    }
    return matcher
  },
  multiPass: true,
  autocomplete: '$screens:',
}
