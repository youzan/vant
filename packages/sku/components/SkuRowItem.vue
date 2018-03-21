<template>
  <span
    class="van-sku-row__item"
    :class="{
      'van-sku-row__item--active': isChoosed,
      'van-sku-row__item--disabled': !isChoosable
    }"
    @click="onSelect"
  >
    {{ skuValue.name }}
  </span>
</template>

<script>
import create from '../../utils/create';

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
      const matchedSku = Object.assign({}, this.selectedSku, {
        [this.skuKeyStr]: this.skuValue.id
      });
      const skusToCheck = Object.keys(matchedSku).filter(skuKey => matchedSku[skuKey] !== '');
      const filteredSku = this.skuList.filter(sku => {
        return skusToCheck.every(skuKey => {
          // 后端给的skuValue.id有时候是数字有时候是字符串，全等会匹配不上
          return matchedSku[skuKey] == sku[skuKey]; // eslint-disable-line
        });
      });

      const stock = filteredSku.reduce((total, sku) => (total += sku.stock_num), 0);
      return stock > 0;
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
