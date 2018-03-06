<template>
  <div class="van-collapse van-hairline--bottom">
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
    activeNames: [String, Array]
  },

  data() {
    return {
      items: []
    };
  },

  methods: {
    switch(name, expanded) {
      let { activeNames } = this;
      if (Array.isArray(activeNames)) {
        activeNames = expanded
          ? [...activeNames, name]
          : activeNames.filter(activeName => activeName !== name);
      }
      this.$emit('input', activeNames);
    }
  }
});
</script>
