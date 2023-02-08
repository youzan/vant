import { libraryName } from '../config'
import { isObject } from '../utils'
import type { Options } from '../types'

export function resolveLazyload (config: Options) {
  const { lazyload } = config
  const options = isObject(lazyload) ? `, ${JSON.stringify(lazyload)}` : ''

  return {
    filename: `${libraryName}-lazyload.plugin.mjs`,
    getContents: () => `import { defineNuxtPlugin } from '#app';
import { Lazyload } from 'vant';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Lazyload${options});
})
`
  }
}
