<template>
  <transition name="van-dialog-bounce">
    <div class="van-dialog" v-show="value">
      <div class="van-dialog__header" v-if="title" v-text="title" />
      <div class="van-dialog__content" v-if="message">
        <div class="van-dialog__message" :class="{ 'van-dialog__message--withtitle': title }" v-html="message" />
      </div>
      <div class="van-dialog__footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
        <van-button size="large" class="van-dialog__cancel" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</van-button>
        <van-button size="large" class="van-dialog__confirm" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</van-button>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from '../button';
import Popup from '../mixins/popup';

export default {
  name: 'van-dialog',

  components: {
    [Button.name]: Button
  },

  mixins: [Popup],

  props: {
    overlay: {
      default: true
    },
    closeOnClickOverlay: {
      default: true
    },
    lockOnScroll: {
      default: true
    }
  },

  data() {
    return {
      title: '',
      message: '',
      type: '',
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      callback: null
    };
  },

  methods: {
    handleAction(action) {
      this.$emit('input', false);
      this.callback && this.callback(action);
    }
  }
};
</script>
