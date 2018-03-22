<template>
  <div class="van-collapse van-hairline--top-bottom">
    <slot />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'collapse',

  model: {
    prop: 'activeNames'
  },

  props: {
    accordion: Boolean,
    activeNames: [String, Number, Array]
  },

  data() {
    return {
      items: []
    };
  },

  methods: {
    switch(name, expanded) {
      const { activeNames } = this;
      if (!this.accordion) {
        name = expanded
          ? activeNames.concat(name)
          : activeNames.filter(activeName => activeName !== name);
      }
      this.$emit('change', name);
      this.$emit('input', name);
    }
  }
});
</script>
