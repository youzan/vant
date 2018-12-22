<template>
  <cell
    :class="b()"
    :title="title || $t('title')"
    :value="value"
    :border="border"
    :is-link="editable"
    :value-class="valueClass"
    @click="$emit('click')"
  />
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
    coupons: Array,
    currency: {
      type: String,
      default: '¥'
    },
    border: {
      type: Boolean,
      default: true
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
        const value = coupon.denominations || coupon.value;
        return `-${this.currency}${(value / 100).toFixed(2)}`;
      }
      return coupons.length === 0 ? this.$t('tips') : this.$t('count', coupons.length);
    },

    valueClass() {
      return this.coupons[this.chosenCoupon] ? 'van-coupon-cell--selected' : '';
    }
  }
});
</script>
