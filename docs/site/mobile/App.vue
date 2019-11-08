<template>
  <div>
    <van-nav-bar
      v-show="title"
      class="van-doc-nav-bar"
      :title="title"
      :border="false"
      :left-arrow="showNav"
      @click-left="onBack"
    />
    <van-notice-bar
      v-if="weapp"
      v-show="title"
      wrapable
      :text="tips"
      background="#ecf9ff"
      color="rgba(52, 73, 94, 0.8)"
      style="font-size: 12px;"
    />
    <keep-alive>
      <router-view :weapp="weapp" />
    </keep-alive>
  </div>
</template>

<script>
function getQueryString(name) {
  const arr = location.search.substr(1).split('&');
  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i].split('=');
    if (item.shift() === name) {
      return decodeURIComponent(item.join('='));
    }
  }
  return '';
}

export default {
  computed: {
    title() {
      return this.$route.meta.title || '';
    },

    showNav() {
      return getQueryString('hide_nav') !== '1';
    },

    weapp() {
      return getQueryString('weapp') === '1';
    }
  },

  beforeCreate() {
    this.tips = 'Tips: 当前预览的是 Vue 版 Vant 的示例，少部分功能可能与小程序版有出入，请以文档描述和实际效果为准。';
  },

  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="less">
@import '../../../src/style/var';

body {
  min-width: 100vw;
  color: @text-color;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  line-height: 1;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

.van-doc-nav-bar {
  height: 56px;
  line-height: 56px;

  .van-nav-bar__title {
    font-size: 17px;
    text-transform: capitalize;
  }

  .van-icon {
    color: @gray-dark;
    font-size: 24px;
    cursor: pointer;
  }
}

.van-doc-demo-section {
  margin-top: -56px;
  padding-top: 56px;
}
</style>
