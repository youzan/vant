import { useNuxt } from '@nuxt/kit'
import { libraryName } from '../config'

export function resolveOptions () {
  const nuxt = useNuxt()

  nuxt.options.build.transpile.push(libraryName)
}
