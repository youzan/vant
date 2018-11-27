<template>
  <div>
    <van-nav-bar
      v-show="title && showNav"
      class="van-doc-nav-bar"
      :title="title"
      left-arrow
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
  background-color: #fafafa;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.van-doc-nav-bar {
  .van-nav-bar__title {
    font-size: 15px;
    text-transform: capitalize;
  }

  .van-nav-bar__left,
  .van-nav-bar__right {
    cursor: pointer;
  }

  .van-nav-bar__right {
    font-size: 16px;

    .van-icon {
      vertical-align: -3px;
    }
  }
}

.van-doc-demo-section {
  margin-top: -46px;
  padding-top: 46px;
}
</style>
