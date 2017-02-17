<template>
  <button
    :type="nativeType"
    :class="[
      'z-button',
      'z-button--' + type,
      'z-button--' + size,
      {
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="loading" class="z-icon-loading"></i>
    <span class="z-button-text"><slot></slot></span>
  </button>
</template>

<script>
/**
 * z-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, mini, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {slot} - 显示文本
 *
 * @example
 * <z-button size="large" type="primary">按钮</z-button>
 */
export default {
  name: 'z-button',

  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  },

  props: {
    disabled: Boolean,
    loading: Boolean,
    nativeType: String,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'mini',
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  }
};
</script>
