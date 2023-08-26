import type { Rule } from '@unocss/core'

import type { Theme } from '../theme'
import { aspectRatio } from './aspectRatio'
import { container } from './container'

export const rules: Rule<Theme>[] = [...aspectRatio, ...container]

export const shortcuts = []
