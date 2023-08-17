import type { Preset } from '@unocss/core'

import { rules } from './rules'
import { extendTheme, type Theme, theme } from './theme'

export { type Theme }

export function presetTailwindcss(): Preset<Theme> {
  return {
    name: 'unocss-preset-tailwindcss',
    theme: theme,
    extendTheme: extendTheme as (t: Theme) => void,
    rules: rules,
  }
}

export default presetTailwindcss
