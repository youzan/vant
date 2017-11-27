<template>
  <transition name="van-toast-fade">
    <div class="van-toast-wrapper" v-show="visible">
      <div class="van-toast" :class="[`van-toast--${displayStyle}`, `van-toast--${position}`]">
        <!-- text only -->
        <div v-if="displayStyle === 'text'">{{ message }}</div>
        <div v-if="displayStyle === 'html'" v-html="message" />

        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <van-loading v-if="type === 'loading'" color="white" />
          <van-icon v-else class="van-toast__icon" :name="type" />
          <div v-if="message" class="van-toast__text">{{ message }}</div>
        </template>
      </div>
      <div class="van-toast__overlay" :class="{ 'van-toast__overlay--mask': mask }" v-if="forbidClick || mask" />
    </div>
  </transition>
</template>

<script>
import Icon from '../icon';
import Loading from '../loading';

const DEFAULT_STYLE_LIST = ['success', 'fail', 'loading'];

export default {
  name: 'van-toast',

  components: {
    [Icon.name]: Icon,
    [Loading.name]: Loading
  },

  props: {
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
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
