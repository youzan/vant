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
    if (window.location.host === 'www.youzanyun.com') {
      const group = docConfig['zh-CN'].nav[0].groups[0];
      group.list = group.list.filter(item => item.title !== '业务组件');
    }

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
      return this.$route.name === 'zh-CN/demo' ? 1 : 0;
    }
  },

  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    }
  }
};
</script>
