<template>
  <div class="van-submit-bar">
    <div class="van-submit-bar__tip" v-show="tip || $slots.tip">
      {{ tip }}<slot name="tip"></slot>
    </div>
    <div class="van-submit-bar__bar">
      <div class="van-submit-bar__price">
        <template v-if="hasPrice">
          <span class="van-submit-bar__price-text">合计：</span>
          <span class="van-submit-bar__price-interger">¥{{ priceInterger }}.</span>
          <span class="van-submit-bar__price-decimal">{{ priceDecimal }}</span>
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
  name: 'van-submit-bar',

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
