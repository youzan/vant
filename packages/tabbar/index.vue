<template>
  <div class="van-hairline--top-bottom" :class="b({ fixed })">
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
    fixed: {
      type: Boolean,
      default: true
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
      this.$emit('input', active);
      this.$emit('change', active);
    }
  }
});
</script>
