import type { colors } from './colors'

type KeyValuePair<K extends keyof any = string, V = string> = Record<K, V>

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>
}

interface PluginUtils {
  colors: typeof colors
  theme(path: string, defaultValue?: unknown): any
  breakpoints<I = Record<string, unknown>, O = I>(arg: I): O
  rgb(arg: string): (arg: Partial<{ opacityVariable: string; opacityValue: number }>) => string
  hsl(arg: string): (arg: Partial<{ opacityVariable: string; opacityValue: number }>) => string
}

export type ResolvableTo<T> = T | ((utils: PluginUtils) => T)

type Screen = { raw: string } | { min: string } | { max: string } | { min: string; max: string }
type ScreensConfig = string[] | KeyValuePair<string, string | Screen | Screen[]>

export interface Theme {
  // Responsiveness
  screens: ResolvableTo<ScreensConfig>
  supports: ResolvableTo<Record<string, string>>
  data: ResolvableTo<Record<string, string>>

  // Reusable base configs
  colors: ResolvableTo<RecursiveKeyValuePair>
  spacing: ResolvableTo<KeyValuePair>

  // Components
  container: ResolvableTo<
    Partial<{
      screens: ScreensConfig
      center: boolean
      padding: string | Record<string, string>
    }>
  >

  // Utilities
  inset: Theme['spacing']
  zIndex: ResolvableTo<KeyValuePair>
  order: ResolvableTo<KeyValuePair>
  gridColumn: ResolvableTo<KeyValuePair>
  gridColumnStart: ResolvableTo<KeyValuePair>
  gridColumnEnd: ResolvableTo<KeyValuePair>
  gridRow: ResolvableTo<KeyValuePair>
  gridRowStart: ResolvableTo<KeyValuePair>
  gridRowEnd: ResolvableTo<KeyValuePair>
  margin: Theme['spacing']
  aspectRatio: ResolvableTo<KeyValuePair>
  height: Theme['spacing']
  maxHeight: Theme['spacing']
  minHeight: ResolvableTo<KeyValuePair>
  width: Theme['spacing']
  maxWidth: ResolvableTo<KeyValuePair>
  minWidth: ResolvableTo<KeyValuePair>
  flex: ResolvableTo<KeyValuePair>
  flexShrink: ResolvableTo<KeyValuePair>
  flexGrow: ResolvableTo<KeyValuePair>
  flexBasis: Theme['spacing']
  borderSpacing: Theme['spacing']
  transformOrigin: ResolvableTo<KeyValuePair>
  translate: Theme['spacing']
  rotate: ResolvableTo<KeyValuePair>
  skew: ResolvableTo<KeyValuePair>
  scale: ResolvableTo<KeyValuePair>
  animation: ResolvableTo<KeyValuePair>
  keyframes: ResolvableTo<KeyValuePair<string, KeyValuePair<string, KeyValuePair>>>
  cursor: ResolvableTo<KeyValuePair>
  scrollMargin: Theme['spacing']
  scrollPadding: Theme['spacing']
  listStyleType: ResolvableTo<KeyValuePair>
  columns: ResolvableTo<KeyValuePair>
  gridAutoColumns: ResolvableTo<KeyValuePair>
  gridAutoRows: ResolvableTo<KeyValuePair>
  gridTemplateColumns: ResolvableTo<KeyValuePair>
  gridTemplateRows: ResolvableTo<KeyValuePair>
  gap: Theme['spacing']
  space: Theme['spacing']
  divideWidth: Theme['borderWidth']
  divideColor: Theme['borderColor']
  divideOpacity: Theme['borderOpacity']
  borderRadius: ResolvableTo<KeyValuePair>
  borderWidth: ResolvableTo<KeyValuePair>
  borderColor: Theme['colors']
  borderOpacity: Theme['opacity']
  backgroundColor: Theme['colors']
  backgroundOpacity: Theme['opacity']
  backgroundImage: ResolvableTo<KeyValuePair>
  gradientColorStops: Theme['colors']
  backgroundSize: ResolvableTo<KeyValuePair>
  backgroundPosition: ResolvableTo<KeyValuePair>
  fill: Theme['colors']
  stroke: Theme['colors']
  strokeWidth: ResolvableTo<KeyValuePair>
  objectPosition: ResolvableTo<KeyValuePair>
  padding: Theme['spacing']
  textIndent: Theme['spacing']
  fontFamily: ResolvableTo<
    KeyValuePair<
      string,
      | string
      | string[]
      | [
          fontFamily: string | string[],
          configuration: Partial<{
            fontFeatureSettings: string
            fontVariationSettings: string
          }>,
        ]
    >
  >
  fontSize: ResolvableTo<
    KeyValuePair<
      string,
      | string
      | [fontSize: string, lineHeight: string]
      | [
          fontSize: string,
          configuration: Partial<{
            lineHeight: string
            letterSpacing: string
            fontWeight: string | number
          }>,
        ]
    >
  >
  fontWeight: ResolvableTo<KeyValuePair>
  lineHeight: ResolvableTo<KeyValuePair>
  letterSpacing: ResolvableTo<KeyValuePair>
  textColor: Theme['colors']
  textOpacity: Theme['opacity']
  textDecorationColor: Theme['colors']
  textDecorationThickness: ResolvableTo<KeyValuePair>
  textUnderlineOffset: ResolvableTo<KeyValuePair>
  placeholderColor: Theme['colors']
  placeholderOpacity: Theme['opacity']
  caretColor: Theme['colors']
  accentColor: Theme['colors']
  opacity: ResolvableTo<KeyValuePair>
  boxShadow: ResolvableTo<KeyValuePair>
  boxShadowColor: Theme['colors']
  outlineWidth: ResolvableTo<KeyValuePair>
  outlineOffset: ResolvableTo<KeyValuePair>
  outlineColor: Theme['colors']
  ringWidth: ResolvableTo<KeyValuePair>
  ringColor: Theme['colors']
  ringOpacity: Theme['opacity']
  ringOffsetWidth: ResolvableTo<KeyValuePair>
  ringOffsetColor: Theme['colors']
  blur: ResolvableTo<KeyValuePair>
  brightness: ResolvableTo<KeyValuePair>
  contrast: ResolvableTo<KeyValuePair>
  dropShadow: ResolvableTo<KeyValuePair<string, string | string[]>>
  grayscale: ResolvableTo<KeyValuePair>
  hueRotate: ResolvableTo<KeyValuePair>
  invert: ResolvableTo<KeyValuePair>
  saturate: ResolvableTo<KeyValuePair>
  sepia: ResolvableTo<KeyValuePair>
  backdropBlur: Theme['blur']
  backdropBrightness: Theme['brightness']
  backdropContrast: Theme['contrast']
  backdropGrayscale: Theme['grayscale']
  backdropHueRotate: Theme['hueRotate']
  backdropInvert: Theme['invert']
  backdropOpacity: Theme['opacity']
  backdropSaturate: Theme['saturate']
  backdropSepia: Theme['sepia']
  transitionProperty: ResolvableTo<KeyValuePair>
  transitionTimingFunction: ResolvableTo<KeyValuePair>
  transitionDelay: ResolvableTo<KeyValuePair>
  transitionDuration: ResolvableTo<KeyValuePair>
  willChange: ResolvableTo<KeyValuePair>
  content: ResolvableTo<KeyValuePair>

  // Custom
  [key: string]: unknown
}
