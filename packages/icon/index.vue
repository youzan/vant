<template>
  <i :class="[classPrefix, `${classPrefix}-${name}`]" :style="style" v-on="$listeners">
    <slot />
    <div v-if="isDef(info)" :class="b('info')">{{ info }}</div>
  </i>
</template>

<script>
import create from '../utils/create-basic';

export default create({
  name: 'icon',

  props: {
    name: String,
    info: [String, Number],
    color: String,
    size: String,
    classPrefix: {
      type: String,
      default: 'van-icon'
    }
  },

  computed: {
    style() {
      return {
        color: this.color,
        fontSize: this.size
      };
    }
  }
});
</script>
