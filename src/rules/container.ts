import {
  type CSSObject,
  entriesToCss,
  normalizeCSSEntries,
  normalizeCSSValues,
  type Rule,
  toEscapedSelector,
} from '@unocss/core'
import { type Data, isString } from 'kotl'

import type { Theme } from '../theme'

export const container: Rule<Theme>[] = [
  [
    /^container$/,
    (m, context) => {
      const { theme } = context
      const themePadding: Data =
        typeof theme.container.padding === 'string'
          ? { DEFAULT: theme.container.padding }
          : Object.assign({}, theme.container.padding)

      const main: CSSObject = { width: '100%' }
      if (theme.container?.center) {
        main['margin-left'] = 'auto'
        main['margin-right'] = 'auto'
      }
      if (themePadding.DEFAULT) {
        main.padding = themePadding.DEFAULT
      }

      const selector = toEscapedSelector(context.rawSelector)

      const mainCss = normalizeCSSEntries(main)
      let css = `${selector}{${isString(mainCss) ? mainCss : entriesToCss(mainCss)}}\n`

      Object.keys(theme.screens).forEach(s => {
        const screen = theme.screens[s]
        const sPadding = themePadding[s]
        const sCss = `@media (min-width: ${screen}){${selector}{max-width: ${screen};${
          sPadding ? `padding: ${sPadding};` : ''
        }}}\n`
        css += sCss
      })
      console.log('container', context.variantHandlers)
      return css
    },
    { autocomplete: ['container'], layer: 'components' },
  ],
]

// export const containerShortcuts: Shortcut<Theme>[] = [
//   [
//     /^(?:(\w+)[:-])?container$/,
//     ([, bp], context) => {
//       let points = Object.keys(context.theme.screens)
//       if (bp) {
//         if (!points.includes(bp)) return
//         points = points.slice(points.indexOf(bp))
//       }
//       const shortcuts = points.map(p => `${p}:__container`)
//       if (!bp) shortcuts.unshift('__container')
//       return shortcuts
//     },
//   ],
// ]
