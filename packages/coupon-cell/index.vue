<template>
  <div class="van-coupon-cell">
    <van-cell-group>
      <van-cell :title="title" :isLink="editable" @click="$emit('click')">
        <div v-if="coupons[chosenCoupon]">
          <div>{{ amount }}</div>
          <div>{{ coupons[chosenCoupon].condition }}</div>
        </div>
        <template v-else>{{ guide }}</template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import Cell from '../cell';
import CellGroup from '../cell-group';

export default {
  name: 'van-coupon-cell',

  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },

  model: {
    prop: 'chosenCoupon'
  },

  props: {
    title: {
      type: String,
      default: '优惠'
    },
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
    guide() {
      return this.coupons.length === 0 ? '使用优惠' : `您有 ${this.coupons.length} 个可用优惠`;
    },
    amount() {
      const coupon = this.coupons[this.chosenCoupon];
      return `${coupon.name} 省￥${(coupon.value / 100).toFixed(2)}`;
    }
  }
};
</script>
