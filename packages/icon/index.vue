<template>
  <i
    v-on="$listeners"
    :class="[classPrefix, `${classPrefix}-${name}`]"
    :style="style"
  >
    <slot />
    <van-info :info="info" />
  </i>
</template>

<script>
import Info from '../info';
import create from '../utils/create-basic';

export default create({
  name: 'icon',

  components: {
    [Info.name]: Info
  },

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
