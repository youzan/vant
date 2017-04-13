<template>
  <div class="side-nav">
    <h1 class="zanui-title">Zan UI Wap</h1>
    <h2 class="zanui-desc">有赞移动wap端组件库</h2>
    <div class="mobile-navs">
      <template v-for="item in data">
        <div class="mobile-nav-item" v-if="item.showInMobile">
          <mobile-nav v-for="group in item.groups"  :group="group" :base="base"></mobile-nav>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import navConfig from '../nav.config.js';
import MobileNav from './mobile-nav';

export default {
  data() {
    return {
      highlights: [],
      navState: [],
      data: navConfig['zh-CN'],
      base: '/component'
    };
  },

  components: {
    MobileNav
  }
};
</script>

<style>
  .side-nav {
    width: 100%;
    box-sizing: border-box;
    padding: 90px 15px 20px;
    position: relative;
    z-index: 1;

    .zanui-title,
    .zanui-desc {
      text-align: center;
      font-weight: normal;
    }

    .zanui-title {
      font-size: 26px;
      color: #333;
    }

    .zanui-desc {
      font-size: 14px;
      color: #666;
      margin-bottom: 50px;
    }
  }
</style>
