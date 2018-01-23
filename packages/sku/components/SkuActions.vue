<template>
  <div class="van-sku-actions">
    <van-button
      v-if="showAddCartBtn"
      bottom-action
      :text="$t('cart')"
      @click="skuEventBus.$emit('sku:addCart')"
    />
    <van-button
      type="primary"
      bottom-action
      :text="buyText || $t('buy')"
      @click="skuEventBus.$emit('sku:buy')"
    />
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
  }
});
</script>
