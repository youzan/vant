<template>
  <div class="van-star">
    <div
      class="van-star-item van-star--full"
      v-for="(isFull, index) in starList"
      :key="index"
      :style="{
        'width': `${size}px`
      }"
      @click="selectRate(index)"
    >
      <svg
        v-if="isFull"
        :fill="disabled ? defaultColor : color"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="100%"
        height="100%">
        <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"/>
      </svg>
      <svg
        v-else
        :fill="defaultColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32" >
        <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"/>
      </svg>
    </div>
  </div>

</template>

<script>
import create from '../utils/create';

export default create({
  name: 'star-rate',

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
    defaultColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    total: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    starList() {
      return new Array(this.total).fill(false).map((value, index) => index < this.value);
    }
  },

  methods: {
    selectRate(index) {
      if (this.disabled) return;
      this.$emit('input', index + 1);
    }
  }
});
</script>
