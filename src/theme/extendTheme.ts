import type { FullTheme, Theme } from './types'

function breakpoints(screens: Record<string, string>) {
  return Object.keys(screens)
    .filter(key => typeof screens[key] === 'string')
    .reduce(
      (breakpoints, key) => ({
        ...breakpoints,
        [`screen-${key}`]: screens[key],
      }),
      {}
    )
}

export const extendTheme = (theme: Theme) => {
  theme.accentColor = {
    ...theme.colors,
    auto: 'auto',
  }
  theme.backgroundColor = theme.colors
  theme.borderColor = { ...theme.colors, DEFAULT: theme.colors.gray[200]! }
  theme.boxShadowColor = theme.colors
  theme.caretColor = theme.colors
  theme.fill = { ...theme.colors, none: 'none' }
  theme.gradientColorStops = theme.colors
  theme.outlineColor = theme.colors
  theme.placeholderColor = theme.colors
  theme.ringColor = { ...theme.colors, DEFAULT: theme.colors.blue[500]! }
  theme.ringOffsetColor = theme.colors
  theme.stroke = { ...theme.colors, none: 'none' }
  theme.textColor = theme.colors
  theme.textDecorationColor = theme.colors
  theme.divideColor = theme.borderColor

  theme.backgroundOpacity = theme.opacity
  theme.backdropOpacity = theme.opacity
  theme.borderOpacity = theme.opacity
  theme.placeholderOpacity = theme.opacity
  theme.ringOpacity = { ...theme.opacity, DEFAULT: '0.5' }
  theme.textOpacity = theme.opacity
  theme.divideOpacity = theme.borderOpacity

  theme.backdropBlur = theme.blur
  theme.backdropBrightness = theme.brightness
  theme.backdropContrast = theme.contrast
  theme.backdropGrayscale = theme.grayscale
  theme.backdropHueRotate = theme.hueRotate
  theme.backdropInvert = theme.invert
  theme.backdropSaturate = theme.saturate
  theme.backdropSepia = theme.sepia
  theme.divideWidth = theme.borderWidth

  theme.margin = { ...theme.spacing, auto: 'auto' }
  theme.padding = theme.spacing
  theme.gap = theme.spacing
  theme.space = theme.spacing
  theme.textIndent = theme.spacing
  theme.borderSpacing = theme.spacing
  theme.scrollMargin = theme.spacing
  theme.scrollPadding = theme.spacing
  theme.translate = {
    ...theme.spacing,
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    full: '100%',
  }
  theme.inset = {
    ...theme.spacing,
    auto: 'auto',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    full: '100%',
  }
  theme.flexBasis = {
    ...theme.spacing,
    auto: 'auto',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
  }

  theme.height = {
    ...theme.spacing,
    auto: 'auto',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    full: '100%',
    screen: '100vh',
    svh: '100svh',
    lvh: '100lvh',
    dvh: '100dvh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  }
  theme.width = {
    ...theme.spacing,
    auto: 'auto',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
    screen: '100vw',
    svw: '100svw',
    lvw: '100lvw',
    dvw: '100dvw',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  }
  theme.maxHeight = {
    ...theme.spacing,
    none: 'none',
    full: '100%',
    screen: '100vh',
    svh: '100svh',
    lvh: '100lvh',
    dvh: '100dvh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  }
  theme.maxWidth = {
    none: 'none',
    0: '0rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    prose: '65ch',
    ...breakpoints(theme.screens),
  }
}
