<template>
  <div class="van-sku-actions">
    <button v-if="showAddCartBtn" class="van-sku__add-cart-btn" @click="onAddCartClicked">
      加入购物车
    </button>
    <button class="van-sku__buy-btn" @click="onBuyClicked">
      {{ buyText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'van-sku-actions',

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
