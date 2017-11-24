<template>
  <div
    class="van-modal"
    :class="className"
    :style="style"
    @touchmove.prevent.stop
    @click="$emit('click', $event)"
  />
</template>

<script>
export default {
  name: 'van-modal',

  props: {
    zIndex: Number,
    className: String,
    customStyle: Object,
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  }
};
</script>
