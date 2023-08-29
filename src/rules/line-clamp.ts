import type { Rule } from '@unocss/core'

import { bracketValue, type FullTheme } from '../theme'

export const lineClamp: Rule<FullTheme>[] = [
  [
    'line-clamp-none',
    {
      overflow: 'visible',
      display: 'block',
      '-webkit-box-orient': 'horizontal',
      '-webkit-line-clamp': 'none',
    },
  ],
  [
    /^line-clamp-(.+)$/,
    ([, v], { theme }) => {
      const val = theme.lineClamp[v] || bracketValue(v)
      if (val) {
        return {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': val,
        }
      }
    },
    { autocomplete: ['line-clamp-$lineClamp'] },
  ],
]
