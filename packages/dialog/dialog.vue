<template>
  <transition name="van-dialog-bounce">
    <div v-show="value" :class="b()">
      <div v-if="title" v-text="title" :class="b('header')" />
      <div :class="b('content')" class="van-hairline">
        <slot>
          <div v-if="message" v-html="message" :class="b('message', { withtitle: title })" />
        </slot>
      </div>
      <div :class="b('footer', { 'buttons': showCancelButton && showConfirmButton })">
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
    beforeClose: Function,
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
        this.beforeClose(action, () => {
          this.onClose(action);
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
