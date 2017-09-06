<template>
  <div class="van-step van-hairline" :class="stepClass">
    <div class="van-step__circle-container">
      <i class="van-step__circle" v-if="status !== 'process'"></i>
      <i class="van-icon van-icon-checked" :style="{ color: $parent.activeColor }" v-else></i>
    </div>
    <div class="van-step__title" :style="titleStyle">
      <slot></slot>
    </div>
    <div class="van-step__line"></div>
  </div>
</template>

<script>
export default {
  name: 'van-step',

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
    stepClass() {
      const status = this.status;
      const statusClass = status ? 'van-step--' + status : '';
      const directionClass = `van-step--${this.$parent.direction}`;
      return [directionClass, statusClass];
    },
    titleStyle() {
      if (this.status === 'process') {
        return {
          color: this.$parent.activeColor
        };
      }
    }
  }
};
</script>
