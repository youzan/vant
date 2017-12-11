<template>
  <cell-group class="van-coupon-cell">
    <cell :title="title || '优惠券码'" :value="value" :isLink="editable" @click="$emit('click')" />
  </cell-group>
</template>

<script>
import { create } from '../utils';
import Cell from '../cell';
import CellGroup from '../cell-group';

export default create({
  name: 'van-coupon-cell',

  components: {
    Cell,
    CellGroup
  },

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
        return `省￥${(coupon.value / 100).toFixed(2)}`;
      }
      return coupons.length === 0 ? '使用优惠' : `您有 ${coupons.length} 个可用优惠`;
    }
  }
});
</script>
