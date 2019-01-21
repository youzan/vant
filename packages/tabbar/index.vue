<template>
  <div
    class="van-hairline--top-bottom"
    :class="b({ fixed })"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'tabbar',

  data() {
    return {
      items: []
    };
  },

  props: {
    value: Number,
    activeColor: String,
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex
      };
    }
  },

  watch: {
    items() {
      this.setActiveItem();
    },

    value() {
      this.setActiveItem();
    }
  },

  methods: {
    setActiveItem() {
      this.items.forEach((item, index) => {
        item.active = index === this.value;
      });
    },

    onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  }
});
</script>
