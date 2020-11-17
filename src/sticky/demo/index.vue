<template>
  <demo-block :title="t('basicUsage')">
    <van-sticky>
      <van-button type="primary" style="margin-left: 15px;">
        {{ t('basicUsage') }}
      </van-button>
    </van-sticky>
  </demo-block>

  <demo-block :title="t('offsetTop')">
    <van-sticky :offset-top="50">
      <van-button type="primary" style="margin-left: 115px;">
        {{ t('offsetTop') }}
      </van-button>
    </van-sticky>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('setContainer')">
    <div ref="container" style="height: 150px; background-color: #fff;">
      <van-sticky :container="container">
        <van-button type="warning" style="margin-left: 215px;">
          {{ t('setContainer') }}
        </van-button>
      </van-sticky>
    </div>
  </demo-block>
  <div style="width: 100vw; height: 100vh;"></div>
  <demo-block :title="t('basicUsage')">
    <van-sticky type="bottom">
      <van-button type="primary" style="margin-left: 15px;">
        {{ t('basicUsage') }}
      </van-button>
    </van-sticky>
  </demo-block>

  <demo-block :title="t('offsetTop')">
    <van-sticky :offset-bottom="50" type="bottom">
      <van-button type="primary" style="margin-left: 115px;">
        {{ t('offsetBottom') }}
      </van-button>
    </van-sticky>
  </demo-block>

  <demo-block v-if="!isWeapp" :title="t('setContainer')">
    <div ref="container" style="height: 150px; background-color: #fff;">
      <van-sticky :container="container" type="bottom">
        <van-button type="warning" style="margin-left: 215px;">
          {{ t('setContainer') }}
        </van-button>
      </van-sticky>
    </div>
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      offsetTop: '吸顶距离',
      offsetBottom: '吸底距离',
      setContainer: '指定容器',
    },
    'en-US': {
      offsetTop: 'Offset Top',
      offsetBottom: 'Offset Bottom',
      setContainer: 'Set Container',
    },
  },

  data() {
    return {
      container: null,
    };
  },

  mounted() {
    this.container = this.$refs.container;
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sticky {
  height: 200vh;

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
