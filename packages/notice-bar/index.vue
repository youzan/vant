<template>
  <div
    v-show="showNoticeBar"
    :class="b({ withicon: mode })"
    :style="barStyle"
    @click="$emit('click')"
  >
    <icon
      v-if="leftIcon"
      :class="b('left-icon')"
      :name="leftIcon"
    />
    <div
      ref="wrap"
      :class="b('wrap')"
    >
      <div
        ref="content"
        :class="[b('content'), animationClass, { 'van-ellipsis': !scrollable }]"
        :style="contentStyle"
        @animationend="onAnimationEnd"
        @webkitAnimationEnd="onAnimationEnd"
      >
        <slot>{{ text }}</slot>
      </div>
    </div>
    <icon
      v-if="iconName"
      :class="b('right-icon')"
      :name="iconName"
      @click="onClickIcon"
    />
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'notice-bar',

  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },

  computed: {
    iconName() {
      return this.mode === 'closeable' ? 'cross' : this.mode === 'link' ? 'arrow' : '';
    },

    barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },

    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    }
  },

  watch: {
    text: {
      handler() {
        this.$nextTick(() => {
          const { wrap, content } = this.$refs;
          if (!wrap || !content) {
            return;
          }

          const wrapWidth = wrap.getBoundingClientRect().width;
          const offsetWidth = content.getBoundingClientRect().width;
          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth;
            this.offsetWidth = offsetWidth;
            this.duration = offsetWidth / this.speed;
            this.animationClass = this.b('play');
          }
        });
      },
      immediate: true
    }
  },

  methods: {
    onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable';
    },

    onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed;
        this.animationClass = this.b('play--infinite');
      });
    }
  }
});
</script>
