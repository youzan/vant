<template>
  <div class="app">
    <van-doc
      :lang="lang"
      :config="config"
      :versions="versions"
      :simulator="simulator"
      :lang-configs="langConfigs"
    >
      <Content class="" />
    </van-doc>
    <svg
      @click="goTop"
      data-v-591d7001=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49.484 28.284"
      class="go-to-top"
    >
      <g data-v-591d7001="" transform="translate(-229 -126.358)">
        <rect
          data-v-591d7001=""
          fill="currentColor"
          width="35"
          height="5"
          rx="2"
          transform="translate(229 151.107) rotate(-45)"
        />
        <rect
          data-v-591d7001=""
          fill="currentColor"
          width="35"
          height="5"
          rx="2"
          transform="translate(274.949 154.642) rotate(-135)"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import VanDoc from '../components';
import { setLang } from '../common/locales';

export default {
  components: {
    VanDoc,
  },

  data() {
    return {
      themeConfig: {
        site: {
          nav: [],
        },
      },
      simulator: '',
    };
  },

  computed: {
    lang() {
      const { lang } = this.$route.meta;
      return lang || '';
    },

    langConfigs() {
      const { locales = {} } = this.themeConfig.site;
      return Object.keys(locales).map(key => ({
        lang: key,
        label: locales[key].langLabel || '',
      }));
    },

    config() {
      const { locales } = this.themeConfig.site;

      if (locales) {
        return locales[this.lang];
      }

      return this.themeConfig.site;
    },

    versions() {
      if (this.themeConfig.site.versions) {
        return [...this.themeConfig.site.versions];
      }

      return null;
    },
  },

  watch: {
    lang(val) {
      setLang(val);
      this.setTitle();
    },

    '$route.path': function() {
      this.$nextTick(() => {
        this.setTitle();
      });
    },
  },

  mounted() {
    this.themeConfig = this.$site.themeConfig;
    this.simulator = this.$page.frontmatter.simulator || '';
    this.setTitle();
  },

  methods: {
    setTitle() {
      let { title } = this.$page.frontmatter;

      if (!title) {
        title = document.querySelector('h1') && document.querySelector('h1').id;
      }

      if (!title) {
        ({ title } = this.config);
      }

      if (this.config.description) {
        title += ` - ${this.config.description}`;
      }

      document.title = title;
    },
    goTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="less">
@import '../common/style/base';
@import '../common/style/highlight';

.van-doc-intro {
  padding-top: 20px;
  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}

code {
  display: inherit;
}

body {
  background: #f7f8fa;
}

.content__default {
  padding: 30px;
  overflow: hidden;
}

.go-to-top {
  position: fixed;
  right: 2.5rem;
  bottom: 2rem;
  z-index: 1;
  width: 2rem;
  color: #3eaf7c;
  cursor: pointer;
}
</style>
