<template>
  <div class="page-container">
    <side-nav :data="navConfig['zh-CN']" base="/component"></side-nav>
    <div class="page-content">
      <router-view></router-view>
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

<style lang="less">
.page-container {
  width: 1140px;
  padding: 0 30px;
  margin: 0 auto;

  h2 {
    font-size: 28px;
    color: #1f2d3d;
    margin: 20px 0;
    line-height: 40px;
  }
  h3 {
    font-size: 22px;
    margin: 23px 0;
  }
  h2, h3, h4, h5 {
    font-weight: normal;
    color: #1f2f3d;

    &:hover a {
      opacity: .4;
    }

    a {
      float: left;
      margin-left: -20px;
      opacity: 0;
      cursor: pointer;

      &:hover {
        opacity: .4;
      }
    }
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    margin: 14px 0;
  }
}

.page-content {
  width: 75%;
  float: left;
}

.table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  color: #5e6d82;
  font-size: 14px;
  margin-bottom: 45px;

  th:first-child {
    padding-left: 10px;
  }

  th {
    text-align: left;
    border-top: 1px solid #eaeefb;
    border-bottom: 1px solid #eaeefb;
    background-color: #eff2f7;
    padding: 10px;
  }

  td {
    border-bottom: 1px solid #eaeefb;
    padding: 10px;
  }
}
</style>
