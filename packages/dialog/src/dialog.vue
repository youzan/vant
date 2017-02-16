<template>
  <transition name="dialog-fade">
    <div class="o2-dialog-wrapper">
      <div class="o2-dialog" v-show="value">
        <div class="o2-dialog-header" v-if="title">
          <div class="o2-dialog-title" v-text="title"></div>
        </div>
        <div class="o2-dialog-content" v-if="message">
          <div class="o2-dialog-message" v-html="message"></div>
        </div>
        <div class="o2-dialog-footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
          <button class="o2-dialog-btn o2-dialog-cancel" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button class="o2-dialog-btn o2-dialog-confirm" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
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
  name: 'o2-dialog',

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
      title: '提示',
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
    }
  }
};
</script>
