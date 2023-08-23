type ColorLv = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
type ThemeColorValue = Record<
  string,
  | string
  | {
      [key in ColorLv]?: string
    }
>
type ThemeValue = Record<string, string>
type ThemeArrayValue = Record<string, string | string[]>
/**
 * ({ theme }) => theme('key') 标识从 theme 中获取 key 对应的值
 */
export interface Theme {
  colors: ThemeColorValue
  animation: ThemeValue
  aria: ThemeValue
  aspectRatio: ThemeValue
  backgroundImage: ThemeValue
  backgroundPosition: ThemeValue
  backgroundSize: ThemeValue
  blur: ThemeValue
  borderRadius: ThemeValue
  borderWidth: ThemeValue
  boxShadow: ThemeValue
  brightness: ThemeValue
  columns: ThemeValue
  container: {
    center?: boolean
    padding?: ThemeValue | string
  }
  content: ThemeValue
  contrast: ThemeValue
  cursor: ThemeValue
  dropShadow: ThemeArrayValue
  flex: ThemeValue
  flexGrow: ThemeValue
  flexShrink: ThemeValue
  fontFamily: ThemeArrayValue
  fontSize: Record<string, [string, string]>
  fontWeight: ThemeValue
  gradientColorStopPositions: ThemeValue
  grayscale: ThemeValue
  gridAutoColumns: ThemeValue
  gridAutoRows: ThemeValue
  gridColumn: ThemeValue
  gridColumnEnd: ThemeValue
  gridColumnStart: ThemeValue
  gridRow: ThemeValue
  gridRowEnd: ThemeValue
  gridRowStart: ThemeValue
  gridTemplateColumns: ThemeValue
  gridTemplateRows: ThemeValue
  hueRotate: ThemeValue
  invert: ThemeValue
  keyframes: Record<string, any>
  letterSpacing: ThemeValue
  lineHeight: ThemeValue
  listStyleType: ThemeValue
  listStyleImage: ThemeValue
  lineClamp: ThemeValue
  minHeight: ThemeValue
  minWidth: ThemeValue
  objectPosition: ThemeValue
  opacity: ThemeValue
  order: ThemeValue
  outlineOffset: ThemeValue
  outlineWidth: ThemeValue
  ringOffsetWidth: ThemeValue
  ringWidth: ThemeValue
  rotate: ThemeValue
  saturate: ThemeValue
  scale: ThemeValue
  screens: ThemeValue
  sepia: ThemeValue
  skew: ThemeValue
  spacing: ThemeValue
  strokeWidth: ThemeValue
  supports: ThemeValue
  data: ThemeValue
  textDecorationThickness: ThemeValue
  textUnderlineOffset: ThemeValue
  transformOrigin: ThemeValue
  transitionDelay: ThemeValue
  transitionDuration: ThemeValue
  transitionProperty: ThemeValue
  transitionTimingFunction: ThemeValue
  willChange: ThemeValue
  zIndex: ThemeValue
}

export interface FullTheme extends Theme {
  accentColor: ThemeColorValue
  backgroundColor: ThemeColorValue
  borderColor: ThemeColorValue
  boxShadowColor: ThemeColorValue
  caretColor: ThemeColorValue
  fill: ThemeColorValue
  gradientColorStops: ThemeColorValue
  outlineColor: ThemeColorValue
  placeholderColor: ThemeColorValue
  ringColor: ThemeColorValue
  ringOffsetColor: ThemeColorValue
  stroke: ThemeColorValue
  textColor: ThemeColorValue
  textDecorationColor: ThemeColorValue
  divideColor: ThemeColorValue

  backgroundOpacity: ThemeValue
  backdropOpacity: ThemeValue
  borderOpacity: ThemeValue
  placeholderOpacity: ThemeValue
  ringOpacity: ThemeValue
  textOpacity: ThemeValue
  divideOpacity: ThemeValue

  backdropBlur: ThemeValue
  backdropBrightness: ThemeValue
  backdropContrast: ThemeValue
  backdropGrayscale: ThemeValue
  backdropHueRotate: ThemeValue
  backdropInvert: ThemeValue
  backdropSaturate: ThemeValue
  backdropSepia: ThemeValue
  divideWidth: ThemeValue

  margin: ThemeValue
  padding: ThemeValue
  gap: ThemeValue
  space: ThemeValue
  textIndent: ThemeValue
  borderSpacing: ThemeValue
  scrollMargin: ThemeValue
  scrollPadding: ThemeValue
  translate: ThemeValue
  inset: ThemeValue
  flexBasis: ThemeValue

  height: ThemeValue
  width: ThemeValue
  maxHeight: ThemeValue
  maxWidth: ThemeValue
}
