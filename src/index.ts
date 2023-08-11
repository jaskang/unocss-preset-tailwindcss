import type { Preset } from '@unocss/core'

export function presetWind(options = {}): Preset {
  return {
    name: 'unocss-preset-tailwindcss',
    variants: variants(options),
  }
}

export default presetWind
