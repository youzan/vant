<template>
  <transition name="dialog-bounce">
    <div class="z-dialog-wrapper">
      <div class="z-dialog" v-show="value">
        <div class="z-dialog-header" v-if="title">
          <div class="z-dialog-title" v-text="title"></div>
        </div>
        <div class="z-dialog-content" v-if="message">
          <div class="z-dialog-message" v-html="message"></div>
        </div>
        <div class="z-dialog-footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
          <button class="z-dialog-btn z-dialog-cancel" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button class="z-dialog-btn z-dialog-confirm" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from 'packages/popup';

const CANCEL_TEXT = '取消';
const CONFIRM_TEXT = '确认';

export default {
  name: 'z-dialog',

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
      if (this.closing) return;

      this.closing = true;

      this.value = false;

      if (this.lockOnScroll) {
        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);
      }

      this.opened = false;
      this.doAfterClose();
    }
  }
};
</script>
