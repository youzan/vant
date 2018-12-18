<template>
  <div
    class="van-hairline"
    :class="b([$parent.direction, { [status]: status }])"
  >
    <div
      :class="b('title')"
      :style="titleStyle"
    >
      <slot />
    </div>
    <div :class="b('circle-container')">
      <i
        v-if="status !== 'process'"
        :class="b('circle')"
      />
      <icon
        v-else
        name="checked"
        :style="{ color: $parent.activeColor }"
      />
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
      const { active } = this.$parent;

      if (index < active) {
        return 'finish';
      }
      if (index === active) {
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
