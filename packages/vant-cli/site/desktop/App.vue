<template>
  <div class="app">
    <van-doc :lang="lang" :config="config" :simulator="simulator">
      <router-view />
    </van-doc>
  </div>
</template>

<script>
import VanDoc from './components';
import { config } from 'site-desktop-shared';

function getPublicPath() {
  const { site } = config.build || {};

  if (process.env.NODE_ENV === 'production') {
    return (site && site.publicPath) || '/';
  }

  return '/';
}

export default {
  components: {
    VanDoc
  },

  data() {
    return {
      simulator: `${getPublicPath()}mobile.html${location.hash}`
    };
  },

  computed: {
    lang() {
      const { lang } = this.$route.meta;
      return lang || '';
    },

    config() {
      const { locales } = config.site;

      if (locales) {
        const { lang } = this.$route.meta;
        return locales[lang];
      }

      return config.site;
    }
  }
};
</script>

<style lang="less">
.van-doc-intro {
  padding-top: 20px;
  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}
</style>
