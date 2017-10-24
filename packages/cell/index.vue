<template>
  <a :class="['van-cell', 'van-hairline', { 'van-cell--required': required }]" :href="url" @click="$emit('click')">
    <div class="van-cell__title" v-if="$slots.title || title">
      <slot name="icon">
        <i v-if="icon" class="van-icon" :class="'van-icon-' + icon" />
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
      <van-icon name="arrow" class="van-cell__right-icon" v-if="isLink" />
    </slot>
    <slot name="extra" />
  </a>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-cell',

  components: {
    [Icon.name]: Icon
  },

  props: {
    icon: String,
    title: String,
    value: [String, Number],
    url: String,
    label: String,
    isLink: Boolean,
    required: Boolean
  }
};
</script>
