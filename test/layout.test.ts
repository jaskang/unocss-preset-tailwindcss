import { createGenerator } from '@unocss/core'

import { presetTailwind } from '../src'

const uno = createGenerator({
  presets: [presetTailwind()],
})

describe('presetTailwind', () => {
  it('layout', async () => {
    const { css } = await uno.generate(
      ['aspect-auto', 'aspect-square', 'aspect-video', 'aspect-[4/3]'].join(' ')
    )

    expect(css).toMatchInlineSnapshot(`
"/* layer: default */
.aspect-auto{aspect-ratio:auto;}
.aspect-square{aspect-ratio:1 / 1;}
.aspect-video{aspect-ratio:16 / 9;}"
`)
  })
})
