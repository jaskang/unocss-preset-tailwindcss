import type { Rule, Shortcut } from '@unocss/core'

import type { FullTheme } from '../theme'
import { container, containerShortcuts } from './container'
import { inset } from './inset'
import {
  aspectRatio,
  boxDecorationBreak,
  boxSizing,
  breakAfter,
  breakBefore,
  breakInside,
  clear,
  columns,
  display,
  flex,
  flexBasic,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  floats,
  isolation,
  objectFit,
  objectPosition,
  overflow,
  overscrollBehavior,
  position,
  visibility,
  zIndex,
} from './simples'

export const rules: Rule<FullTheme>[] = [
  // Layout
  ...aspectRatio,
  container,
  ...columns,
  ...breakAfter,
  ...breakBefore,
  ...breakInside,
  ...boxDecorationBreak,
  ...boxSizing,
  ...display,
  ...floats,
  ...clear,
  ...isolation,
  ...objectFit,
  ...objectPosition,
  ...overflow,
  ...overscrollBehavior,
  ...position,
  ...inset,
  ...visibility,
  ...zIndex,
  // Flexbox & Grid
  ...flexBasic,
  ...flexDirection,
  ...flexWrap,
  ...flex,
  ...flexGrow,
  ...flexShrink,
]

export const shortcuts: Shortcut<FullTheme>[] = [containerShortcuts]
