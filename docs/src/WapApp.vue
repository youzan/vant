<template>
  <div>
    <van-nav-bar
      v-show="title"
      class="van-doc-nav-bar"
      :title="title"
      :border="false"
      :left-arrow="showNav"
      @click-left="onBack"
    >
      <a
        slot="right"
        :href="demoLink"
        target="_blank"
      >
        <van-icon name="edit" />
      </a>
    </van-nav-bar>
    <keep-alive>
      <router-view />
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
      const { name } = this.$route.meta;
      return name ? name.replace(/-/g, '') : '';
    },

    demoLink() {
      return `https://github.com/youzan/vant/blob/dev/packages/${
        this.$route.meta.path
      }/demo/index.vue`;
    },

    showNav() {
      return getQueryString('hide_nav') !== '1';
    }
  },

  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="less">
@import '../../packages/style/var';

body {
  line-height: 1;
  color: @text-color;
  background-color: #f2f3f5;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.van-doc-nav-bar {
  height: 56px;
  line-height: 56px;

  .van-nav-bar__title {
    font-size: 17px;
    text-transform: capitalize;
  }

  .van-icon {
    font-size: 24px;
    cursor: pointer;
    color: @gray-dark;
  }
}

.van-doc-demo-section {
  margin-top: -56px;
  padding-top: 56px;
}
</style>
