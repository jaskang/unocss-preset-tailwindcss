import type { VariantObject } from '@unocss/core'

import type { Theme } from '../theme/types'

export const screensVariant: VariantObject<Theme> = {
  name: 'screens',
  match(matcher, context) {
    const screens: Array<[string, string, number]> = Object.entries(context.theme.screens).map(
      ([point, size], idx) => [point, size, idx]
    )
    const screen = screens.find(([point]) => matcher.startsWith(`${point}:`))

    if (screen) {
      const [point, size, idx] = screen
      const m = matcher.slice(point.length + 1)
      const order = 1000 + idx + 1
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
    return matcher
  },
  multiPass: true,
  autocomplete: '$screens:',
}
