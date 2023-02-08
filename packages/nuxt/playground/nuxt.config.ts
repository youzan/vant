import { defineNuxtConfig } from 'nuxt/config'
import Vant from '..'

export default defineNuxtConfig({
  modules: [Vant],
  vant: {
    lazyload: true,
    exclude: [/vant\/packages\/vant\/es/]
  }
})
