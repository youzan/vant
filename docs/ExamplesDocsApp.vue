<template>
  <div class="page-container clearfix">
    <side-nav :data="navConfig['zh-CN']" base="/component"></side-nav>
    <div class="page-content">
      <router-view></router-view>
      <footer-nav></footer-nav>
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

  .page-container {
    section > h2 {
      font-size: 36px;
      color: #333;
      margin: 20px 0;
      line-height: 1.5;
    }

    section > h3 {
      font-size: 30px;
      color: #333;
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
  }

  .page-content {
    box-sizing: border-box;
    overflow: auto;
    margin-left: 220px;
    padding: 0 20px;
    border-left: 1px solid #E5E5E5;

    section > p {
      font-size: 14px;
      color: #666;
      margin: 14px 0;
    }

    p > code {
      background-color: #F2F2F2;
      display: inline-block;
      border: 1px solid #E5E5E5;
      padding: 2px 4px;
      color: #333;
    }
  }

  .demo-page {
    width: 100%;
    border: 5px solid #f5f5f5;
    height: 580px;
  }

  .table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    margin-bottom: 45px;

    th {
      text-align: left;
      border: 1px solid #E5E5E5;
      background-color: #F2F2F2;
      padding: 10px;

      &:first-child {
        padding-left: 10px;
      }
    }

    td {
      border: 1px solid #E5E5E5;
      padding: 10px;

      code {
        background-color: #F2F2F2;
        display: inline-block;
        border: 1px solid #E5E5E5;
        padding: 2px 4px;
        color: #333;
      }
    }
  }
</style>
