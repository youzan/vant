<template>
  <div class="van-collapse van-hairline--top-bottom">
    <slot />
  </div>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-collapse',

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
      let { activeNames } = this;
      if (!this.accordion) {
        name = expanded
          ? activeNames.concat(name)
          : activeNames.filter(activeName => activeName !== name);
      }
      this.$emit('input', name);
      this.$emit('change', name);
    }
  }
});
</script>
