<template>
  <div class="app">
    <zan-doc :simulators="simulators" :currentSimulator="currentSimulator" :config="config" :base="base">
      <router-view @changeDemoURL="onChangeDemoURL"></router-view>
    </zan-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';
import { getLang } from './utils/lang';

export default {
  data() {
    if (window.location.host === 'www.youzanyun.com') {
      const group = docConfig['zh-CN'].nav[0].groups[0];
      group.list = group.list.filter(item => item.title !== '业务组件');
    }

    return {
      simulators: [`/zanui/vue/examples${location.hash}`],
      demoURL: '',
      lang: getLang()
    };
  },

  computed: {
    base() {
      return `/${this.lang}/component`;
    },

    config() {
      return docConfig[this.lang];
    },

    currentSimulator() {
      return this.$route.name === 'zh-CN/demo' ? 1 : 0;
    }
  },

  watch: {
    '$route'(to) {
      this.lang = to.meta.lang;
    }
  },

  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    }
  }
};
</script>

<style lang="postcss">
.zan-doc-content--quickstart {
  h3:not(:first-of-type) {
    margin-top: 35px;
  }
}
</style>
