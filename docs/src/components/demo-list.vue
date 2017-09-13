<template>
  <div class="side-nav">
    <h1 class="zanui-title">Zan UI Wap</h1>
    <h2 class="zanui-desc">有赞移动wap端组件库</h2>
    <div class="mobile-navs">
      <div class="mobile-nav-item" v-for="(item, index) in data" v-if="item.showInMobile" :key="index">
        <mobile-nav v-for="(group, index) in item.groups" :group="group" :base="base" :nav-key="index" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './mobile-nav';

export default {
  data() {
    return {
      data: docConfig['zh-CN'].nav,
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
  padding: 40px 15px 20px;
  position: relative;
  z-index: 1;

  .zanui-title,
  .zanui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
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
