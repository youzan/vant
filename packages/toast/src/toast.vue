<template>
  <transition name="van-toast-fade">
    <div class="van-toast-wrapper" v-show="visible">
      <div class="van-toast" :class="['van-toast--' + displayStyle]">
        <!-- 只显示文字 -->
        <template v-if="displayStyle === 'text'" >
          <div class="van-toast__text">{{message}}</div>
        </template>
        <!-- 加载中 -->
        <template v-if="displayStyle === 'loading'">
            <van-loading v-if="type === 'loading'" type="gradient-circle" color="white"></van-loading>
        </template>
        <!-- 图案加文字 -->
        <template v-if="displayStyle === 'default'">
          <van-icon class="van-toast__icon" :name="type"></van-icon>
          <div class="van-toast__text">{{message}}</div>
        </template>
        <!-- 传入html -->
        <template v-if="displayStyle === 'html'">
          <div class="van-toast__text" v-html="message"></div>
        </template>
      </div>
      <div class="van-toast__overlay" v-if="forbidClick"></div>
    </div>
  </transition>
</template>

<script>
import vanLoading from 'packages/loading';
import vanIcon from 'packages/icon';

const TOAST_TYPES = ['text', 'html', 'loading', 'success', 'fail'];
const DEFAULT_STYLE_LIST = ['success', 'fail'];
/**
 * van-toast
 * @module components/toast
 * @desc toast
 * @param {string} [type=false] - 类型
 * @param {string} [message] - 信息
 *
 */
export default {
  name: 'van-toast',

  components: {
    'van-loading': vanLoading,
    'van-icon': vanIcon
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
