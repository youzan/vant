<template>
  <div class="app">
    <van-doc :config="config" :simulator="simulator">
      <router-view />
    </van-doc>
  </div>
</template>

<script>
import VanDoc from './components';
import { config } from 'site-desktop-shared';

export default {
  components: {
    VanDoc
  },

  data() {
    const publicPath = (config.site && config.site.publicPath) || '/';
    return {
      config: config.site,
      simulator: `${publicPath}mobile.html${location.hash}`
    };
  }
};
</script>

<style lang="less">
.van-doc-intro {
  padding-top: 20px;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}
</style>
