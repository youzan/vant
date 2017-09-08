<template>
  <div class="van-switch" :class="[`van-switch--${checked ? 'on' : 'off'}`, { 'van-switch--disabled': disabled }]" @click="toggleState">
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
    disabled: Boolean,
    loading: Boolean,
    onChange: Function
  },
  data() {
    return {
      checked: this.value
    };
  },
  watch: {
    checked(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.checked = val;
    }
  },
  methods: {
    /*
     * 开关状态交互。
     */
    toggleState: function() {
      if (this.disabled || this.loading) return;
      if (this.onChange) {
        this.onChange(!this.checked);
      } else {
        this.checked = !this.checked;
      }
    }
  }
};
</script>
