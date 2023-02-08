import AllComponents from 'vant'
import type { Options, PresetImport } from './types'

export const libraryName = 'vant'

const allComponents = Object.keys(AllComponents).filter(name =>
  /^[A-Z][A-Za-z]*[^_][A-Za-z]*$/.test(name)
)

export const allImportsWithStyle: Record<string, string> = {
  showDialog: 'Dialog',
  showConfirmDialog: 'Dialog',
  showImagePreview: 'ImagePreview',
  showNotify: 'Notify',
  showToast: 'Toast',
  showFailToast: 'Toast',
  showLoadingToast: 'Toast',
  showSuccessToast: 'Toast'
}

const allImports: PresetImport[] = [
  ...Object.keys(allImportsWithStyle),
  'closeDialog',
  'setDialogDefaultOptions',
  'resetDialogDefaultOptions',
  'closeNotify',
  'setNotifyDefaultOptions',
  'resetNotifyDefaultOptions',
  'closeToast',
  'allowMultipleToast',
  'setToastDefaultOptions',
  'resetToastDefaultOptions'
]

const defaultInclude: RegExp[] = [
  /\.vue$/,
  /\.vue\?vue/,
  /\.vue\?v=/,
  /\.((c|m)?j|t)sx?$/
]

const defaultExclude: RegExp[] = [
  /[\\/]node_modules[\\/]/,
  /[\\/]\.git[\\/]/,
  /[\\/]\.nuxt[\\/]/
]

export const defaults: Options = {
  lazyload: false,
  components: allComponents,
  imports: allImports,
  include: defaultInclude,
  exclude: defaultExclude
}
