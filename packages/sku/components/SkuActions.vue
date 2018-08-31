<template>
  <div :class="b()">
    <van-button
      v-if="showAddCartBtn"
      bottom-action
      text="加入购物车"
      @click="skuEventBus.$emit('sku:addCart')"
    />
    <van-button
      type="primary"
      bottom-action
      :text="buyText || '立即购买'"
      @click="skuEventBus.$emit('sku:buy')"
    />
  </div>
</template>

<script>
import VanButton from '../../button';
import create from '../../utils/create';

export default create({
  name: 'sku-actions',

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
