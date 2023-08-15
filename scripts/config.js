import dlv from 'dlv'

import colors from './origin/colors.js'
import configFull from './origin/config.full.js'

const result = {}

function toPath(path) {
  if (Array.isArray(path)) return path

  let openBrackets = path.split('[').length - 1
  let closedBrackets = path.split(']').length - 1

  if (openBrackets !== closedBrackets) {
    throw new Error(`Path is invalid. Has unbalanced brackets: ${path}`)
  }

  return path.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean)
}

function breakpoints(screens) {
  return Object.keys(screens)
    .filter(key => typeof screens[key] === 'string')
    .reduce(
      (breakpoints, key) => ({
        ...breakpoints,
        [`screen-${key}`]: screens[key],
      }),
      {}
    )
}

const temp = {}
function theme(str) {
  let val = temp[str]
  if (val) {
    return val
  }
  val = dlv(configFull.theme, toPath(str))
  if (typeof val === 'function') {
    val = val({ colors, theme, breakpoints })
  }
  temp[str] = val
  return val
}

function expandConfig(config) {
  if (typeof config === 'function') {
    const v = config({ colors, theme, breakpoints })
    return expandConfig(v)
  } else if (typeof config === 'object' && !Array.isArray(config)) {
    const v = {}
    Object.keys(config).forEach(key => {
      v[key] = expandConfig(config[key])
    })
    return v
  }
  return config
}

function output() {
  const config = expandConfig(configFull.theme)
  console.log(`export default ${JSON.stringify(config)}`)
}

output()
