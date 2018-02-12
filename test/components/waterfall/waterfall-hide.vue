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
      }
    },
    directives: {
      WaterfallLower: Waterfall('lower')
    },
    methods: {
      triggerWaterfallLower() {
        this.onWaterfallLower();
      }
    }
  };
</script>

<template>
  <div
    v-waterfall-lower="triggerWaterfallLower"
    waterfall-disabled="disabled"
    class="waterfall--hidden"
  >
    <div
      v-for="item in list"
      class="waterfall-item"
    >{{ item.id }}</div>
  </div>
</template>

<style>
.waterfall--hidden {
  overflow: scroll;
  height: 100px;
  display: none;
}
</style>
