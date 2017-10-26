<template>
  <div
    v-show="showNoticeBar"
    :class="['van-notice-bar', { 'van-notice-bar--withicon': mode }]"
    :style="barStyle"
    @click="$emit('click')"
  >
    <div class="van-notice-bar__left-icon" v-if="leftIcon">
      <img :src="leftIcon" />
    </div>
    <div class="van-notice-bar__content-wrap" ref="contentWrap">
      <div class="van-notice-bar__content" ref="content" :style="contentStyle" @transitionend="onTransitionEnd">
        <slot>{{ text }}</slot>
      </div>
    </div>
    <van-icon class="van-notice-bar__right-icon" :name="iconName" v-if="iconName" @click="onClickIcon" />
  </div>
</template>

<script>
import Icon from '../icon';

const NOTICE_BAR_MODE = ['', 'closeable', 'link'];

export default {
  name: 'van-notice-bar',

  components: {
    [Icon.name]: Icon
  },

  props: {
    text: String,
    leftIcon: String,
    color: String,
    background: String,
    mode: {
      type: String,
      default: '',
      validator: val => NOTICE_BAR_MODE.indexOf(val) !== -1
    },
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
      default: 300
    }
  },

  data() {
    return {
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      diableTransition: false
    };
  },

  computed: {
    iconName() {
      return this.mode === 'closeable' ? 'close' : this.mode === 'link' ? 'arrow' : '';
    },
    barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },
    contentStyle() {
      return {
        transform: `translate3d(${-this.offsetWidth}px, 0, 0)`,
        transitionDelay: (this.firstRound ? this.delay : 0) + 's',
        transitionDuration: this.duration + 's'
      };
    }
  },

  mounted() {
    const offsetWidth = this.$refs.content.getBoundingClientRect().width;
    const wrapWidth = this.$refs.contentWrap.getBoundingClientRect().width;
    if (this.scrollable && offsetWidth > wrapWidth) {
      this.wrapWidth = wrapWidth;
      this.offsetWidth = offsetWidth;
      this.duration = (offsetWidth + wrapWidth) / this.speed;
    }
  },

  methods: {
    onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable';
    },
    onTransitionEnd() {
      const { offsetWidth, wrapWidth } = this;
      this.firstRound = false;
      this.duration = 0;
      this.offsetWidth = -this.wrapWidth;

      // wait for vue render && dom update
      setTimeout(() => {
        this.duration = (offsetWidth + 2 * wrapWidth) / this.speed;
        this.offsetWidth = offsetWidth;
      }, 50);
    }
  }
};
</script>
