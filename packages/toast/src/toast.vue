<template>
  <transition name="zan-toast-fade">
    <div class="zan-toast-wrapper" v-show="visible">
      <div class="zan-toast" :class="['zan-toast--' + displayStyle]">
        <!-- 只显示文字 -->
        <template v-if="displayStyle === 'text'" >
          <div class="zan-toast__text">{{message}}</div>
        </template>
        <!-- 加载中 -->
        <template v-if="displayStyle === 'loading'">
            <zan-loading v-if="type === 'loading'" type="gradient-circle" color="white"></zan-loading>
        </template>
        <!-- 图案加文字 -->
        <template v-if="displayStyle === 'default'">
          <zan-icon class="zan-toast__icon" :name="type"></zan-icon>
          <div class="zan-toast__text">{{message}}</div>
        </template>
        <!-- 传入html -->
        <template v-if="displayStyle === 'html'">
          <div class="zan-toast__text" v-html="message"></div>
        </template>
      </div>
      <div class="zan-toast__overlay" v-if="forbidClick"></div>
    </div>
  </transition>
</template>

<script>
import zanLoading from 'packages/loading';
import zanIcon from 'packages/icon';

const TOAST_TYPES = ['text', 'html', 'loading', 'success', 'fail'];
const DEFAULT_STYLE_LIST = ['success', 'fail'];
/**
 * zan-toast
 * @module components/toast
 * @desc toast
 * @param {string} [type=false] - 类型
 * @param {string} [message] - 信息
 *
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
      default: 'text',
      validator(value) {
        return TOAST_TYPES.indexOf(value) > -1;
      }
    },
    message: {
      type: String,
      default: ''
    },
    forbidClick: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    displayStyle() {
      return DEFAULT_STYLE_LIST.indexOf(this.type) > -1 ? 'default' : this.type;
    }
  }
};
</script>
