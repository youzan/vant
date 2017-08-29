<template>
  <div class="van-pay-order">
    <div class="van-pay-order__tip" v-show="tip">{{ tip }}</div>
    <div class="van-pay-order__bar">
      <div class="van-pay-order__price">
        <span class="van-pay-order__price-text">合计：</span>
        <span class="van-pay-order__price-interger">¥{{ priceInterger }}.</span>
        <span class="van-pay-order__price-decimal">{{ priceDecimal }}</span>
      </div>
      <van-button :type="buttonType" :disabled="disabled" :loading="loading" @click="onSubmit">
        {{ loading ? '' : buttonText }}
      </van-button>
    </div>
  </div>
</template>

<script>
import Button from '../button';

export default {
  name: 'van-pay-order',

  components: {
    [Button.name]: Button
  },

  props: {
    tip: String,
    disabled: Boolean,
    loading: Boolean,
    buttonText: {
      type: String,
      required: true
    },
    buttonType: {
      type: String,
      default: 'danger'
    },
    price: {
      type: Number,
      required: true
    }
  },

  computed: {
    priceInterger() {
      return Math.floor(this.price / 100);
    },
    priceDecimal() {
      const decimal = this.price % 100;
      return (decimal < 10 ? '0' : '') + decimal;
    }
  },

  methods: {
    onSubmit() {
      if (!this.disabled && !this.loading) {
        this.$emit('submit');
      }
    }
  }
};
</script>
