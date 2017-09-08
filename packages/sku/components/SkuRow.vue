<template>
  <div class="van-sku-row">
    <div class="van-sku-row__title">{{ skuRow.k }}：</div>
    <div class="van-sku-row__items">
      <slot name="sku-row-items">
        <van-sku-row-item
          v-for="(skuValue, index) in skuRow.v"
          :key="index"
          :skuKeyStr="skuRow.k_s"
          :skuValue="skuValue"
          :skuEventBus="$attrs.skuEventBus"
          :selectedSku="$attrs.selectedSku"
          :skuList="$attrs.skuList">
        </van-sku-row-item>
      </slot>
    </div>
  </div>
</template>

<script>
import SkuRowItem from './SkuRowItem';

export default {
  name: 'van-sku-row',

  inheritAttrs: false,

  components: {
    [SkuRowItem.name]: SkuRowItem
  },

  props: {
    skuRow: Object
  }
};
</script>
