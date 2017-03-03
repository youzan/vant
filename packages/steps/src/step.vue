<template>
  <div class="zan-step" :class="`zan-step--${status}`">
    <div class="zan-step__circle-container">
      <i class="zan-step__circle" v-if="status !== 'process'"></i>
      <i class="zan-icon zan-icon-checked" v-else></i>
    </div>
    <p class="zan-step__title">
      <slot></slot>
    </p>
    <div class="zan-step__line"></div>
  </div>
</template>

<script>
export default {
  name: 'zan-step',

  beforeCreate() {
    this.$parent.steps.push(this);
  },

  computed: {
    status() {
      let index = this.$parent.steps.indexOf(this);
      let active = this.$parent.active;

      if (index === -1) {
        return '';
      } else if (index < active) {
        return 'finish';
      } else if (index === active) {
        return 'process';
      }
    }
  }
};
</script>
