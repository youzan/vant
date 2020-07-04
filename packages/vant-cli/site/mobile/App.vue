<template>
  <div>
    <demo-nav />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import DemoNav from './components/DemoNav';

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
