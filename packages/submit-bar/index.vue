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
          <span v-text="label || $t('label')" />
          <span :class="b('price')">{{ currency }} {{ price | format }}</span>
        </template>
      </div>
      <van-button
        square
        size="large"
        :type="buttonType"
        :disabled="disabled"
        :loading="loading"
        :text="loading ? '' : buttonText"
        @click="$emit('submit')"
      />
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
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    price: {
      type: Number,
      default: null
    },
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
