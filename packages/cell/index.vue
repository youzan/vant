<template>
  <a :class="['van-cell', 'van-hairline', { 'van-cell--required': required }]" :href="url" @click="$emit('click')">
    <div
      class="van-cell__title"
      v-if="$slots.title || title"
    >
      <slot name="icon">
        <i v-if="icon" class="van-icon" :class="'van-icon-' + icon"></i>
      </slot>
      <slot name="title">
        <span class="van-cell__text" v-text="title"></span>
        <span class="van-cell__label" v-if="label" v-text="label"></span>
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
        <span v-text="value"></span>
      </slot>
    </div>
    <slot name="right-icon">
      <i class="van-cell__right-icon van-icon van-icon-arrow" v-if="isLink"></i>
    </slot>
  </a>
</template>

<script>
export default {
  name: 'van-cell',

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
