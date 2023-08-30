# unocss-preset-tailwindcss (WIP)

一个与 tailwind 保持一致的 unocss preset

尽可能的保证 tailwind 用户能够无缝切换到 unocss-preset-tailwindcss

切换语言: [English](./README.md) | [中文](./README.zh-CN.md)

## 为什么

unocss 很快，有着体验很好的 vscode 插件并且和前端工具链集成得更好。但官方的内置 preset-wind 没有严格遵循 tailwind 的规则，太过自由且缺少 rule 文档。

tailwind 包含了一套非常高标准的设计规范，能保障在没有设计师参与的情况下我的页面也能美观。

我希望开发者只需要关注 tailwind 的官方文档，但同时又能享受到 unocss 的优质体验。

例如:

> 在 `preset-wind` 中 `m<num>` 与 `m-<num>` 是一样的，且 `<num>` 支持任意值， 而 tailwind 中有固定的规范，只有 `m-[5px]` 才是用户自定义的值。

```html
<!-- unocss preset-wind -->
<div class="m-6 m5"></div>
<!-- output -->
<style>
  .m-6 {
    margin: 1.5rem;
  }
  .m5 {
    margin: 1.25rem;
  }
</style>
```

## 进展

### Base Styles

- [] Preflight

### Layout

- [] Aspect Ratio
- [] Container
- [] Columns
- [] Break After
- [] Break Before
- [] Break Inside
- [] Box Decoration Break
- [] Box Sizing
- [] Display
- [] Floats
- [] Clear
- [] Isolation
- [] Object Fit
- [] Object Position
- [] Overflow
- [] Overscroll Behavior
- [] Position
- [] Top / Right / Bottom / Left
- [] Visibility
- [] Z-Index

### Flexbox & Grid

- [] Flex Basis
- [] Flex Direction
- [] Flex Wrap
- [] Flex
- [] Flex Grow
- [] Flex Shrink
- [] Order
- [] Grid Template Columns
- [] Grid Column Start / End
- [] Grid Template Rows
- [] Grid Row Start / End
- [] Grid Auto Flow
- [] Grid Auto Columns
- [] Grid Auto Rows
- [] Gap
- [] Justify Content
- [] Justify Items
- [] Justify Self
- [] Align Content
- [] Align Items
- [] Align Self
- [] Place Content
- [] Place Items
- [] Place Self

### Spacing

- [] Padding
- [] Margin
- [] Space Between

### Sizing

- [] Width
- [] Min-Width
- [] Max-Width
- [] Height
- [] Min-Height
- [] Max-Height

### Typography

- [] Font Family
- [] Font Size
- [] Font Smoothing
- [] Font Style
- [] Font Weight
- [] Font Variant Numeric
- [] Letter Spacing
- [] Line Clamp
- [] Line Height
- [] List Style Image
- [] List Style Position
- [] List Style Type
- [] Text Align
- [] Text Color
- [] Text Decoration
- [] Text Decoration Color
- [] Text Decoration Style
- [] Text Decoration Thickness
- [] Text Underline Offset
- [] Text Transform
- [] Text Overflow
- [] Text Indent
- [] Vertical Align
- [] Whitespace
- [] Word Break
- [] Hyphens
- [] Content

### Backgrounds

- [] Background Attachment
- [] Background Clip
- [] Background Color
- [] Background Origin
- [] Background Position
- [] Background Repeat
- [] Background Size
- [] Background Image
- [] Gradient Color Stops

### Borders

- [] Border Radius
- [] Border Width
- [] Border Color
- [] Border Style
- [] Divide Width
- [] Divide Color
- [] Divide Style
- [] Outline Width
- [] Outline Color
- [] Outline Style
- [] Outline Offset
- [] Ring Width
- [] Ring Color
- [] Ring Offset Width
- [] Ring Offset Color

### Effects

- [] Box Shadow
- [] Box Shadow Color
- [] Opacity
- [] Mix Blend Mode
- [] Background Blend Mode

### Filters

- [] Blur
- [] Brightness
- [] Contrast
- [] Drop Shadow
- [] Grayscale
- [] Hue Rotate
- [] Invert
- [] Saturate
- [] Sepia
- [] Backdrop Blur
- [] Backdrop Brightness
- [] Backdrop Contrast
- [] Backdrop Grayscale
- [] Backdrop Hue Rotate
- [] Backdrop Invert
- [] Backdrop Opacity
- [] Backdrop Saturate
- [] Backdrop Sepia

### Tables

- [] Border Collapse
- [] Border Spacing
- [] Table Layout
- [] Caption Side

### Transitions & Animation

- [] Transition Property
- [] Transition Duration
- [] Transition Timing Function
- [] Transition Delay
- [] Animation

### Transforms

- [] Scale
- [] Rotate
- [] Translate
- [] Skew
- [] Transform Origin

### Interactivity

- [] Accent Color
- [] Appearance
- [] Cursor
- [] Caret Color
- [] Pointer Events
- [] Resize
- [] Scroll Behavior
- [] Scroll Margin
- [] Scroll Padding
- [] Scroll Snap Align
- [] Scroll Snap Stop
- [] Scroll Snap Type
- [] Touch Action
- [] User Select
- [] Will Change

### SVG

- [] Fill
- [] Stroke
- [] Stroke Width

### Accessibility

- [] Screen Readers

### Official Plugins

- [] Typography
- [] Forms
- [] Aspect Ratio
- [] Container Queries
