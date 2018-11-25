<template>
  <transition :name="transition ? 'van-slide-up' : ''">
    <div
      v-show="show"
      :style="style"
      :class="b([theme])"
      @touchstart.stop
      @animationend="onAnimationEnd"
      @webkitAnimationEnd="onAnimationEnd"
    >
      <div
        v-if="title || showTitleClose"
        :class="b('title')"
        class="van-hairline--top"
      >
        <span v-text="title" />
        <span
          :class="b('close')"
          v-if="showTitleClose"
          v-text="closeButtonText"
          @click="onClose"
        />
      </div>
      <div :class="b('body')">
        <key
          v-for="key in keys"
          :key="key.text"
          :text="key.text"
          :type="key.type"
          @press="onPressKey"
        />
      </div>
      <div
        v-if="theme === 'custom'"
        :class="b('sidebar')"
      >
        <key
          :text="deleteText"
          :type="['delete', 'big', 'gray']"
          @press="onPressKey"
        />
        <key
          :text="closeButtonText"
          :type="['blue', 'big']"
          @press="onPressKey"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import Key from './Key';

export default create({
  name: 'number-keyboard',

  components: { Key },

  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    extraKey: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    this.handler(true);
  },

  destroyed() {
    this.handler(false);
  },

  activated() {
    this.handler(true);
  },

  deactivated() {
    this.handler(false);
  },

  watch: {
    show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },

  computed: {
    keys() {
      const keys = [];
      for (let i = 1; i <= 9; i++) {
        keys.push({ text: i });
      }

      switch (this.theme) {
        case 'default':
          keys.push(
            { text: this.extraKey, type: ['gray'] },
            { text: 0 },
            { text: this.deleteText, type: ['gray', 'delete'] }
          );
          break;
        case 'custom':
          keys.push(
            { text: 0, type: ['middle'] },
            { text: this.extraKey }
          );
          break;
      }

      return keys;
    },

    style() {
      return {
        zIndex: this.zIndex
      };
    },

    showTitleClose() {
      return this.closeButtonText && this.theme === 'default';
    },

    deleteText() {
      return this.deleteButtonText || this.$t('delete');
    }
  },

  methods: {
    handler(action) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur);
      }
    },

    onBlur() {
      this.$emit('blur');
    },

    onClose() {
      this.$emit('close');
      this.onBlur();
    },

    onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },

    onPressKey(text) {
      if (text === '') {
        return;
      }

      if (text === this.deleteText) {
        this.$emit('delete');
      } else if (text === this.closeButtonText) {
        this.onClose();
      } else {
        this.$emit('input', text);
      }
    }
  }
});
</script>
