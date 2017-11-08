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
      <div
        ref="content"
        :class="['van-notice-bar__content', animationClass]"
        :style="contentStyle"
        @animationend="onAnimationEnd"
      >
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
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    }
  },

  mounted() {
    const offsetWidth = this.$refs.content.getBoundingClientRect().width;
    const wrapWidth = this.$refs.contentWrap.getBoundingClientRect().width;
    if (this.scrollable && offsetWidth > wrapWidth) {
      this.wrapWidth = wrapWidth;
      this.offsetWidth = offsetWidth;
      this.duration = offsetWidth / this.speed;
      this.animationClass = 'van-notice-bar__play';
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
        this.animationClass = 'van-notice-bar__play--infinite';
      });
    }
  }
};
</script>
