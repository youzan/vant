<template>
  <div
    :class="b()"
    class="van-hairline--top-bottom"
  >
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'collapse',

  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },

  data() {
    return {
      items: []
    };
  },

  methods: {
    switch(name, expanded) {
      if (!this.accordion) {
        name = expanded
          ? this.value.concat(name)
          : this.value.filter(activeName => activeName !== name);
      }
      this.$emit('change', name);
      this.$emit('input', name);
    }
  }
});
</script>
