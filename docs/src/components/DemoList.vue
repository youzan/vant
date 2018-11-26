<template>
  <div class="side-nav">
    <h1 class="zanui-title">
      <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" >
      <span>Vant</span>
    </h1>
    <div class="mobile-switch-lang">
      <span
        :class="{ active: $vantLang === 'en-US' }"
        @click="switchLang('en-US')"
      >
        EN
      </span>
      <span
        :class="{ active: $vantLang === 'zh-CN' }"
        @click="switchLang('zh-CN')"
      >
        中文
      </span>
    </div>
    <h2 class="zanui-desc">{{ description }}</h2>
    <template
      v-for="item in navList"
      v-if="item.showInMobile"
    >
      <mobile-nav
        v-for="(group, index) in item.groups"
        :group="group"
        :base="$vantLang"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './MobileNav';
import { setLang } from '../utils/lang';

export default {
  components: {
    MobileNav
  },

  data() {
    return {
      docConfig
    };
  },

  computed: {
    navList() {
      return this.docConfig[this.$vantLang].nav || [];
    },

    description() {
      return this.$vantLang === 'zh-CN' ? '轻量、可靠的移动端 Vue 组件库' : 'Lightweight Mobile UI Components built on Vue';
    }
  },

  methods: {
    switchLang(lang) {
      const from = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.$router.push(this.$route.path.replace(from, lang));
      setLang(lang);
    }
  }
};
</script>

<style lang="less">
@import '../../../packages/style/var';

.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 60px 15px 20px;

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
      width: 36px;
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
  border: 1px solid @blue;
  border-radius: 3px;
  color: @blue;
  cursor: pointer;

  span {
    width: 32px;
    line-height: 22px;
    text-align: center;
    display: inline-block;

    &.active {
      color: @white;
      background-color: @blue;
    }
  }
}
</style>
