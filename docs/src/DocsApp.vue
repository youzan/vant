<template>
  <div class="app">
    <van-doc :simulators="simulators" :currentSimulator="currentSimulator" :config="config" :base="base">
      <router-view @changeDemoURL="onChangeDemoURL"></router-view>
    </van-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';

export default {
  data() {
    return {
      simulators: [`/zanui/vant/examples${location.hash}`],
      demoURL: ''
    };
  },

  computed: {
    base() {
      return `/${this.$vantLang}/component`;
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
