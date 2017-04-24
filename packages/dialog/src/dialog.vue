<template>
  <transition name="dialog-bounce">
    <div class="van-dialog-wrapper">
      <div class="van-dialog" v-show="value">
        <div class="van-dialog__header" v-if="title">
          <div class="van-dialog__title" v-text="title"></div>
        </div>
        <div class="van-dialog__content" v-if="message">
          <div class="van-dialog__message" :class="{ 'van-dialog__message--notitle': !title }" v-html="message"></div>
        </div>
        <div class="van-dialog__footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
          <button class="van-dialog__btn van-dialog__cancel" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button class="van-dialog__btn van-dialog__confirm" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from 'src/mixins/popup';

const CANCEL_TEXT = '取消';
const CONFIRM_TEXT = '确认';

export default {
  name: 'van-dialog',

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
      confirmButtonText: CONFIRM_TEXT,
      cancelButtonText: CANCEL_TEXT,
      callback: null
    };
  },

  methods: {
    handleAction(action) {
      this.value = false;
      this.callback && this.callback(action);
    },

    close() {
      /* istanbul ignore if */
      if (this.closing) return;

      this.closing = true;

      this.value = false;

      /* istanbul ignore else */
      if (this.lockOnScroll) {
        setTimeout(() => {
          if (this.overlay && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
          }
          this.bodyOverflow = null;
        }, 200);
      }

      this.opened = false;
      this.doAfterClose();
    }
  }
};
</script>
