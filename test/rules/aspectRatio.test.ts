import { createGenerator } from '@unocss/core'

import { presetTailwindcss } from '../../src'

const uno = createGenerator({
  presets: [presetTailwindcss()],
})

describe('presetTailwind layout', () => {
  it('aspect-auto', async () => {
    const { css } = await uno.generate([
      'aspect-auto',
      'aspect-square',
      'aspect-video',
      'aspect-[4/3]',
    ])

    expect(css).toEqual(`/* layer: default */
.aspect-\\[4\\/3\\]{aspect-ratio:4/3;}
.aspect-auto{aspect-ratio:auto;}
.aspect-square{aspect-ratio:1 / 1;}
.aspect-video{aspect-ratio:16 / 9;}`)
  })
})
