import type { Variant } from '@unocss/core'

export const variantSpaceAndDivide: Variant = matcher => {
  if (/space-?([xy])-?(-?.+)$/.test(matcher) || /divide-/.test(matcher)) {
    return {
      matcher,
      selector: input => {
        const not = '>:not([hidden])~:not([hidden])'
        return input.includes(not) ? input : `${input}${not}`
      },
    }
  }
}
