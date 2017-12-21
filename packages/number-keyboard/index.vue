<template>
  <transition :name="transition ? 'van-slide-bottom' : ''">
    <div 
      v-show="show"
      :style="style"
      class="van-number-keyboard"
      @touchstart.stop.prevent="focus"
      @touchmove="blurKey"
      @touchend="blurKey"
      @touchcancel="blurKey"
      @animationend="onAnimationEnd"
      @webkitAnimationEnd="onAnimationEnd"
    >
      <div class="van-number-keyboard__title van-hairline--top" v-if="title || closeButtonText">
        <span v-text="title" />
        <span
          class="van-number-keyboard__close"
          v-text="closeButtonText"
          @click="blurKeyboard"
        />
      </div>
      <i
        v-for="(key, index) in keys"
        v-text="key.text"
        :data-key="index"
        class="van-hairline"
        :class="{
          'van-number-keyboard--active': index === active,
          'van-number-keyboard__delete': index === 11 && showDeleteKey
        }"
      />
    </div>
  </transition>
</template>

<script>
import { create } from '../utils';

export default create({
  name: 'van-number-keyboard',

  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
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

  data() {
    return {
      active: -1
    };
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

      if (this.theme === 'default') {
        keys.push(
          { text: this.extraKey },
          { text: 0 },
          { text: '', class: 'close' }
        );
      } else {
        
      }
      return keys;
    },

    style() {
      return {
        zIndex: this.zIndex
      };
    }
  },

  methods: {
    handler(action) {
      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.blurKeyboard);
      }
    },

    focus(event) {
      this.active = parseInt(event.target.dataset.key);
      if (this.active === 11) {
        this.$emit('delete');
      } else if (!isNaN(this.active)) {
        const key = this.keys[this.active];
        if (key !== '') {
          this.$emit('input', key);
        }
      }
    },

    blurKey() {
      this.active = -1;
    },

    blurKeyboard() {
      this.$emit('blur');
    },

    onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    }
  }
});
</script>
