<template>
  <cell-group :class="b()">
    <cell :title="title || $t('title')" :value="value" :is-link="editable" @click="$emit('click')" />
  </cell-group>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'coupon-cell',

  model: {
    prop: 'chosenCoupon'
  },

  props: {
    title: String,
    coupons: {
      type: Array,
      default: () => []
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    editable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    value() {
      const { coupons } = this;
      const coupon = coupons[this.chosenCoupon];
      if (coupon) {
        return `-￥${(coupon.value / 100).toFixed(2)}`;
      }
      return coupons.length === 0 ? this.$t('tips') : this.$t('count', coupons.length);
    }
  }
});
</script>
