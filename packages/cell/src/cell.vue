<template>
  <a class="o2-cell" :href="url" @click="handleClick">
    <div class="o2-cell-title">
      <slot name="icon">
        <i v-if="icon" class="zui-icon" :class="'zui-icon-' + icon"></i>
      </slot>
      <slot name="title">
        <span class="o2-cell-text" v-text="title"></span>
        <span class="o2-cell-label" v-if="label" v-text="label"></span>
      </slot>
    </div>
    <div class="o2-cell-value" :class="{ 'is-link' : isLink }">
      <slot>
        <span v-text="value"></span>
      </slot>
    </div>
    <i class="zui-icon zui-icon-arrow" v-if="isLink"></i>
  </a>
</template>

<script>
export default {
  name: 'o2-cell',

  props: {
    icon: String,
    title: String,
    value: String,
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
