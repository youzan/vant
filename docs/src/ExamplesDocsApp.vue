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
    if (location.host === 'www.youzanyun.com') {
      const group = docConfig['zh-CN'].nav[0].groups[0];
      group.list = group.list.filter(item => item.title !== '业务组件');
    }

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

<style lang="postcss">
.zan-doc-content--quickstart {
  h3:not(:first-of-type) {
    margin-top: 35px;
  }
}
</style>
