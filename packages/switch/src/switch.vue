<template>
  <div class="z-switch" :class="switchState" @click="toggleState">
    <div class="z-switch__node" :class="switchState"></div>
  </div>
</template>

<script>
/**
 * z-switch
 * @module components/switch
 * @desc 开关
 * @param {boolean} [checked=false] - 开关状态
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [loading=false] - loading状态
 * @param {callback} [onChange] - 开关状态改变回调函数。
 *
 * @example
 * <z-switch checked="true" disabled="false"></o2-switch>
 */
export default {
  name: 'z-switch',
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
      let switchState = this.checked ? ['is-on'] : ['is-off'];

      if (this.disabled) switchState.push('is-disabled');
      if (this.loading) switchState.push('is-loading');

      return switchState;
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
