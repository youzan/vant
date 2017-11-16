<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-goods-action>
        <van-goods-action-mini-btn icon="chat" @click="onClickMiniBtn">
          客服
        </van-goods-action-mini-btn>
        <van-goods-action-mini-btn icon="cart" @click="onClickMiniBtn">
          购物车
        </van-goods-action-mini-btn>
        <van-goods-action-big-btn @click="onClickBigBtn">
          加入购物车
        </van-goods-action-big-btn>
        <van-goods-action-big-btn @click="onClickBigBtn" primary>
          立即购买
        </van-goods-action-big-btn>
      </van-goods-action>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {

    },
    'en-US': {

    }
  },

  methods: {
    onClickMiniBtn() {
      Toast('点击图标');
    },

    onClickBigBtn() {
      Toast('点击按钮');
    }
  }
};
</script>


<style lang="postcss">
.demo-goods-action {
  .van-goods-action {
    position: relative;
  }
}
</style>
