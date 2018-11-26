<template>
  <i
    v-on="$listeners"
    :class="[classPrefix, isSrc ? 'van-icon--image' : `${classPrefix}-${name}`]"
    :style="style"
  >
    <slot />
    <img
      v-if="isSrc"
      :src="name"
    >
    <van-info :info="info" />
  </i>
</template>

<script>
import Info from '../info';
import create from '../utils/create-basic';
import isSrc from '../utils/validate/src';

export default create({
  name: 'icon',

  components: {
    [Info.name]: Info
  },

  props: {
    name: String,
    size: String,
    color: String,
    info: [String, Number],
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
    },

    isSrc() {
      return isSrc(this.name);
    }
  }
});
</script>
