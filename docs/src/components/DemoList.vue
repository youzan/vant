<template>
  <div class="side-nav">
    <div class="mobile-switch-lang">
      <span
        :class="{ active: $vantLang === 'zh-CN' }"
        @click="switchLang('zh-CN')"
      >
        中文
      </span>
      <span
        :class="{ active: $vantLang === 'en-US' }"
        @click="switchLang('en-US')"
      >
        EN
      </span>
    </div>

    <h1 class="vant-title">
      <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" >
      <span>Vant</span>
    </h1>
    <h2 class="vant-desc">{{ description }}</h2>
    <template v-for="item in navList">
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
      return (this.docConfig[this.$vantLang].nav || []).filter(item => item.showInMobile);
    },

    description() {
      return this.$vantLang === 'zh-CN' ? '轻量、可靠的移动端 Vue 组件库' : 'Mobile UI Components built on Vue';
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
  padding: 64px 20px 20px;

  .vant-title,
  .vant-desc {
    font-weight: normal;
    user-select: none;
    padding-left: 15px;
  }

  .vant-title {
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
      font-size: 36px;
      font-weight: 500;
      margin-left: 15px;
    }
  }

  .vant-desc {
    font-size: 14px;
    color: #7d7e80;
    margin: 0 0 40px;
  }
}

.mobile-switch-lang {
  position: absolute;
  top: 24px;
  right: 24px;
  color: @blue;
  font-size: 12px;
  cursor: pointer;
  overflow: hidden;

  span {
    color: @gray-dark;
    width: 48px;
    line-height: 22px;
    text-align: center;
    display: inline-block;
    border: 1px solid #dcdee0;
    background-color: #f7f8fa;

    &:first-child {
      border-right: none;
      border-radius: 3px 0 0 3px;
    }

    &:last-child {
      border-left: none;
      border-radius: 0 3px 3px 0;
    }

    &.active {
      color: @white;
      border-color: @blue;
      background-color: @blue;
    }
  }
}
</style>
