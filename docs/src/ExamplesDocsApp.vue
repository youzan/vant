<template>
  <div class="app">
    <zan-doc :simulator="simulator" :config="config" :base="base">
      <router-view></router-view>
    </zan-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';
import { getLang } from './lang';

export default {
  data() {
    if (window.location.host === 'www.youzanyun.com') {
      const group = docConfig['zh-CN'].nav[0].groups[0];
      group.list = group.list.filter(item => item.title !== '业务组件');
    }

    const hash = window.location.hash;

    return {
      simulator: `/zanui/vue/examples${hash}`,
      lang: getLang()
    };
  },

  computed: {
    base() {
      return `/${this.lang}/component`;
    },

    config() {
      return docConfig[this.lang];
    }
  },

  watch: {
    '$route'(to) {
      this.lang = to.meta.lang;
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
