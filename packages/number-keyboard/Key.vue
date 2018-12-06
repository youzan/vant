<template>
  <i
    v-text="text"
    :class="['van-hairline', className]"
    @touchstart.stop.prevent="onFocus"
    @touchmove="onBlur"
    @touchend="onBlur"
    @touchcancel="onBlur"
  />
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'key',

  props: {
    type: Array,
    text: [String, Number]
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
      return this.b(types);
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
});
</script>
