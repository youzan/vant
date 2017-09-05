<template>
  <transition name="van-dialog-bounce">
    <div class="van-dialog" v-show="value">
      <div class="van-dialog__header" v-if="title" v-text="title" />
      <div class="van-dialog__content van-hairline">
        <slot>
          <div class="van-dialog__message" v-if="message" :class="{ 'van-dialog__message--withtitle': title }" v-html="message" />
        </slot>
      </div>
      <div class="van-dialog__footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
        <van-button
          size="large"
          class="van-dialog__cancel"
          v-show="showCancelButton"
          @click="handleAction('cancel')"
        >
          {{ cancelButtonText }}
        </van-button>
        <van-button
          size="large"
          :class="['van-dialog__confirm', { 'van-hairline--left': showCancelButton && showConfirmButton }]"
          v-show="showConfirmButton"
          @click="handleAction('confirm')"
        >
          {{ confirmButtonText }}
        </van-button>
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
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    callback: {
      type: Function
    },
    overlay: {
      default: true
    },
    closeOnClickOverlay: {
      default: false
    },
    lockOnScroll: {
      default: true
    }
  },

  methods: {
    handleAction(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
};
</script>
