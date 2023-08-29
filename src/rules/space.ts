import type { Rule } from '@unocss/core'

import { bracketValue, type FullTheme } from '../theme'

export const spaceBetween: Rule<FullTheme>[] = [
  [
    /^space-(x|y)-reverse$/,
    ([, d]) => [[`--un-space-${d}-reverse`, 1]],
    { autocomplete: ['space-(x|y)-reverse'] },
  ],
  [
    /^space-([xy])-(.+)$/,
    ([, d, v], { theme }) => {
      const [first, second] = d === 'x' ? ['left', 'right'] : ['top', 'bottom']
      console.log(v, theme.space)
      const val = theme.space[v] || bracketValue(v)
      if (val) {
        return [
          [`--tw-space-${d}-reverse`, 0],
          [`margin-${first}`, `calc(${val} * calc(1 - var(--tw-space-${d}-reverse)))`],
          [`margin-${second}`, `calc(${val} * var(--tw-space-${d}-reverse))`],
        ]
      }
    },
    { autocomplete: ['space-(x|y)-$spacing'] },
  ],
]
