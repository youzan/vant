<template>
  <div class="o2-switch" :class="['is-' + switchState]" @click="toggleState">
    <div class="o2-switch-node"></div>
  </div>
</template>

<script>
/**
 * o2-switch
 * @module components/switch
 * @desc 开关
 * @param {boolean} [checked=false] - 开关状态
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [loading=false] - loading状态
 * @param {callback} [onChange] - 开关状态改变回调函数。
 *
 * @example
 * <o2-switch checked="true" disabled="false"></o2-switch>
 */
export default {
  name: 'o2-switch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: function() {}
    }
  },
  computed: {
    switchState: function() {
      if (this.disabled) {
        return 'disabled';
      } else if (this.loading) {
        return 'loading';
      } else if (this.checked) {
        return 'on';
      } else {
        return 'off';
      }
    }
  },
  methods: {
    /*
     * 开关状态交互。
     */
    toggleState: function() {
      if (this.disabled || this.loading) return;
      this.onChange(!this.checked);
    }
  }
};
</script>
