<template>
  <div
    class="van-switch"
    :class="[{
      'van-switch--on': value,
      'van-switch--disabled': disabled
    }]"
    :style="style"
    @click="onClick"
  >
    <div class="van-switch__node">
      <loading v-if="loading" class="van-switch__loading" />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'switch',

  props: {
    value: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '30px'
    }
  },

  computed: {
    style() {
      return {
        fontSize: this.size
      };
    }
  },

  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
});
</script>
