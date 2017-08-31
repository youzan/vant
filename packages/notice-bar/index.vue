<template>
  <div v-show="showNoticeBar" @click="$emit('click')" :class="['van-notice-bar', { 'van-notice-bar--withicon': mode }]">
    <div class="van-notice-bar__content-wrap" ref="contentWrap">
      <div class="van-notice-bar__content" ref="content" :style="contentStyle" @transitionend="onTransitionEnd">
        <slot>{{ text }}</slot>
      </div>
    </div>
    <van-icon class="van-notice-bar__icon" :name="iconName" v-if="iconName" @click="onClickIcon" />
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
      default: 40
    }
  },

  data() {
    return {
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
    contentStyle() {
      return {
        left: -this.offsetWidth + 'px',
        transitionDelay: this.delay + 's',
        transitionDuration: this.duration + 's',
        transitionProperty: this.diableTransition ? 'none' : 'left'
      };
    }
  },

  mounted() {
    const offsetWidth = this.$refs.content.getBoundingClientRect().width;
    const wrapWidth = this.$refs.contentWrap.getBoundingClientRect().width;
    if (this.scrollable && offsetWidth > wrapWidth) {
      this.offsetWidth = offsetWidth;
      this.duration = (offsetWidth + wrapWidth) / this.speed;
    }
  },

  methods: {
    onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable';
    },
    onTransitionEnd() {
      const { offsetWidth } = this;
      this.diableTransition = true;
      this.offsetWidth = 0;

      setTimeout(() => {
        this.diableTransition = false;
        this.offsetWidth = offsetWidth;
      }, 50);
    }
  }
};
</script>
