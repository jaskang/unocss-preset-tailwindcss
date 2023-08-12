import type { Preset } from '@unocss/core'

import { rules } from './rules'
import { type Theme, theme } from './theme'

export function presetTailwind(): Preset<Theme> {
  return {
    name: 'unocss-preset-tailwindcss',
    theme: theme,
    rules: rules,
  }
}

export default presetTailwind
