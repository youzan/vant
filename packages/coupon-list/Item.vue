<template>
  <div :class="['van-coupon-item', { 'van-coupon-item--disabled': disabled }]">
    <div class="van-coupon-item__head">
      <div class="van-coupon-item__lines"></div>
      <div class="van-coupon-item__gradient">
        <h2 v-html="faceAmount" />
        <p>{{ conditionMessage }}</p>
      </div>
    </div>
    <div class="van-coupon-item__body">
      <h2>{{ data.name }}</h2>
      <span>{{ validPeriod }}</span>
      <p v-if="disabled && data.reason">{{ data.reason }}</p>
      <div class="van-coupon-item__corner" v-if="chosen">
        <van-icon name="success" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-coupon-item',

  components: {
    [Icon.name]: Icon
  },

  props: {
    data: Object,
    chosen: Boolean,
    disabled: Boolean
  },

  computed: {
    validPeriod() {
      return `${this.getDate(this.data.start_at)}-${this.getDate(this.data.end_at)}`;
    },
    faceAmount() {
      return this.data.denominations !== 0
        ? `<span>¥</span> ${this.formatAmount(this.data.denominations)}`
        : this.data.discount !== 0
          ? this.formatDiscount(this.data.discount)
          : '';
    },
    conditionMessage() {
      let condition = this.data.origin_condition;
      condition = condition % 100 === 0 ? Math.round(condition / 100) : (condition / 100).toFixed(2);
      return this.data.origin_condition === 0 ? '无使用门槛' : `满${condition}元可用`;
    }
  },

  methods: {
    getDate(timeStamp) {
      const date = new Date(timeStamp * 1000);
      return `${date.getFullYear()}.${this.padZero(date.getMonth() + 1)}.${this.padZero(date.getDate())}`;
    },
    padZero(num) {
      return (num < 10 ? '0' : '') + num;
    },
    formatDiscount(discount) {
      return `${(discount / 10).toFixed(discount % 10 === 0 ? 0 : 1)}折`;
    },
    formatAmount(amount) {
      return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
    }
  }
};
</script>
