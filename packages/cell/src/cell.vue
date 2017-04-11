<template>
  <a :class="['zan-cell', { 'zan-cell--required': required }]" :href="url" @click="handleClick">
    <div
      class="zan-cell__title"
      v-if="this.$slots.title || title"
    >
      <slot name="icon">
        <i v-if="icon" class="zan-icon" :class="'zan-icon-' + icon"></i>
      <slot>
      <slot name="title">
        <span class="zan-cell__text" v-text="title"></span>
        <span class="zan-cell__label" v-if="label" v-text="label"></span>
      </slot>
    </div>
    <div
      class="zan-cell__value"
      v-if="value || this.$slots.default"
      :class="{
        'zan-cell__value--link': isLink,
        'zan-cell__value--alone': !this.$slots.title && !title && !label
      }"
    >
      <slot>
        <span v-text="value"></span>
      </slot>
    </div>
    <i class="zan-icon zan-icon-arrow" v-if="isLink"></i>
  </a>
</template>

<script>
export default {
  name: 'zan-cell',

  props: {
    icon: String,
    title: String,
    value: [String, Number],
    url: String,
    label: String,
    isLink: Boolean,
    required: Boolean
  },

  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>
