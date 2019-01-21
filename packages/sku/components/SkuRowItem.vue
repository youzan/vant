<template>
  <span
    v-text="skuValue.name"
    class="van-sku-row__item"
    :class="{
      'van-sku-row__item--active': isChoosed,
      'van-sku-row__item--disabled': !isChoosable
    }"
    @click="onSelect"
  />
</template>

<script>
import create from '../../utils/create';
import { isSkuChoosable } from '../utils/skuHelper';

export default create({
  name: 'sku-row-item',

  props: {
    skuEventBus: Object,
    skuValue: Object,
    skuList: Array,
    selectedSku: Object,
    skuKeyStr: String
  },

  computed: {
    isChoosed() {
      return this.skuValue.id === this.selectedSku[this.skuKeyStr];
    },

    isChoosable() {
      return isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },

  methods: {
    onSelect() {
      if (this.isChoosable) {
        this.skuEventBus.$emit('sku:select', {
          ...this.skuValue,
          skuKeyStr: this.skuKeyStr
        });
      }
    }
  }
});
</script>
