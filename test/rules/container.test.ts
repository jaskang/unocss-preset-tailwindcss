import { createGenerator } from '@unocss/core'

import { presetTailwindcss } from '../../src'

const uno = createGenerator({
  presets: [presetTailwindcss()],
})

describe('container', () => {
  it('default', async () => {
    const { css } = await uno.generate(['container'].join(' '))
    expect(css).toEqual(`/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}`)
  })

  test('container with breakpoint', async () => {
    const { css } = await uno.generate(['md:container'])
    await expect(css).toEqual(`/* layer: shortcuts */
@media (min-width: 1024px){@media (min-width: 768px){
.md\\:container{max-width:1024px;}
}}
@media (min-width: 1280px){@media (min-width: 768px){
.md\\:container{max-width:1280px;}
}}
@media (min-width: 1536px){@media (min-width: 768px){
.md\\:container{max-width:1536px;}
}}
@media (min-width: 640px){@media (min-width: 768px){
.md\\:container{max-width:640px;}
}}
@media (min-width: 768px){
.md\\:container{width:100%;}
}
@media (min-width: 768px){@media (min-width: 768px){
.md\\:container{max-width:768px;}
}}`)
  })

  test('container centered', async () => {
    const uno = createGenerator({
      presets: [presetTailwindcss()],
      theme: {
        container: {
          center: true,
        },
      },
    })
    const { css } = await uno.generate(['container'])
    expect(css).toEqual(`/* layer: shortcuts */
.container{margin-left:auto;margin-right:auto;width:100%;}
@media (min-width: 640px){
.container{max-width:640px;margin-left:auto;margin-right:auto;}
}
@media (min-width: 768px){
.container{max-width:768px;margin-left:auto;margin-right:auto;}
}
@media (min-width: 1024px){
.container{max-width:1024px;margin-left:auto;margin-right:auto;}
}
@media (min-width: 1280px){
.container{max-width:1280px;margin-left:auto;margin-right:auto;}
}
@media (min-width: 1536px){
.container{max-width:1536px;margin-left:auto;margin-right:auto;}
}`)
  })

  // test('containers with max width', async () => {
  //   const uno = createGenerator({
  //     presets: [presetTailwindcss()],
  //     theme: {
  //       container: {},
  //     },
  //   })

  //   const targets = ['container', 'md:container', 'lg:container']

  //   const { css, matched } = await uno.generate(new Set(targets), { preflights: false })

  //   expect(matched).toEqual(new Set(targets))
  //   await expect(css).toMatchFileSnapshot('./assets/output/preset-wind-containers-max-width.css')
  // })
})
