<template>
  <div class="app">
    <van-doc
      :base="base"
      :config="config"
      :lang="$vantLang"
      :github="github"
      :versions="versions"
      :simulators="simulators"
      :search-config="searchConfig"
      :current-simulator="currentSimulator"
      @switch-version="onSwitchVersion"
    >
      <router-view @changeDemoURL="onChangeDemoURL" />
    </van-doc>
  </div>
</template>

<script>
import pkgJson from '../../../package.json';
import docConfig, { github, versions, searchConfig } from '../doc.config';

export default {
  data() {
    this.github = github;
    this.versions = versions;
    this.searchConfig = searchConfig;

    return {
      simulators: [`mobile.html${location.hash}`],
      demoURL: ''
    };
  },

  computed: {
    base() {
      return `/${this.$vantLang}`;
    },

    config() {
      return docConfig[this.$vantLang];
    },

    currentSimulator() {
      const { name } = this.$route;
      return name && name.indexOf('demo') !== -1 ? 1 : 0;
    }
  },

  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    },

    onSwitchVersion(version) {
      if (version !== pkgJson.version) {
        location.href = `https://youzan.github.io/vant/${version}`;
      }
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
