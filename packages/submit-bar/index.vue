<template>
  <div class="van-submit-bar">
    <div class="van-submit-bar__tip" v-show="tip || $slots.tip">
      {{ tip }}<slot name="tip" />
    </div>
    <div class="van-submit-bar__bar">
      <slot />
      <div class="van-submit-bar__price">
        <template v-if="hasPrice">
          <span class="van-submit-bar__price-text">{{ label || $t('label') }}</span>
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
import VanButton from '../button';
import create from '../utils/create';

export default create({
  name: 'submit-bar',

  components: {
    VanButton
  },

  props: {
    tip: String,
    type: Number,
    price: Number,
    label: String,
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
});
</script>
