<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-goods-action>
        <van-goods-action-mini-btn icon="chat" @click="onClickMiniBtn">
          {{ $t('button1') }}
        </van-goods-action-mini-btn>
        <van-goods-action-mini-btn icon="cart" @click="onClickMiniBtn">
          {{ $t('button2') }}
        </van-goods-action-mini-btn>
        <van-goods-action-big-btn @click="onClickBigBtn">
          {{ $t('button3') }}
        </van-goods-action-big-btn>
        <van-goods-action-big-btn @click="onClickBigBtn" primary>
          {{ $t('button4') }}
        </van-goods-action-big-btn>
      </van-goods-action>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      clickIcon: '点击图标',
      clickButton: '点击按钮',
      button1: '客服',
      button2: '购物车',
      button3: '加入购物车',
      button4: '立即购买'
    },
    'en-US': {
      clickIcon: 'Click Icon',
      clickButton: 'Click Button',
      button1: 'Icon1',
      button2: 'Icon2',
      button3: 'Button1',
      button4: 'Button2'
    }
  },

  methods: {
    onClickMiniBtn() {
      Toast(this.$t('clickIcon'));
    },

    onClickBigBtn() {
      Toast(this.$t('clickButton'));
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
