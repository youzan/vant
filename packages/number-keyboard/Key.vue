<template>
  <i
    v-text="text"
    @touchstart.stop.prevent="onFocus"
    @touchmove="onBlur"
    @touchend="onBlur"
    @touchcancel="onBlur"
    class="van-hairline van-key"
    :class="className"
  />
</template>

<script>
export default {
  props: {
    text: [String, Number],
    type: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      active: false
    };
  },

  computed: {
    className() {
      const types = this.type.slice(0);
      this.active && types.push('active');

      return types.map(type => `van-key--${type}`);
    }
  },

  methods: {
    onFocus() {
      this.active = true;
      this.$emit('press', this.text);
    },

    onBlur() {
      this.active = false;
    }
  }
};
</script>
