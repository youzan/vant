<template>
  <transition name="van-dialog-bounce">
    <div
      v-show="value"
      :class="[b(), className]"
    >
      <div
        v-if="title"
        v-text="title"
        :class="b('header', { isolated: !message && !$slots.default })"
      />
      <div
        :class="b('content')"
        v-if="message || $slots.default"
      >
        <slot>
          <div
            v-if="message"
            v-html="message"
            :class="b('message', { 'has-title': title, [messageAlign]: messageAlign })"
          />
        </slot>
      </div>
      <div
        class="van-hairline--top"
        :class="b('footer', { 'buttons': showCancelButton && showConfirmButton })"
      >
        <van-button
          v-show="showCancelButton"
          :loading="loading.cancel"
          size="large"
          :class="b('cancel')"
          @click="handleAction('cancel')"
        >
          {{ cancelButtonText || $t('cancel') }}
        </van-button>
        <van-button
          v-show="showConfirmButton"
          size="large"
          :loading="loading.confirm"
          :class="[b('confirm'), { 'van-hairline--left': showCancelButton && showConfirmButton }]"
          @click="handleAction('confirm')"
        >
          {{ confirmButtonText || $t('confirm') }}
        </van-button>
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import VanButton from '../button';
import Popup from '../mixins/popup';

export default create({
  name: 'dialog',

  components: {
    VanButton
  },

  mixins: [Popup],

  props: {
    title: String,
    message: String,
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    messageAlign: String,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },

  methods: {
    handleAction(action) {
      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, state => {
          if (state !== false) {
            this.onClose(action);
          }
          this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },

    onClose(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
});
</script>
