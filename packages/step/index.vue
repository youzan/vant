<template>
  <div class="van-hairline" :class="b([$parent.direction, { [status]: status }])">
    <div :class="b('title')" :style="titleStyle">
      <slot />
    </div>
    <div :class="b('circle-container')">
      <i :class="b('circle')" v-if="status !== 'process'" />
      <icon v-else name="checked" :style="{ color: $parent.activeColor }" />
    </div>
    <div :class="b('line')" />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'step',

  beforeCreate() {
    this.$parent.steps.push(this);
  },

  computed: {
    status() {
      const index = this.$parent.steps.indexOf(this);
      const active = this.$parent.active;

      if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    },

    titleStyle() {
      return this.status === 'process' ? {
        color: this.$parent.activeColor
      } : {};
    }
  }
});
</script>
