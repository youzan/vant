<template>
  <div class="van-sku-actions">
    <van-button v-if="showAddCartBtn" bottomAction @click="onAddCartClicked">加入购物车</van-button>
    <van-button type="primary" bottomAction @click="onBuyClicked">{{ buyText }}</van-button>
  </div>
</template>

<script>
import VanButton from '../../button';

export default {
  name: 'van-sku-actions',

  components: {
    VanButton
  },

  props: {
    skuEventBus: Object,
    showAddCartBtn: Boolean,
    buyText: {
      type: String,
      default: '立即购买'
    }
  },

  methods: {
    onAddCartClicked() {
      this.skuEventBus.$emit('sku:addCart');
    },
    onBuyClicked() {
      this.skuEventBus.$emit('sku:buy');
    }
  }
};
</script>
