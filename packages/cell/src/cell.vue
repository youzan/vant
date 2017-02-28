<template>
  <a class="z-cell" :href="url" @click="handleClick">
    <div class="z-cell__title">
      <slot name="icon">
        <i v-if="icon" class="zui-icon" :class="'zui-icon-' + icon"></i>
      </slot>
      <slot name="title">
        <span class="z-cell__text" v-text="title"></span>
        <span class="z-cell__label" v-if="label" v-text="label"></span>
      </slot>
    </div>
    <div class="z-cell__value" :class="{ 'is-link' : isLink }">
      <slot>
        <span v-text="value"></span>
      </slot>
    </div>
    <i class="zui-icon zui-icon-arrow" v-if="isLink"></i>
  </a>
</template>

<script>
export default {
  name: 'z-cell',

  props: {
    icon: String,
    title: String,
    value: [String, Number],
    url: String,
    label: String,
    isLink: Boolean
  },

  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>
