import { type CSSObject, type Rule, type Shortcut, type VariantHandlerContext } from '@unocss/core'
import { type Data, isString } from 'kotl'

import type { Theme } from '../theme'

const queryMatcher = /@media \(min-width: (.+)\)/

export const container: Rule<Theme>[] = [
  [
    /^__container$/,
    (m, context) => {
      const { theme, variantHandlers } = context
      const themePadding: Data =
        typeof theme.container.padding === 'string'
          ? { DEFAULT: theme.container.padding }
          : Object.assign({}, theme.container.padding)

      const css: CSSObject = {}

      for (const v of variantHandlers) {
        const query = v.handle?.({} as VariantHandlerContext, x => x)?.parent
        if (isString(query)) {
          const match = query.match(queryMatcher)?.[1]
          const bp = Object.keys(theme.screens).find(key => theme.screens[key] === match)
          const val = theme.screens[bp || '__xxxx__']
          if (bp) {
            css['max-width'] = val
            if (themePadding[bp]) {
              css.padding = themePadding[bp]
            }
            break
          }
        }
      }

      if (theme.container?.center) {
        css['margin-left'] = 'auto'
        css['margin-right'] = 'auto'
      }
      if (themePadding.DEFAULT) {
        css.padding = themePadding.DEFAULT
      }
      if (!variantHandlers.length) css.width = '100%'
      return css
    },
    { internal: true, layer: 'components' },
  ],
]

export const containerShortcuts: Shortcut<Theme>[] = [
  [
    /^container$/,
    (m, context) => {
      const points = Object.keys(context.theme.screens)
      const shortcuts = points.map(p => `${p}:__container`)
      shortcuts.unshift('__container')
      return shortcuts
    },
  ],
]
