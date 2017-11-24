<template>
  <div class="side-nav">
    <h1 class="zanui-title">
      <img src="https://img.yzcdn.cn/public_files/2017/10/25/c2e074cd97d4d9e9b14a87b2fcb29430.png" />
      <span>Vant</span>
    </h1>
    <div class="mobile-switch-lang">
      <span :class="{ active: $vantLang === 'en-US' }" @click="switchLang('en-US')">EN</span>
      <span :class="{ active: $vantLang === 'zh-CN' }" @click="switchLang('zh-CN')">中文</span>
    </div>
    <h2 class="zanui-desc">{{ description }}</h2>
    <div class="mobile-navs">
      <div class="mobile-nav-item" v-for="(item, index) in navList" v-if="item.showInMobile" :key="index">
        <mobile-nav v-for="(group, index) in item.groups" :group="group" :base="base" :nav-key="index" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './MobileNav';
import { setLang } from '../utils/lang';

export default {
  data() {
    return {
      docConfig
    };
  },

  components: {
    MobileNav
  },

  computed: {
    base() {
      return `${this.$vantLang}/component`;
    },

    navList() {
      return this.docConfig[this.$vantLang].nav || [];
    },

    description() {
      return this.$vantLang === 'zh-CN' ? '有赞移动端 Vue 组件库' : 'A Vue.js 2.0 Mobile UI at YouZan';
    }
  },

  methods: {
    switchLang(lang) {
      setLang(lang);
    }
  }
};
</script>

<style lang="postcss">
@import '../../../packages/vant-css/src/common/var';

.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 60px 15px 20px;
  position: relative;
  z-index: 1;

  .zanui-title,
  .zanui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }

  .zanui-title {
    margin: 0 0 15px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 30px;
    }

    span {
      font-size: 40px;
      margin-left: 15px;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
  }

  .zanui-desc {
    font-size: 14px;
    color: #455a64;
    margin: 0 0 60px;
  }
}

.mobile-switch-lang {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 11px;
  border: 1px solid $blue;
  border-radius: 3px;
  color: $blue;
  cursor: pointer;

  span {
    width: 32px;
    line-height: 22px;
    text-align: center;
    display: inline-block;

    &.active {
      color: #fff;
      background-color: $blue;
    }
  }
}
</style>
