import dlv from 'dlv'
import { isObject } from 'kotl'

import type { Theme } from './types'
/**
 * Parse a path string into an array of path segments.
 *
 * Square bracket notation `a[b]` may be used to "escape" dots that would otherwise be interpreted as path separators.
 *
 * Example:
 * a -> ['a']
 * a.b.c -> ['a', 'b', 'c']
 * a[b].c -> ['a', 'b', 'c']
 * a[b.c].e.f -> ['a', 'b.c', 'e', 'f']
 * a[b][c][d] -> ['a', 'b', 'c', 'd']
 *
 **/
function toPath(path: string | string[]) {
  if (Array.isArray(path)) return path

  const openBrackets = path.split('[').length - 1
  const closedBrackets = path.split(']').length - 1

  if (openBrackets !== closedBrackets) {
    throw new Error(`Path is invalid. Has unbalanced brackets: ${path}`)
  }

  return path.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean)
}

function transformThemeValue(themeSection: string) {
  if (['fontSize', 'outline'].includes(themeSection)) {
    return (value: any) => {
      if (typeof value === 'function') value = value({})
      if (Array.isArray(value)) value = value[0]

      return value
    }
  }

  if (themeSection === 'fontFamily') {
    return (value: any) => {
      if (typeof value === 'function') value = value({})
      const families = Array.isArray(value) && isObject(value[1]) ? value[0] : value
      return Array.isArray(families) ? families.join(', ') : families
    }
  }

  if (
    [
      'boxShadow',
      'transitionProperty',
      'transitionDuration',
      'transitionDelay',
      'transitionTimingFunction',
      'backgroundImage',
      'backgroundSize',
      'backgroundColor',
      'cursor',
      'animation',
    ].includes(themeSection)
  ) {
    return (value: any) => {
      if (typeof value === 'function') value = value({})
      if (Array.isArray(value)) value = value.join(', ')

      return value
    }
  }

  // TODO: 这里需要再看看是否需要处理
  // For backwards compatibility reasons, before we switched to underscores
  // instead of commas for arbitrary values.
  // if (['gridTemplateColumns', 'gridTemplateRows', 'objectPosition'].includes(themeSection)) {
  //   return (value) => {
  //     if (typeof value === 'function') value = value({})
  //     if (typeof value === 'string') value = postcss.list.comma(value).join(' ')
  //     return value
  //   }
  // }
  return (value: any, opts = {}) => {
    if (typeof value === 'function') {
      value = value(opts)
    }
    return value
  }
}

export function resolveThemeValue(theme: Theme, path: string | string[], defaultValue?: any) {
  const parts = toPath(path)
  const value = parts ? dlv(theme, parts, defaultValue) : theme
  return transformThemeValue(parts[0])(value)
}
