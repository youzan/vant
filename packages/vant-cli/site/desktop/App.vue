<template>
  <div class="app">
    <van-doc
      v-if="config"
      :lang="lang"
      :config="config"
      :versions="versions"
      :simulator="simulator"
      :lang-configs="langConfigs"
    >
      <router-view />
    </van-doc>
  </div>
</template>

<script>
import VanDoc from './components';
import { config, packageVersion } from 'site-desktop-shared';
import { setLang } from '../common/locales';
import { scrollToAnchor } from './utils';

export default {
  components: {
    VanDoc,
  },

  data() {
    const path = location.pathname.replace(/\/index(\.html)?/, '/');

    return {
      packageVersion,
      simulator: `${path}mobile.html${location.hash}`,
    };
  },

  computed: {
    lang() {
      const { lang } = this.$route.meta;
      return lang || '';
    },

    langConfigs() {
      const { locales = {} } = config.site;
      return Object.keys(locales).map((key) => ({
        lang: key,
        label: locales[key].langLabel || '',
      }));
    },

    config() {
      const { locales } = config.site;

      if (locales) {
        return locales[this.lang];
      }

      return config.site;
    },

    versions() {
      if (config.site.versions) {
        return [{ label: packageVersion }, ...config.site.versions];
      }

      return null;
    },
  },

  watch: {
    // eslint-disable-next-line
    '$route.path'() {
      this.setTitle();
    },

    lang(val) {
      setLang(val);
      this.setTitle();
    },

    config: {
      handler(val) {
        if (val) {
          this.setTitle();
        }
      },
      immediate: true,
    },
  },

  mounted() {
    if (this.$route.hash) {
      scrollToAnchor(this.$route.hash);
    }
  },

  methods: {
    setTitle() {
      let { title } = this.config;

      const navItems = this.config.nav.reduce(
        (result, nav) => [...result, ...nav.items],
        []
      );

      const current = navItems.find((item) => {
        return item.path === this.$route.meta.name;
      });

      if (current && current.title) {
        title = current.title + ' - ' + title;
      } else if (this.config.description) {
        title += ` - ${this.config.description}`;
      }

      document.title = title;
    },
  },
};
</script>

<style lang="less">
@import '../common/style/base';
@import '../common/style/highlight';

.van-doc-intro {
  padding-top: 20px;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}
</style>
