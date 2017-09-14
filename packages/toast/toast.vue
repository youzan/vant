<template>
  <transition name="van-toast-fade">
    <div class="van-toast-wrapper" v-show="visible">
      <div :class="['van-toast', 'van-toast--' + displayStyle]">
        <!-- text only -->
        <div v-if="displayStyle === 'text'" class="van-toast__text">{{ message }}</div>
        <div v-if="displayStyle === 'html'" class="van-toast__text" v-html="message" />

        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <van-loading v-if="type === 'loading'" color="white" />
          <van-icon v-else class="van-toast__icon" :name="type" />
          <div v-if="message" class="van-toast__text">{{ message }}</div>
        </template>
      </div>
      <div class="van-toast__overlay" v-if="forbidClick" />
    </div>
  </transition>
</template>

<script>
import Icon from '../icon';
import Loading from '../loading';

const TOAST_TYPES = ['text', 'html', 'loading', 'success', 'fail'];
const DEFAULT_STYLE_LIST = ['success', 'fail', 'loading'];

export default {
  name: 'van-toast',

  components: {
    [Icon.name]: Icon,
    [Loading.name]: Loading
  },

  props: {
    type: {
      type: String,
      default: 'text',
      validator: value => TOAST_TYPES.indexOf(value) > -1
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
      return DEFAULT_STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
    }
  }
};
</script>
