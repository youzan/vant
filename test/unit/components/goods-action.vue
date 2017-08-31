<template>
  <van-goods-action>
    <van-goods-action-mini-btn icon="chat" @click="onClickMiniBtn">
      客服
    </van-goods-action-mini-btn>
    <van-goods-action-mini-btn icon="cart" url="http://www.youzan.com" @click="onClickMiniBtn">
      购物车
    </van-goods-action-mini-btn>
    <van-goods-action-big-btn @click="onClickBigBtn">
      加入购物车
    </van-goods-action-big-btn>
    <van-goods-action-big-btn @click="onClickBigBtn" primary url="http://www.youzan.com">
      立即购买
    </van-goods-action-big-btn>
  </van-goods-action>
</template>

<script>
import GoodsAction from 'packages/goods-action';
import GoodsActionBigBtn from 'packages/goods-action-big-btn';
import GoodsActionMiniBtn from 'packages/goods-action-mini-btn';

export default {
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },

  methods: {
    onClickMiniBtn() {
    },
    onClickBigBtn() {
    }
  }
};
</script>
