<template>
  <div :class="['van-nav-bar van-hairline--top-bottom', { 'van-nav-bar--fixed': fixed }]">
    <div class="van-nav-bar__left" @click="$emit('clickLeft')">
      <slot name="left">
        <van-icon v-if="leftArrow" class="van-nav-bar__arrow" name="arrow" />
        <span v-if="leftText" v-text="leftText" class="van-nav-bar__text" />
      </slot>
    </div>
    <div class="van-nav-bar__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="van-nav-bar__right" @click="$emit('clickRight')">
      <slot name="right">
        <span v-if="rightText" v-text="rightText" class="van-nav-bar__text" />
      </slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-nav-bar',

  components: {
    [Icon.name]: Icon
  },

  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean
  }
};
</script>
