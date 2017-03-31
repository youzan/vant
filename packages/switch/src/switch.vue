<template>
  <div class="zan-switch" :class="switchStates" @click="toggleState">
    <div class="zan-switch__node">
      <zan-loading v-if="loading" class="zan-switch__loading"></zan-loading>
    </div>
    <div class="zan-switch__bg"></div>
  </div>
</template>

<script>
import ZanLoading from 'packages/loading';
/**
 * zan-switch
 * @module components/switch
 * @desc 开关
 * @param {boolean} [checked=false] - 开关状态
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [loading=false] - loading状态
 *
 * @example
 * <zan-switch :checked="true" :disabled="false"></zan-switch>
 */
export default {
  name: 'zan-switch',
  components: {
    'zan-loading': ZanLoading
  },
  props: {
    checked: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  computed: {
    switchStates: function() {
      const switchStates = ['zan-switch--' + (this.checked ? 'on' : 'off')];

      if (this.disabled) {
        switchStates.push('zan-switch--disabled');
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
      this.$emit('change', !this.checked);
    }
  }
};
</script>
