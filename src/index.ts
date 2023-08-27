import type { Preset } from '@unocss/core'

import { rules, shortcuts } from './rules'
import { extendTheme, type Theme, theme } from './theme'
import { variants } from './variants'

export { type Theme }

export function presetTailwindcss() {
  return {
    name: 'unocss-preset-tailwindcss',
    theme: theme,
    extendTheme: extendTheme as (t: Theme) => void,
    rules: rules,
    shortcuts: shortcuts,
    variants: variants,
  } as Preset<Partial<Theme>>
}

export default presetTailwindcss
