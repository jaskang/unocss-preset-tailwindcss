import type { CSSValues, Rule } from '@unocss/core'

import type { FullTheme } from '.'

/**
 * Convert a `string` to space case.
 */
export function kebabCase(str: string): string {
  return str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)
}

// bracketValue('[16_,_9]') => `16 , 9`
export function bracketValue(value: string) {
  if (value.startsWith('[') && value.endsWith(']')) {
    const val = value.slice(1, -1).replace(/_/g, ' ')
    return val
  }
  return null
}

export function maybeCustom(name: string | string[], value: string) {
  const val = bracketValue(value)
  if (val) {
    const attrs = Array.isArray(name) ? name : [name]
    return attrs.map(k => [k, val]) as CSSValues
  }
}

/**
 * 创建一个简单的规则，用于匹配 `^${prefix}-(.+)$` 的形式，然后将匹配到的值映射到 `theme[themeKey]` 中，如果没有找到，则将其作为自定义值。
 * @param prefix  正则表达式前缀，用于匹配。匹配 `^${prefix}-(.+)$`。
 * @param themeKey 主题属性名称
 * @param cssKey  CSS 属性名称。如果未提供，则使用 `themeKey`，并将其转换为 `-` 形式。
 * @returns
 */
export function simpleRule(
  prefix: string,
  themeKey: keyof FullTheme,
  cssKeys: string | string[] = '',
  allowCustom = true
): Rule<FullTheme> {
  return [
    new RegExp(`^${prefix}-(.+)$`),
    ([, v], { theme }) => {
      const attrs = cssKeys ? (Array.isArray(cssKeys) ? cssKeys : [cssKeys]) : [kebabCase(themeKey)]
      // @ts-expect-error
      const val = theme[themeKey][v] || (allowCustom ? bracketValue(v) : null)
      // console.log('simpleRule', v, theme[themeKey], val)
      if (val) {
        return attrs.map(k => [k, val]) as CSSValues
      }
    },
    { autocomplete: [`${prefix}-$${themeKey}`] },
  ]
}

/**
 * 同 simpleRule ，区别在于这个规则能匹配 `^${prefix}$` 的形式,  并使用 `DEFAULT` 作为默认值。
 * @param prefix 正则表达式前缀，用于匹配。匹配 `^${prefix}(?:-(.*))?$`。
 * @param themeKey 主题属性名称
 * @param cssKey CSS 属性名称。如果未提供，则使用 `themeKey`，并将其转换为 `-` 形式。
 * @returns
 */
export function simpleRuleOptional(
  prefix: string,
  themeKey: keyof FullTheme,
  cssKeys: string | string[] = '',
  allowCustom = true
): Rule<FullTheme> {
  return [
    new RegExp(`^${prefix}(?:-(.*))?$`),
    ([, v = 'DEFAULT'], { theme }) => {
      const attrs = cssKeys ? (Array.isArray(cssKeys) ? cssKeys : [cssKeys]) : [kebabCase(themeKey)]
      // @ts-expect-error
      const val = theme[themeKey][v] || (allowCustom ? bracketValue(v) : null)
      if (val) {
        return attrs.map(k => [k, val]) as CSSValues
      }
    },
    { autocomplete: [prefix, `${prefix}-$${themeKey}`] },
  ]
}
