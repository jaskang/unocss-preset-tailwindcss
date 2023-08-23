import type { Rule } from '@unocss/core'

import type { Theme } from '../theme'
import { aspectRatio, container, containerShortcuts } from './layout'

export const rules: Rule<Theme>[] = [...aspectRatio, ...container]

export const shortcuts = [...containerShortcuts]
