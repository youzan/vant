<template>
  <div class="demo-home">
    <h1 class="demo-home__title">
      <img :src="config.logo">
      <span>{{ config.title }}</span>
    </h1>
    <h2 v-if="config.description" class="demo-home__desc">{{ config.description }}</h2>
    <template v-for="(group, index) in config.nav">
      <demo-home-nav
        :group="group"
        :base="$vantLang"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
import { config } from 'mobile-entry';
import DemoHomeNav from './DemoHomeNav';

export default {
  components: {
    DemoHomeNav
  },

  data() {
    return {
      config: config.site
    };
  }
};
</script>

<style lang="less">
@import '../../common/style/index';

.demo-home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background: #fff;

  &__title,
  &__desc {
    padding-left: 16px;
    font-weight: normal;
    user-select: none;
  }

  &__title {
    margin: 0 0 16px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 36px;
    }

    span {
      margin-left: 16px;
      font-weight: 500;
      font-size: 36px;
    }
  }

  &__desc {
    margin: 0 0 40px;
    color: #7d7e80;
    font-size: 14px;
  }
}
</style>
