<template>
  <div class="app">
    <van-doc
      :lang="lang"
      :config="config"
      :simulator="simulator"
      :lang-configs="langConfigs"
    >
      <router-view />
    </van-doc>
  </div>
</template>

<script>
import VanDoc from './components';
import { config } from 'site-desktop-shared';
import { setLang } from '../common/locales';

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

    langConfigs() {
      const { locales = {} } = config.site;
      return Object.keys(locales).map(key => ({
        lang: key,
        label: locales[key].langLabel || ''
      }));
    },

    config() {
      const { locales } = config.site;

      if (locales) {
        return locales[this.lang];
      }

      return config.site;
    }
  },

  watch: {
    lang(val) {
      setLang(val);
      this.setTitle();
    }
  },

  created() {
    this.setTitle();
  },

  methods: {
    setTitle() {
      let { title } = this.config;

      if (this.config.description) {
        title += ` - ${this.config.description}`;
      }

      document.title = title;
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
