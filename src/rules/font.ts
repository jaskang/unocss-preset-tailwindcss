import type { Rule } from '@unocss/core'

import { type FullTheme, maybeCustom } from '../theme'
import { simpleRule } from '../theme/utils'

export const fontFamily: Rule<FullTheme>[] = [
  [
    /^font-(.+)$/,
    ([, v], { theme }) => {
      const config = theme.fontFamily[v]
      if (config) {
        const val = Array.isArray(config) ? config.join(', ') : config
        return { 'font-family': val }
      }
    },
    { autocomplete: ['font-$fontSize'] },
  ],
]

export const fontSize: Rule<FullTheme>[] = [
  [
    /^text-(.+)$/,
    ([, v], { theme }) => {
      const config = theme.fontSize[v]
      if (config) {
        const [size, attrs] = Array.isArray(config)
          ? typeof config[1] === 'object'
            ? (config as [string, Record<string, string>])
            : ([
                config[0],
                {
                  'line-height': config[1],
                },
              ] as [string, Record<string, string>])
          : ([config, {}] as [string, Record<string, string>])
        return [['font-size', size], ...Object.entries(attrs)]
        // return { 'font-size': size, ...attrs }
      }
      return maybeCustom('font-size', v)
    },
    { autocomplete: ['text-$fontSize'] },
  ],
]
