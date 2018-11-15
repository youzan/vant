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
  name: 'badge-group',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  provide() {
    return {
      vanBadgeGroup: this
    };
  },

  data() {
    return {
      badges: []
    };
  }
});
</script>
