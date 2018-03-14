<template>
  <div
    class="van-cell"
    :class="{
      'van-hairline': border,
      'van-cell--required': required,
      'van-cell--clickable': isLink || clickable
    }"
    @click="onClick"
  >
    <div class="van-cell__title" v-if="title || icon || $slots.title || $slots.icon">
      <slot name="icon">
        <icon v-if="icon" :name="icon" />
      </slot>
      <slot name="title">
        <span class="van-cell__text" v-text="title" />
        <span class="van-cell__label" v-if="label" v-text="label" />
      </slot>
    </div>
    <div
      class="van-cell__value"
      v-if="value || $slots.default"
      :class="{
        'van-cell__value--link': isLink,
        'van-cell__value--alone': !$slots.title && !title && !label
      }"
    >
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <icon name="arrow" class="van-cell__right-icon" v-if="isLink" />
    </slot>
    <slot name="extra" />
  </div>
</template>

<script>
import { create } from '../utils';
import RouterLink from '../mixins/router-link';

export default create({
  name: 'van-cell',

  mixins: [RouterLink],

  props: {
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    value: [String, Number],
    border: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
});
</script>
