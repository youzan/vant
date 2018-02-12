<template>
  <div
    v-waterfall-lower="triggerWaterfallLower"
    v-waterfall-upper="triggerWaterfallUpper"
    waterfall-disabled="disabled"
  >
    <div
      v-for="item in list"
      class="waterfall-item"
    >{{ item.id }}</div>
  </div>
</template>

<script>
import Waterfall from 'packages/waterfall';

export default {
  props: {
    disabled: Boolean,
    list: Array,
    onWaterfallLower: {
      type: Function,
      default() {
        return function() {};
      }
    },
    onWaterfallUpper: {
      type: Function,
      default() {
        return function() {};
      }
    }
  },
  directives: {
    WaterfallLower: Waterfall('lower'),
    WaterfallUpper: Waterfall('upper')
  },
  methods: {
    triggerWaterfallLower() {
      this.onWaterfallLower();
    },
    triggerWaterfallUpper() {
      this.onWaterfallUpper();
    }
  }
};
</script>
