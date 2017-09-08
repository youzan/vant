<template>
  <span v-if="isChoosable"
    @click="onSkuSelected"
    :class="{ 'van-sku-row__item': true, 'van-sku-row__item--active': isChoosed }">
    {{ skuValue.name }}
  </span>
  <span v-else class="van-sku-row__item van-sku-row__item--disabled">{{ skuValue.name }}</span>
</template>

<script>
import assign from 'lodash/assign';
import filter from 'lodash/filter';
import keys from 'lodash/keys';
import every from 'lodash/every';

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
      const matchedSku = assign({}, this.selectedSku, {
        [this.skuKeyStr]: this.skuValue.id
      });
      const skusToCheck = filter(keys(matchedSku), skuKey => matchedSku[skuKey] !== '');
      const filteredSku = filter(this.skuList, sku => {
        return every(skusToCheck, function(skuKey) {
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
      this.skuEventBus.$emit('sku:select', assign({}, this.skuValue, { skuKeyStr: this.skuKeyStr }));
    }
  }
};
</script>
