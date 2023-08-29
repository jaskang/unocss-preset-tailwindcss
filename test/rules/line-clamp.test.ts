import { createGenerator } from '@unocss/core'

import { presetTailwindcss } from '../../src'

const uno = createGenerator({
  presets: [presetTailwindcss()],
})

describe('line-clamp', () => {
  it('fontWeight', async () => {
    const { css } = await uno.generate(['line-clamp-none', 'line-clamp-2', 'line-clamp-[100]'])

    expect(css).toEqual(`/* layer: default */
.line-clamp-none{overflow:visible;display:block;-webkit-box-orient:horizontal;-webkit-line-clamp:none;}
.line-clamp-\\[100\\]{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:100;}
.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}`)
  })
})
