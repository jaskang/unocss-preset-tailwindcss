import type { Rule } from '@unocss/core'

import type { FullTheme } from '.'

// bracketValue('[16_,_9]') => `16 , 9`
export function bracketValue(value: string) {
  if (value.startsWith('[') && value.endsWith(']')) {
    const val = value.slice(1, -1).replace(/_/g, ' ')
    return val
  }
  return null
}

export function maybeCustom(name: string, value: string) {
  const val = bracketValue(value)
  if (val)
    return {
      [name]: val,
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
  cssKey = ''
): Rule<FullTheme> {
  return [
    new RegExp(`^${prefix}-(.+)$`),
    ([, v], { theme }) => {
      const attr = cssKey || themeKey.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)
      // @ts-expect-error
      if (theme[themeKey][v]) {
        // @ts-expect-error
        return { [attr]: theme[themeKey][v] }
      }
      return maybeCustom(attr, v)
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
  cssKey = ''
): Rule<FullTheme> {
  return [
    new RegExp(`^${prefix}(?:-(.*))?$`),
    ([, v = 'DEFAULT'], { theme }) => {
      // if cssKey is not provided, use themeKey with caseName to '-' case
      const attr = cssKey || themeKey.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)
      // @ts-expect-error
      if (theme[themeKey][v]) {
        // @ts-expect-error
        return { [attr]: theme[themeKey][v] }
      }
      return maybeCustom(attr, v)
    },
    { autocomplete: [prefix, `${prefix}-$${themeKey}`] },
  ]
}
