<template>
  <div
    class="van-nav-bar van-hairline--top-bottom"
    :class="{ 'van-nav-bar--fixed': fixed }"
    :style="style"
  >
    <div class="van-nav-bar__left" @click="$emit('click-left')">
      <slot name="left">
        <icon v-if="leftArrow" class="van-nav-bar__arrow" name="arrow" />
        <span v-if="leftText" v-text="leftText" class="van-nav-bar__text" />
      </slot>
    </div>
    <div class="van-nav-bar__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="van-nav-bar__right" @click="$emit('click-right')">
      <slot name="right">
        <span v-if="rightText" v-text="rightText" class="van-nav-bar__text" />
      </slot>
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'nav-bar',

  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      default: 1
    }
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex
      };
    }
  }
});
</script>
