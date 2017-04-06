<template>
  <div class="app">
    <page-header></page-header>
    <div class="main-content">
      <div class="page-container clearfix">
        <side-nav :data="navConfig['zh-CN']" base="/component"></side-nav>
        <div class="page-content">
          <router-view></router-view>
          <footer-nav></footer-nav>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
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
