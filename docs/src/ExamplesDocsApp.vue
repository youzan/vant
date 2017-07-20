<template>
  <div class="app">
    <zan-doc :simulator="simulatorSrc" :config="config">
      <router-view></router-view>
    </zan-doc>
  </div>
</template>

<script>
import 'highlight.js/styles/color-brewer.css';
import docConfig from './doc.config';

export default {
  data() {
    return {
      config: docConfig['zh-CN']
    };
  },
  computed: {
    simulatorSrc() {
      const dir = this.$route.path.split('/').pop();
      if (dir === 'quickstart' || dir === 'changelog') {
        return '/zanui/vue/examples';
      } else {
        return `/zanui/vue/examples/component/${dir}`;
      }
    }
  }
};
</script>
