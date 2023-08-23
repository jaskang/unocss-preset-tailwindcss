export {}

// bracketValue('[16_,_9]') => `16 , 9`
export function bracketValue(value: string) {
  if (value.startsWith('[') && value.endsWith(']')) {
    const val = value.slice(1, -1).replace(/_/g, ' ')
    return val
  }
  return null
}
