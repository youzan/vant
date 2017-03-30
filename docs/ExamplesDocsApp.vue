<template>
  <div class="app">
    <div class="page-header">
      <h1 class="page-header-logo">
        <a href="#"></a>
      </h1>
      <ul class="page-header-navs">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#" class="active">基础组件</a>
        </li>
        <li>
          <a href="#">业务组件</a>
        </li>
      </ul>
      <a href="#" class="github-logo">Github</a>
    </div>
    <div class="main-content">
      <div class="page-container clearfix">
        <side-nav :data="navConfig['zh-CN']" base="/component"></side-nav>
        <div class="page-content">
          <router-view></router-view>
          <footer-nav></footer-nav>
        </div>
      </div>
    </div>
    <div class="page-footer">
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
