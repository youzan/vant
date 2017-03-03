<template>
  <div class="zan-switch" :class="switchStates" @click="toggleState">
    <div class="zan-switch__node">
      <zan-loading v-if="loading" class="zan-switch__loading"></zan-loading>
    </div>
    <div class="zan-switch__bg"></div>
  </div>
</template>

<script>
/**
 * zan-switch
 * @module components/switch
 * @desc 开关
 * @param {boolean} [checked=false] - 开关状态
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [loading=false] - loading状态
 * @param {callback} [onChange] - 开关状态改变回调函数。
 *
 * @example
 * <zan-switch checked="true" disabled="false"></zan-switch>
 */
export default {
  name: 'zan-switch',
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
    switchStates: function() {
      let switchStates = ['zan-switch--' + (this.checked ? 'on' : 'off'),
        'zan-switch--' + (this.disabled ? 'disabled' : '')];

      return switchStates;
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
