import { type Rule } from '@unocss/core'
import { type Data } from 'kotl'

import type { Theme } from '../theme'
import { resolveThemeValue } from '../theme/utils'

export const aspectRatio: Rule<Theme>[] = [
  [
    /^aspect-?(.+)$/,
    ([, d]: string[], { theme }) => {
      // theme()

      const values: Data = resolveThemeValue(theme, 'aspectRatio')
      const val = /^\d+\/\d+$/.test(d) ? d : values[d]
      return {
        'aspect-ratio': val,
      }
    },
    { autocomplete: ['aspect-(auto|square|video)'] },
  ],
]
