<template>
  <div :class="b()">
    <svg
      v-for="(isFull, index) in list"
      :fill="disabled ? disabledColor : isFull ? color : voidColor"
      viewBox="0 0 32 32"
      :style="style"
      :class="b('item')"
      @click="onSelect(index)"
    >
      <path :d="isFull ? 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z' : 'M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z'" />
    </svg>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'rate',

  props: {
    size: {
      type: Number,
      default: 20
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    style() {
      return {
        width: this.size + 'px'
      };
    },

    list() {
      return Array.apply(null, { length: this.count }).map((value, index) => index < this.value);
    }
  },

  methods: {
    onSelect(index) {
      if (!this.disabled) {
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    }
  }
});
</script>
