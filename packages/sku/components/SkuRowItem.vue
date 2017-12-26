<template>
  <span
    v-if="isChoosable"
    @click="onSkuSelected"
    class="van-sku-row__item"
    :class="{ 'van-sku-row__item--active': isChoosed }">
    {{ skuValue.name }}
  </span>
  <span v-else class="van-sku-row__item van-sku-row__item--disabled">{{ skuValue.name }}</span>
</template>

<script>
export default {
  name: 'van-sku-row-item',

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
    onSkuSelected() {
      this.skuEventBus.$emit('sku:select', Object.assign({}, this.skuValue, { skuKeyStr: this.skuKeyStr }));
    }
  }
};
</script>
