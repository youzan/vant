<template>
  <div class="page-header">
    <div class="page-header__top">
      <h1 class="page-header__logo">
        <a href="https://www.youzanyun.com/zanui"></a>
      </h1>
      <ul class="page-header__navs">
        <li class="page-header__item">
          <a href="https://www.youzanyun.com/zanui" class="page-header__link">首页</a>
        </li>
        <li class="page-header__item">
          <a href="https://www.youzanyun.com/zanui/react" class="page-header__link">Zent - PC端</a>
        </li>
        <li class="page-header__item">
          <a href="https://www.youzanyun.com/zanui/vue" class="page-header__link page-header__link--active">Vant - 移动端</a>
        </li>
        <li class="page-header__item">
          <a href="https://github.com/youzan/zanui-weapp" class="page-header__link">ZanUi-WeApp - 微信小程序</a>
        </li>
      </ul>
    </div>
    <ul class="page-header__subnavs" :class="{ 'page-header__subnavs--shadow': scrollTop > 0 }">
      <li class="page-header__item">
        <a href="https://www.youzanyun.com/zanui/vue" class="page-header__link page-header__link--active">基础组件</a>
      </li>
      <li class="page-header__item">
        <a href="https://www.youzanyun.com/zanui/captain" class="page-header__link">业务组件</a>
      </li>
      <li class="page-header__item">
        <span class="page-header__link">V{{ version }}</span>
      </li>
      <li class="page-header__item">
        <a href="https://github.com/youzan/vant" class="page-header__github" target="_blank"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: window._global.version,
      scrollTop: 0
    };
  },

  mounted() {
    const _this = this;
    let timer;
    window.addEventListener('scroll', () => {
      clearTimeout(timer);
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      timer = setTimeout(() => {
        _this.scrollTop = scrollTop;
      }, 500);
    });
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
    
    @e top {
      overflow: hidden;
      height: 80px;
      background-color: #fbfbfb;
      box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
    }

    @e logo {
      float: left;

      > a {
        display: block;
        width: 78px;
        height: 20px;
        background-image: url(https://img.yzcdn.cn/upload_files/2017/04/20/FjwR1mraVIqtHWb8YWDW_YzQ_Kh2.png);
        background-size: contain;
        background-repeat: no-repeat;
        margin: 30px 0 0 20px;
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
      line-height: 50px;
      display: flex;
      justify-content: center;
      background-color: #f2f2f2;
      position: relative;
      z-index: -1;

      @m shadow {
        box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
      }

      a,
      span {
        line-height: 50px;
      }
    }

    @e link {
      display: block;
      line-height: 80px;
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
