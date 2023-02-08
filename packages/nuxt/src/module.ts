import { addPluginTemplate, defineNuxtModule } from '@nuxt/kit'
import { defaults, libraryName } from './config'
import {
  resolveComponents,
  resolveImports,
  resolveLazyload,
  resolveOptions,
  resolveStyles,
  transformPlugin
} from './core/index'
import type { Options } from './types'

export default defineNuxtModule<Partial<Options>>({
  meta: {
    name: libraryName,
    configKey: libraryName
  },
  defaults,
  setup (_options, nuxt) {
    const options = _options as Options

    resolveOptions()
    nuxt.options.imports.autoImport !== false && resolveImports(options)
    nuxt.options.components !== false && resolveComponents(options)
    options.lazyload && addPluginTemplate(resolveLazyload(options))

    nuxt.hook('vite:extendConfig', (config, { isClient }) => {
      const mode = isClient ? 'client' : 'server'

      config.plugins = config.plugins || []
      config.plugins.push(
        transformPlugin.vite({
          include: options.include,
          exclude: options.exclude,
          sourcemap: nuxt.options.sourcemap[mode],
          transformStyles: name => resolveStyles(options, name)
        })
      )
    })

    nuxt.hook('webpack:config', (configs) => {
      configs.forEach((config) => {
        const mode = config.name === 'client' ? 'client' : 'server'

        config.plugins = config.plugins || []
        config.plugins.push(
          transformPlugin.webpack({
            include: options.include,
            exclude: options.exclude,
            sourcemap: nuxt.options.sourcemap[mode],
            transformStyles: name => resolveStyles(options, name)
          })
        )
      })
    })
  }
})
