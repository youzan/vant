<template>
  <div :class="b([type, color])" :style="style">
    <span :class="b('spinner', type)">
      <i v-for="(item, index) in (type === 'spinner' ? 12 : 0)" :key="index" />
      <svg v-if="type === 'circular'" :class="b('circular')" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"/>
      </svg>
    </span>
  </div>
</template>

<script>
import create from '../utils/create-basic';

export default create({
  name: 'loading',

  props: {
    size: String,
    type: {
      type: String,
      default: 'circular'
    },
    color: {
      type: String,
      default: 'black'
    }
  },

  computed: {
    style() {
      return this.size ? {
        width: this.size,
        height: this.size
      } : {};
    }
  }
});
</script>
