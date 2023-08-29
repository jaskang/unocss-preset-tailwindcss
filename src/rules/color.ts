import type { Rule } from '@unocss/core'

import type { FullTheme } from '../theme'

export const textColor: Rule<FullTheme>[] = [
  [
    /^text-(.+)$/,
    ([, v], { theme }) => {
      const config = theme.textColor[v]
      if (config) {
        return { color: config }
      }
    },
    { autocomplete: ['text-$color'] },
  ],
]
