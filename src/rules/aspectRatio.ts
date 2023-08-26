import { type Rule } from '@unocss/core'
import { type Data } from 'kotl'

import type { Theme } from '../theme'
import { bracketValue } from '../theme/utils'

export const aspectRatio: Rule<Theme>[] = [
  [
    /^aspect-?(.+)$/,
    ([, d]: string[], { theme }) => {
      const values: Data = theme.aspectRatio
      if (values[d]) {
        return {
          'aspect-ratio': values[d],
        }
      }

      const custom = bracketValue(d)
      if (custom) {
        return {
          'aspect-ratio': custom,
        }
      }
    },
    { autocomplete: ['aspect-$aspectRatio'] },
  ],
]
