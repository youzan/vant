<template>
  <transition name="dialog-bounce">
    <div class="zan-dialog-wrapper">
      <div class="zan-dialog" v-show="value">
        <div class="zan-dialog__header" v-if="title">
          <div class="zan-dialog__title" v-text="title"></div>
        </div>
        <div class="zan-dialog__content" v-if="message">
          <div class="zan-dialog__message" v-html="message"></div>
        </div>
        <div class="zan-dialog__footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
          <button class="zan-dialog__btn zan-dialog__cancel" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button class="zan-dialog__btn zan-dialog__confirm" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
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
  name: 'zan-dialog',

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
