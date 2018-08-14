<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    :class="b([
      type,
      size,
      {
        block,
        plain,
        square,
        loading,
        disabled,
        unclickable: disabled || loading,
        'bottom-action': bottomAction
      }
    ])"
    @click="onClick"
  >
    <loading v-if="loading" size="20px" :color="type === 'default' ? 'black' : 'white'" />
    <span :class="b('text')">
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'button',

  props: {
    text: String,
    block: Boolean,
    plain: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
});
</script>
