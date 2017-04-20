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
      padding-top: 40px;
      height: 0;
      overflow: hidden;
      background: url(https://img.yzcdn.cn/upload_files/2017/04/20/FjwR1mraVIqtHWb8YWDW_YzQ_Kh2.png) center center no-repeat;
      background-size: 156px 40px;
      margin-bottom: 10px;
    }

    .zanui-desc {
      font-size: 14px;
      color: #666;
      margin-bottom: 50px;
    }
  }
</style>
