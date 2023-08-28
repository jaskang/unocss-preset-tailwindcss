import type { Rule, Shortcut } from '@unocss/core'

import type { Theme } from '../theme'
import { container, containerShortcuts } from './container'
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

export const rules: Rule<Theme>[] = [
  container,
  ...aspectRatio,
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
  ...visibility,
  ...zIndex,
]

export const shortcuts: Shortcut<Theme>[] = [containerShortcuts]
