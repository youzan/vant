<template>
  <div class="page-header">
    <h1 class="page-header__logo">
      <a href="#"></a>
    </h1>
    <ul class="page-header__navs">
      <li class="page-header__item">
        <a href="/" class="page-header__link">首页</a>
      </li>
      <li class="page-header__item">
        <a href="http://react.fe.qima-inc.com/" class="page-header__link">PC端</a>
      </li>
      <li class="page-header__item">
        <a href="http://zanui.qima-inc.com/vue" class="page-header__link page-header__link--active">移动端</a>
      </li>
      <li class="page-header__item">
        <a href="https://github.com/youzan/zanui-weapp" class="page-header__link">微信小程序</a>
      </li>
    </ul>
    <ul class="page-header__subnavs">
      <li class="page-header__item">
        <a href="http://zanui.qima-inc.com/vue" class="page-header__link page-header__link--active">基础组件</a>
      </li>
      <li class="page-header__item">
        <a href="http://zanui.qima-inc.com/captain" class="page-header__link">业务组件</a>
      </li>
      <li class="page-header__item">
        <span class="page-header__link">V{{ version }}</span>
      </li>
      <li class="page-header__item">
        <a href="#" class="page-header__github" target="_blank"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: window._global.version
    };
  }
};
</script>

<style>
@component-namespace page {
  @b header {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 60px;
    background-color: #fbfbfb;

    @e logo {
      float: left;

      > a {
        display: block;
        width: 78px;
        height: 20px;
        background-image: url(https://img.yzcdn.cn/upload_files/2017/03/30/Fjm3aSwID8ROIV_5TO6dZdJ_IEgz.png);
        background-size: contain;
        background-repeat: no-repeat;
        margin: 20px 0 0 20px;
      }
    }

    @e navs {
      float: right;
    }

    @e item {
      float: left;
      height: 50px;
    }

    @e subnavs {
      position: absolute;
      line-height: 50px;
      top: 60px;
      display: flex;
      justify-content: center;
      width: 100%;
      background-color: #f2f2f2;

      a,
      span {
        line-height: 50px;
      }
    }

    @e link {
      display: block;
      line-height: 60px;
      color: #333;
      font-size: 16px;
      margin: 0 20px;

      &:hover {
        color: #3388FF;
      }

      @m active {
        color: #3388FF;
      }
    }

    @e github {
      display: inline-block;
      width: 22px;
      height: 22px;
      overflow: hidden;
      background-image: url(https://img.yzcdn.cn/upload_files/2017/03/30/Fil9peDfgzvk3kj-oFCsElS4FS1x.png);
      background-size: contain;
      background-repeat: no-repeat;
      margin: 14px 20px 0;
    }
  }
}
</style>
