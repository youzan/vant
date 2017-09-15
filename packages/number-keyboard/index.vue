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
    >
      <div class="van-number-keyboard__title van-hairline--top">
        <span>{{ title }}</span>
      </div>
      <i 
        v-for="(key, index) in keys" 
        v-text="key"
        :data-key="index"
        :class="['van-hairline', {
          'van-number-keyboard--active': index === active,
          'van-number-keyboard__delete': index === 11 && showDeleteKey
        }]"
      />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'van-number-keyboard',

  props: {
    show: Boolean,
    extraKey: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '安全输入键盘'
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
      for (let i = 0; i < 12; i++) {
        const key = i === 10 ? 0 : i < 9 ? i + 1 : i === 9 ? this.extraKey : '';
        keys.push(key);
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
      if (action !== this.handlerStatus) {
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
};
</script>
