import { createGenerator } from '@unocss/core'

import { presetTailwindcss } from '../../src'

const uno = createGenerator({
  presets: [presetTailwindcss()],
})

describe('font', () => {
  it('fontFamily', async () => {
    const { css } = await uno.generate(['font-sans', 'font-serif', 'font-mono'])

    expect(css).toEqual(`/* layer: default */
.font-mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}
.font-sans{font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";}
.font-serif{font-family:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;}`)
  })
  it('fontSize', async () => {
    const { css } = await uno.generate(['text-xs', 'text-sm', 'text-9xl'])

    expect(css).toEqual(`/* layer: default */
.text-9xl{font-size:8rem;line-height:1;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xs{font-size:0.75rem;line-height:1rem;}`)
  })

  it('fontWeight', async () => {
    const { css } = await uno.generate(['font-normal', 'font-bold', 'font-[1100]'])

    expect(css).toEqual(`/* layer: default */
.font-\\[1100\\]{font-weight:1100;}
.font-bold{font-weight:700;}
.font-normal{font-weight:400;}`)
  })
})
