import { type Rule } from '@unocss/core'
import { type Data } from 'kotl'

export const aspectRatio: Rule[] = [
  [
    /^aspect-?(.+)$/,
    ([, d]: string[]) => {
      const values: Data = {
        auto: 'auto',
        square: '1/1',
        video: '16/9',
      }
      const val = /^\d+\/\d+$/.test(d) ? d : values[d]
      return {
        'aspect-ratio': val,
      }
    },
    { autocomplete: ['aspect-(auto|square|video)'] },
  ],
]
