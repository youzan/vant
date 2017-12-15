<template>
  <div class="van-sku-actions">
    <van-button v-if="showAddCartBtn" bottomAction @click="onAddCartClicked">{{ $t('cart') }}</van-button>
    <van-button type="primary" bottomAction @click="onBuyClicked">{{ buyText || $t('buy') }}</van-button>
  </div>
</template>

<script>
import VanButton from '../../button';
import { create } from '../../utils';

export default create({
  name: 'van-sku-actions',

  components: {
    VanButton
  },

  props: {
    buyText: String,
    skuEventBus: Object,
    showAddCartBtn: Boolean
  },

  methods: {
    onAddCartClicked() {
      this.skuEventBus.$emit('sku:addCart');
    },
    onBuyClicked() {
      this.skuEventBus.$emit('sku:buy');
    }
  }
});
</script>
