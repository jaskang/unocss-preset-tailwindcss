import { type Rule } from '@unocss/core'

import { bracketValue, type FullTheme, maybeCustom } from '../theme'

export const inset: Rule<FullTheme>[] = [
  [
    /^(start|end)-(.+)$/,
    ([, d, v], { theme }) => {
      const dir = `inset-inline-${d}`
      if (theme.inset[v]) {
        return { [dir]: theme.inset[v] }
      }
      return maybeCustom(dir, v)
    },
    { autocomplete: ['(start|end)-$inset'] },
  ],
  [
    /^(top|left|right|bottom)-(.+)$/,
    ([, d, v], { theme }) => {
      const dir = `${d}`
      if (theme.inset[v]) {
        return { [dir]: theme.inset[v] }
      }
      return maybeCustom(dir, v)
    },
    { autocomplete: ['(top|left|right|bottom)-$inset'] },
  ],
  [
    /^inset-([xy])-(.+)$/,
    ([, d, v], { theme }) => {
      if (theme.inset[v]) {
        return d === 'x'
          ? { left: theme.inset[v], right: theme.inset[v] }
          : { top: theme.inset[v], bottom: theme.inset[v] }
      }
      const val = bracketValue(v)
      if (val) {
        return d === 'x' ? { left: val, right: val } : { top: val, bottom: val }
      }
    },
    { autocomplete: ['inset-(x|y)-$inset'] },
  ],
  [
    /^inset-(.+)$/,
    ([, v], { theme }) => {
      if (theme.inset[v]) {
        return { inset: theme.inset[v] }
      }
      return maybeCustom('inset', v)
    },
    { autocomplete: ['inset-$inset'] },
  ],
]
