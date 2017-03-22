<template>
  <div class="app">
    <div class="page-header">
    </div>
    <div class="page-container clearfix">
      <side-nav :data="navConfig['zh-CN']" base="/component"></side-nav>
      <div class="page-content">
        <router-view></router-view>
        <footer-nav></footer-nav>
      </div>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/color-brewer.css';
import navConfig from './nav.config.json';

export default {
  data() {
    return {
      navConfig: navConfig
    };
  }
};
</script>

<style lang="css">
  @import './assets/docs.css';
</style>
