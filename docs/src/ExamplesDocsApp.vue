<template>
  <div class="app">
    <zan-doc :simulator="simulator" :config="config">
      <router-view></router-view>
    </zan-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';

export default {
  data() {
    return {
      simulator: this.getSimulatorPath(),
      config: docConfig['zh-CN']
    };
  },

  methods: {
    getSimulatorPath() {
      const dir = location.pathname.split('/').pop();
      if (dir === 'quickstart' || dir === 'changelog') {
        return '/zanui/vue/examples';
      } else {
        return `/zanui/vue/examples/component/${dir}`;
      }
    }
  }
};
</script>
