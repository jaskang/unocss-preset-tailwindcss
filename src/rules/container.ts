import { type CSSObject, type Rule, type Shortcut, type VariantHandlerContext } from '@unocss/core'
import { type Data, isString } from 'kotl'

import type { Theme } from '../theme'

export const container: Rule<Theme>[] = [
  [
    /^__container$/,
    (m, context) => {
      const queryMatcher = /@media \(min-width: (.+)\)/

      const { theme, variantHandlers } = context
      const themePadding: Data =
        typeof theme.container.padding === 'string'
          ? { DEFAULT: theme.container.padding }
          : Object.assign({}, theme.container.padding)

      let padding = themePadding.DEFAULT
      let maxWidth = '100%'

      for (const v of variantHandlers) {
        const query = v.handle?.({} as VariantHandlerContext, x => x)?.parent
        if (isString(query)) {
          const match = query.match(queryMatcher)?.[1]
          if (match) {
            const matchBp = Object.keys(theme.screens).find(key => theme.screens[key] === match)
            if (matchBp) {
              maxWidth = theme.screens[matchBp]
            }
            if (matchBp && themePadding[matchBp]) {
              padding = themePadding[matchBp]
            }
          }
        }
      }

      const css: CSSObject = {
        'max-width': maxWidth,
        'padding-left': padding,
        'padding-right': padding,
      }

      if (theme.container?.center) {
        css['margin-left'] = 'auto'
        css['margin-right'] = 'auto'
      }

      return css
    },
    { internal: true },
  ],
]

export const containerShortcuts: Shortcut<Theme>[] = [
  [
    /^(?:(\w+)[:-])?container$/,
    ([, bp], context) => {
      let points = Object.keys(context.theme.screens)
      if (bp) {
        if (!points.includes(bp)) return
        points = points.slice(points.indexOf(bp))
      }
      const shortcuts = points.map(p => `${p}:__container`)
      if (!bp) shortcuts.unshift('__container')
      return shortcuts
    },
  ],
]
