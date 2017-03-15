<template>
  <transition name="zan-toast">
    <div class="zan-toast" :class="['zan-toast' + displayStyle]" v-show="visible">
      <!-- 只显示文字 -->
      <template v-if="displayStyle === 'text'" >
        <div class="zan-toast__text">{{message}}</div>
      </template>
      <!-- 加载中 -->
      <template v-if="displayStyle === 'loading'">
          <zan-loading v-if="type === 'loading'" type="gradient-circle" color="white"></zan-loading>
      </template>
      <!-- 图案加文字 -->
      <template v-if="displayStyle === 'iconPlusText'">
        <zan-cell class="zan-toast__icon":name="check"></zan-cell>
        <div class="zan-toast__text">{{message}}</div>
      </template>
    </div>
  </transition>
</template>

<script>
import zanLoading from 'packages/Loading';
import zanIcon from 'packages/icon';

const TOAST_TYPE = ['text', 'loading', 'success', 'failure'];
/**
 * zan-toast
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
  name: 'zan-toast',

  components: {
    'zan-loading': zanLoading,
    'zan-icon': zanIcon
  },
  props: {
    type: {
      type: String,
      default: false
    },
    message: {
      type: String,
      default: '',
      validate(value) {
        if (this.type === 'success' || this.type === 'failure') {
          return value.length <= 16;
        }
      }
    }
  },
  computed: {
    displayStyle() {
      switch (this.type) {
        case 'text':
          return 'text';
        case 'loading':
          return 'loading';
        default:
          return 'iconPlusText';
      }
    },
    iconName() {
      // TODO: 更新icon
      return 'check';
    }
  }
};
</script>
