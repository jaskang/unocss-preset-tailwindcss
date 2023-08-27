import { createGenerator } from '@unocss/core'

import { presetTailwindcss } from '../../src'

const uno = createGenerator({
  presets: [presetTailwindcss()],
})

describe('breakpoints', () => {
  it('breakpoints', async () => {
    const { css } = await uno.generate(['md:aspect-auto'].join(' '))
    expect(css).toEqual(`/* layer: default */
@media (min-width: 768px){
.md\\:aspect-auto{aspect-ratio:auto;}
}`)
  })
  it('breakpoints nesting', async () => {
    const { css } = await uno.generate(['sm:md:aspect-auto'].join(' '))
    expect(css).toEqual(`/* layer: default */
@media (min-width: 768px){@media (min-width: 640px){
.sm\\:md\\:aspect-auto{aspect-ratio:auto;}
}}`)
  })
})
