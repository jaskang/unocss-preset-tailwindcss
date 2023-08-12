import type { Rule } from '@unocss/core'

import type { Theme } from '../theme'
import { aspectRatio } from './layout'

export const rules: Rule<Theme>[] = [...aspectRatio]
