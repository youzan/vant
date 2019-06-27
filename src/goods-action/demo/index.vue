<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          :text="$t('icon1')"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="cart-o"
          :text="$t('icon2')"
          @click="onClickIcon"
        />
        <van-goods-action-button
          type="warning"
          :text="$t('button1')"
          @click="onClickButton"
        />
        <van-goods-action-button
          type="danger"
          :text="$t('button2')"
          @click="onClickButton"
        />
      </van-goods-action>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          :text="$t('icon1')"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="cart-o"
          info="5"
          :text="$t('icon2')"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="shop-o"
          :text="$t('icon3')"
          @click="onClickIcon"
        />
        <van-goods-action-button
          type="warning"
          :text="$t('button1')"
          @click="onClickButton"
        />
        <van-goods-action-button
          type="danger"
          :text="$t('button2')"
          @click="onClickButton"
        />
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
      icon1: '客服',
      icon2: '购物车',
      icon3: '店铺',
      button1: '加入购物车',
      button2: '立即购买',
      title2: '图标提示'
    },
    'en-US': {
      clickIcon: 'Click Icon',
      clickButton: 'Click Button',
      icon1: 'Icon1',
      icon2: 'Icon2',
      icon3: 'Icon3',
      button1: 'Button1',
      button2: 'Button2',
      title2: 'Icon info'
    }
  },

  methods: {
    onClickIcon() {
      this.$toast(this.$t('clickIcon'));
    },

    onClickButton() {
      this.$toast(this.$t('clickButton'));
    }
  }
};
</script>

<style lang="less">
.demo-goods-action {
  .van-goods-action {
    position: relative;
  }
}
</style>
