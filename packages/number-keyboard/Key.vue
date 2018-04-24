<template>
  <i
    v-text="text"
    @touchstart.stop.prevent="onFocus"
    @touchmove="onBlur"
    @touchend="onBlur"
    @touchcancel="onBlur"
    class="van-hairline"
    :class="[b(), className]"
  />
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'key',

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

      return types.map(type => this.b([type]));
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
