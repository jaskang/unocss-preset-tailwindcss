import { type Rule } from '@unocss/core'

import type { Theme } from '../theme'
import { bracketValue } from '../theme/utils'

export const aspectRatio: Rule<Theme>[] = [
  [
    /^aspect-?(.+)$/,
    ([, d]: string[], { theme }) => {
      if (theme.aspectRatio[d]) {
        return { 'aspect-ratio': theme.aspectRatio[d] }
      }
      const custom = bracketValue(d)
      if (custom) {
        return { 'aspect-ratio': custom }
      }
    },
    { autocomplete: ['aspect-$aspectRatio'] },
  ],
]
