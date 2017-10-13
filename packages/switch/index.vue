<template>
  <div class="van-switch" :class="[`van-switch--${value ? 'on' : 'off'}`, { 'van-switch--disabled': disabled }]" @click="toggleState">
    <div class="van-switch__node van-hairline-surround">
      <van-loading v-if="loading" class="van-switch__loading" />
    </div>
    <div class="van-switch__bg"></div>
  </div>
</template>

<script>
import Loading from '../loading';

export default {
  name: 'van-switch',

  components: {
    [Loading.name]: Loading
  },

  props: {
    value: Boolean,
    loading: Boolean,
    disabled: Boolean
  },

  methods: {
    toggleState() {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  }
};
</script>
