import { createGenerator } from '@unocss/core'

import { presetTailwindcss } from '../../src'

const uno = createGenerator({
  presets: [presetTailwindcss()],
})

describe('space', () => {
  it('space', async () => {
    const { css } = await uno.generate(['space-x-4', 'space-y-4'])

    expect(css).toEqual(`/* layer: default */
.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem * var(--tw-space-x-reverse));}
.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse));}`)
  })
  it('space reverse', async () => {
    const { css } = await uno.generate(['space-x-reverse', 'space-x-4'])

    expect(css).toEqual(`/* layer: default */
.space-x-reverse>:not([hidden])~:not([hidden]){--un-space-x-reverse:1;}
.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem * var(--tw-space-x-reverse));}`)
  })
})
