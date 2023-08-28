import type { VariantObject } from '@unocss/core'

import type { FullTheme } from '../theme'

const excludedPseudo = [
  '::-webkit-resizer',
  '::-webkit-scrollbar',
  '::-webkit-scrollbar-button',
  '::-webkit-scrollbar-corner',
  '::-webkit-scrollbar-thumb',
  '::-webkit-scrollbar-track',
  '::-webkit-scrollbar-track-piece',
  '::file-selector-button',
]

// https://github.com/tailwindlabs/tailwindcss/blob/8f1987567b6f8b4dba463d9db624398e6f6a70ab/src/corePlugins.js#L83
const PseudoClasses = [
  // element 伪元素
  ['before', '::before'],
  ['after', '::after'],
  ['placeholder', '::placeholder'],
  ['file', '::file-selector-button'],
  ['marker', '::marker'],
  ['selection', '::selection'],
  ['first-letter', '::first-letter'],
  ['first-line', '::first-line'],
  ['backdrop', '::backdrop'],

  // Positional 选择器
  ['first', ':first-child'],
  ['last', ':last-child'],
  ['only', ':only-child'],
  ['odd', ':nth-child(odd)'],
  ['even', ':nth-child(even)'],
  'first-of-type',
  'last-of-type',
  'only-of-type',

  // State 状态
  'visited',
  'target',
  ['open', '[open]'],

  // Forms 表单
  'default',
  'checked',
  'indeterminate',
  'placeholder-shown',
  'autofill',
  'optional',
  'required',
  'valid',
  'invalid',
  'in-range',
  'out-of-range',
  'read-only',

  // Content 内容
  'empty',

  // Interactive 状态
  'focus-within',
  'hover',
  'focus',
  'focus-visible',
  'active',
  'enabled',
  'disabled',
].reduce(
  (acc, item) => {
    const key = Array.isArray(item) ? item[0] : item
    const value = Array.isArray(item) ? item[1] : `:${item}`
    acc[key] = value
    return acc
  },
  {} as Record<string, string>
)

const PseudoClassesKeys = Object.keys(PseudoClasses)
const PseudoClassesKeysStr = PseudoClassesKeys.join('|')

export const pseudoVariant: VariantObject<FullTheme> = {
  name: 'pseudo',
  match: input => {
    const pseudoClassesAndElementsRE = new RegExp(`^(${PseudoClassesKeysStr})(?::)`)
    const match = input.match(pseudoClassesAndElementsRE)
    if (match) {
      const pseudo = PseudoClasses[match[1]]

      // order of pseudo classes
      let index: number | undefined = PseudoClassesKeys.indexOf(match[1])
      if (index === -1) index = undefined

      return {
        matcher: input.slice(match[0].length),
        handle: (input, next) => {
          const selectors =
            pseudo.startsWith('::') && !excludedPseudo.includes(pseudo)
              ? { pseudo: `${input.pseudo}${pseudo}` }
              : { selector: `${input.selector}${pseudo}` }

          return next({
            ...input,
            ...selectors,
            sort: index,
            noMerge: true,
          })
        },
      }
    }
  },
  multiPass: true,
  autocomplete: `(${PseudoClassesKeysStr}):`,
}
