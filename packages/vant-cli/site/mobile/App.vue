<template>
  <demo-nav />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <demo-section>
        <component :is="Component" />
      </demo-section>
    </keep-alive>
  </router-view>
</template>

<script>
import DemoNav from './components/DemoNav.vue';

export default {
  components: { DemoNav },
};
</script>

<style lang="less">
@import '../common/style/var';
@import '../common/style/base';

body {
  min-width: 100vw;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
