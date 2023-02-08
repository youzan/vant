import { allImportsWithStyle, libraryName } from '../config'
import { hyphenate } from '../utils'
import type { Options } from '../types'

export function getStyleDir (name: string) {
  return `${libraryName}/es/${hyphenate(name)}/style/index`
}

export function resolveStyles (config: Options, name: string) {
  const { components } = config

  if (name in allImportsWithStyle) {
    return getStyleDir(allImportsWithStyle[name])
  }
  if (/^Van[A-Z]/.test(name) && components.includes(name.slice(3))) {
    return getStyleDir(name.slice(3))
  }
  return undefined
}
