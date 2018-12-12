<template>
  <div :class="b({ disabled })">
    <div :class="b('content')">
      <div :class="b('head')">
        <h2 v-html="faceAmount" />
        <p>{{ conditionMessage }}</p>
      </div>
      <div :class="b('body')">
        <h2>{{ data.name }}</h2>
        <p>{{ validPeriod }}</p>
        <checkbox
          v-if="chosen"
          :value="true"
          :class="b('corner')"
        />
      </div>
    </div>
    <p
      v-if="disabled && data.reason"
      :class="b('reason')"
    >
      {{ data.reason }}
    </p>
  </div>
</template>

<script>
import create from '../utils/create';
import Checkbox from '../checkbox';

export default create({
  name: 'coupon-item',

  props: {
    data: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: String
  },

  components: {
    Checkbox
  },

  computed: {
    validPeriod() {
      return `${this.$t('valid')}：${this.getDate(this.data.startAt)} - ${this.getDate(this.data.endAt)}`;
    },

    faceAmount() {
      return this.data.denominations !== 0
        ? `<span>${this.currency}</span> ${this.formatAmount(this.data.denominations)}`
        : this.data.discount !== 0
          ? this.formatDiscount(this.data.discount)
          : '';
    },

    conditionMessage() {
      let condition = this.data.originCondition;
      condition = condition % 100 === 0 ? Math.round(condition / 100) : (condition / 100).toFixed(2);
      return this.data.originCondition === 0 ? this.$t('unlimited') : this.$t('condition', condition);
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
      return this.$t('discount', `${(discount / 10).toFixed(discount % 10 === 0 ? 0 : 1)}`);
    },

    formatAmount(amount) {
      return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
    }
  }
});
</script>
