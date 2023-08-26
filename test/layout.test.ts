import { createGenerator } from '@unocss/core'

import { presetTailwindcss, type Theme } from '../src'

const uno = createGenerator({
  presets: [presetTailwindcss()],
})

describe('presetTailwind layout', () => {
  it('aspect-auto', async () => {
    const { css } = await uno.generate(
      ['aspect-auto', 'aspect-square', 'aspect-video', 'aspect-[4/3]'].join(' ')
    )

    expect(css).toMatchInlineSnapshot(`
"/* layer: default */
.aspect-\\\\[4\\\\/3\\\\]{aspect-ratio:4/3;}
.aspect-auto{aspect-ratio:auto;}
.aspect-square{aspect-ratio:1 / 1;}
.aspect-video{aspect-ratio:16 / 9;}"
`)
  })

  it('container', async () => {
    const { css } = await uno.generate(['container'].join(' '))

    expect(css).toMatchInlineSnapshot(`
"/* layer: shortcuts */
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
}"
`)
  })

  test('containers', async () => {
    const targets = ['container', 'md:container', 'lg:container']
    const nonTargets = ['__container']
    const { css, matched } = await uno.generate(new Set([...targets, ...nonTargets]))

    expect(matched).toEqual(new Set(targets))
    await expect(css).toMatchFileSnapshot('./assets/output/preset-wind-containers.css')
  })

  test('centered containers', async () => {
    const uno = createGenerator<Theme>({
      presets: [presetTailwindcss()],
      theme: {
        container: {
          center: true,
        },
      },
    })

    const targets = ['container', 'md:container', 'lg:container']
    const { css, matched } = await uno.generate(new Set(targets), { preflights: false })

    expect(matched).toEqual(new Set(targets))
    await expect(css).toMatchFileSnapshot('./assets/output/preset-wind-containers-centered.css')
  })

  test('containers with max width', async () => {
    const uno = createGenerator({
      presets: [presetTailwindcss()],
      theme: {
        container: {},
      },
    })

    const targets = ['container', 'md:container', 'lg:container']

    const { css, matched } = await uno.generate(new Set(targets), { preflights: false })

    expect(matched).toEqual(new Set(targets))
    await expect(css).toMatchFileSnapshot('./assets/output/preset-wind-containers-max-width.css')
  })
})
