<template>
  <div :class="b()">
    <slot name="top" />
    <div
      v-if="tip || $slots.tip"
      :class="b('tip')"
    >
      {{ tip }}<slot name="tip" />
    </div>
    <div :class="b('bar')">
      <slot />
      <div :class="b('text')">
        <template v-if="hasPrice">
          <span>{{ label || $t('label') }}</span>
          <span :class="b('price')">{{ currency }} {{ price | format }}</span>
        </template>
      </div>
      <van-button
        square
        size="large"
        :type="buttonType"
        :disabled="disabled"
        :loading="loading"
        @click="$emit('submit')"
      >
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
    price: Number,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    }
  },

  computed: {
    hasPrice() {
      return typeof this.price === 'number';
    }
  },

  filters: {
    format(price) {
      return (price / 100).toFixed(2);
    }
  }
});
</script>
