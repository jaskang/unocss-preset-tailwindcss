import { type Rule } from '@unocss/core'
import { type Data } from 'kotl'

import type { Theme } from '../theme'

export const aspectRatio: Rule<Theme>[] = [
  [
    /^aspect-?(.+)$/,
    ([, d]: string[], { theme }) => {
      // theme()

      const values: Data = theme.aspectRatio
      const val = /^\d+\/\d+$/.test(d) ? d : values[d]
      return {
        'aspect-ratio': val,
      }
    },
    { autocomplete: ['aspect-$aspectRatio'] },
  ],
]
