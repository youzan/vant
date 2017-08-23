<template>
  <div class="van-switch" :class="switchStates" @click="toggleState">
    <div class="van-switch__node">
      <van-loading v-if="loading" class="van-switch__loading"></van-loading>
    </div>
    <div class="van-switch__bg"></div>
  </div>
</template>

<script>
import VanLoading from '../loading';
/**
 * van-switch
 * @module components/switch
 * @desc 开关
 * @param {boolean} [value=false] - 开关状态
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [loading=false] - loading状态
 *
 * @example
 * <van-switch :checked="true" :disabled="false"></van-switch>
 */
export default {
  name: 'van-switch',
  components: {
    'van-loading': VanLoading
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
  computed: {
    switchStates: function() {
      const switchStates = ['van-switch--' + (this.checked ? 'on' : 'off')];

      if (this.disabled) {
        switchStates.push('van-switch--disabled');
      }

      return switchStates;
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
