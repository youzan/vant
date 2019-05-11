<template>
  <div class="app">
    <van-doc
      :base="base"
      :config="config"
      active="Vue 组件"
      :simulators="simulators"
      :current-simulator="currentSimulator"
    >
      <router-view @changeDemoURL="onChangeDemoURL" />
    </van-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';

export default {
  data() {
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
    }
  }
};
</script>

<style lang="less">
.van-doc-intro {
  padding-top: 40px;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-align: center;

  &__logo {
    width: 120px;
    height: 120px;
  }

  h2 {
    font-weight: normal;
    font-size: 36px;
    line-height: 60px;
  }

  p {
    color: #455a64;
    font-size: 15px;
  }
}
</style>
