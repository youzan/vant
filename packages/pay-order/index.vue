<template>
  <div class="van-pay-order">
    <div class="van-pay-order__tip" v-show="tip || hasTipSlot">{{ tip }}<slot name="tip" /></div>
    <div class="van-pay-order__bar">
      <div class="van-pay-order__price">
        <template v-if="hasPrice">
          <span class="van-pay-order__price-text">合计：</span>
          <span class="van-pay-order__price-interger">¥{{ priceInterger }}.</span>
          <span class="van-pay-order__price-decimal">{{ priceDecimal }}</span>
        </template>
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
    type: Number,
    price: Number,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    buttonType: {
      type: String,
      default: 'danger'
    }
  },

  computed: {
    hasPrice() {
      return typeof this.price === 'number';
    },
    priceInterger() {
      return Math.floor(this.price / 100);
    },
    priceDecimal() {
      const decimal = this.price % 100;
      return (decimal < 10 ? '0' : '') + decimal;
    },
    hasTipSlot () {
      return !!this.$slots['tip']
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
