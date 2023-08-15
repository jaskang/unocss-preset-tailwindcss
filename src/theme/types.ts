type KeyValuePair<K extends keyof any = string, V = string> = Record<K, V>

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>
}

type Screen = { raw: string } | { min: string } | { max: string } | { min: string; max: string }
type ScreensConfig = string[] | KeyValuePair<string, string | Screen | Screen[]>

export interface Theme {
  // Responsiveness
  screens: ScreensConfig
  supports: Record<string, string>
  data: Record<string, string>

  // Reusable base configs
  colors: RecursiveKeyValuePair
  spacing: KeyValuePair

  // Components
  container: Partial<{
    screens: ScreensConfig
    center: boolean
    padding: string | Record<string, string>
  }>

  // Utilities
  inset: Theme['spacing']
  zIndex: KeyValuePair
  order: KeyValuePair
  gridColumn: KeyValuePair
  gridColumnStart: KeyValuePair
  gridColumnEnd: KeyValuePair
  gridRow: KeyValuePair
  gridRowStart: KeyValuePair
  gridRowEnd: KeyValuePair
  margin: Theme['spacing']
  aspectRatio: KeyValuePair
  height: Theme['spacing']
  maxHeight: Theme['spacing']
  minHeight: KeyValuePair
  width: Theme['spacing']
  maxWidth: KeyValuePair
  minWidth: KeyValuePair
  flex: KeyValuePair
  flexShrink: KeyValuePair
  flexGrow: KeyValuePair
  flexBasis: Theme['spacing']
  borderSpacing: Theme['spacing']
  transformOrigin: KeyValuePair
  translate: Theme['spacing']
  rotate: KeyValuePair
  skew: KeyValuePair
  scale: KeyValuePair
  animation: KeyValuePair
  keyframes: KeyValuePair<string, KeyValuePair<string, KeyValuePair>>
  cursor: KeyValuePair
  scrollMargin: Theme['spacing']
  scrollPadding: Theme['spacing']
  listStyleType: KeyValuePair
  columns: KeyValuePair
  gridAutoColumns: KeyValuePair
  gridAutoRows: KeyValuePair
  gridTemplateColumns: KeyValuePair
  gridTemplateRows: KeyValuePair
  gap: Theme['spacing']
  space: Theme['spacing']
  divideWidth: Theme['borderWidth']
  divideColor: Theme['borderColor']
  divideOpacity: Theme['borderOpacity']
  borderRadius: KeyValuePair
  borderWidth: KeyValuePair
  borderColor: Theme['colors']
  borderOpacity: Theme['opacity']
  backgroundColor: Theme['colors']
  backgroundOpacity: Theme['opacity']
  backgroundImage: KeyValuePair
  gradientColorStops: Theme['colors']
  backgroundSize: KeyValuePair
  backgroundPosition: KeyValuePair
  fill: Theme['colors']
  stroke: Theme['colors']
  strokeWidth: KeyValuePair
  objectPosition: KeyValuePair
  padding: Theme['spacing']
  textIndent: Theme['spacing']
  fontFamily: KeyValuePair<
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

  fontSize: KeyValuePair<
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

  fontWeight: KeyValuePair
  lineHeight: KeyValuePair
  letterSpacing: KeyValuePair
  textColor: Theme['colors']
  textOpacity: Theme['opacity']
  textDecorationColor: Theme['colors']
  textDecorationThickness: KeyValuePair
  textUnderlineOffset: KeyValuePair
  placeholderColor: Theme['colors']
  placeholderOpacity: Theme['opacity']
  caretColor: Theme['colors']
  accentColor: Theme['colors']
  opacity: KeyValuePair
  boxShadow: KeyValuePair
  boxShadowColor: Theme['colors']
  outlineWidth: KeyValuePair
  outlineOffset: KeyValuePair
  outlineColor: Theme['colors']
  ringWidth: KeyValuePair
  ringColor: Theme['colors']
  ringOpacity: Theme['opacity']
  ringOffsetWidth: KeyValuePair
  ringOffsetColor: Theme['colors']
  blur: KeyValuePair
  brightness: KeyValuePair
  contrast: KeyValuePair
  dropShadow: KeyValuePair<string, string | string[]>
  grayscale: KeyValuePair
  hueRotate: KeyValuePair
  invert: KeyValuePair
  saturate: KeyValuePair
  sepia: KeyValuePair
  backdropBlur: Theme['blur']
  backdropBrightness: Theme['brightness']
  backdropContrast: Theme['contrast']
  backdropGrayscale: Theme['grayscale']
  backdropHueRotate: Theme['hueRotate']
  backdropInvert: Theme['invert']
  backdropOpacity: Theme['opacity']
  backdropSaturate: Theme['saturate']
  backdropSepia: Theme['sepia']
  transitionProperty: KeyValuePair
  transitionTimingFunction: KeyValuePair
  transitionDelay: KeyValuePair
  transitionDuration: KeyValuePair
  willChange: KeyValuePair
  content: KeyValuePair

  // Custom
  [key: string]: unknown
}
