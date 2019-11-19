<template>
  <div>
    <demo-nav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import DemoNav from './components/DemoNav';

export default {
  components: { DemoNav }
};
</script>

<style lang="less">
body {
  min-width: 100vw;
  color: #323233;
  font-family: 'PingFang SC', Helvetica, Tohoma, Arial, sans-serif;
  line-height: 1;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
