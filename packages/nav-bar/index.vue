<template>
  <div
    class="van-hairline--bottom"
    :class="b({ fixed })"
    :style="style"
  >
    <div :class="b('left')" @click="$emit('click-left')">
      <slot name="left">
        <icon v-if="leftArrow" :class="b('arrow')" name="arrow" />
        <span v-if="leftText" v-text="leftText" :class="b('text')" />
      </slot>
    </div>
    <div :class="b('title')" class="van-ellipsis">
      <slot name="title">{{ title }}</slot>
    </div>
    <div :class="b('right')" @click="$emit('click-right')">
      <slot name="right">
        <span v-if="rightText" v-text="rightText" :class="b('text')" />
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
