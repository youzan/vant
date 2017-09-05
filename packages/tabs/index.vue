<template>
  <div class="van-tabs" :class="[`van-tabs--${type}`]">
    <div class="van-tabs__nav-wrap" v-if="type === 'line' && tabs.length > 4">
      <div class="van-tabs__swipe" ref="swipe">
        <div class="van-tabs__nav van-tabs__nav--line">
          <div class="van-tabs__nav-bar" :style="navBarStyle"></div>
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="van-tab van-hairline"
            :class="{'van-tab--active': index === curActive}"
            ref="tabkey"
            @click="handleTabClick(index, tab)"
          >
            {{ tab.title }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="van-tabs__nav"
      :class="[`van-tabs__nav--${this.type}`]"
    >
      <div class="van-tabs__nav-bar" :style="navBarStyle" v-if="type === 'line'"></div>
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="van-tab van-hairline"
        :class="{'van-tab--active': index === curActive}"
        ref="tabkey"
        @click="handleTabClick(index, tab)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="van-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import swipe from './swipe';
  import translateUtil from '../utils/transition';

  export default {
    name: 'van-tabs',

    props: {
      // 外部传入的激活的tab标签
      active: {
        type: [Number, String],
        default: 0
      },
      // 是默认的line还是card
      type: {
        type: String,
        default: 'line'
      },
      // 切换tab的动画时间
      duration: {
        type: Number,
        default: 0.3
      }
    },

    data() {
      return {
        tabs: [],
        isReady: false,
        curActive: +this.active,
        isSwiping: false
      };
    },

    watch: {
      active(val) {
        this.curActive = +val;
      },

      curActive() {
        /* istanbul ignore else */
        if (this.tabs.length > 4) {
          this.doOnValueChange();
        }
      }
    },

    computed: {
      /**
       * `type`为`line`时，tab下方的横线的样式
       */
      navBarStyle() {
        if (!this.isReady || this.type !== 'line' || !this.$refs.tabkey) return;

        const tabKey = this.curActive;
        const elem = this.$refs.tabkey[tabKey];
        const offsetWidth = `${elem.offsetWidth || 0}px`;
        const offsetLeft = `${elem.offsetLeft || 0}px`;

        return {
          width: offsetWidth,
          transform: `translate3d(${offsetLeft}, 0, 0)`,
          transitionDuration: `${this.duration}s`
        };
      },
      swipeWidth() {
        return this.$refs.swipe && this.$refs.swipe.getBoundingClientRect().width;
      },
      maxTranslate() {
        /* istanbul ignore if */
        if (!this.$refs.tabkey) return;

        const lastTab = this.$refs.tabkey[this.tabs.length - 1];
        const lastTabWidth = lastTab.offsetWidth;
        const lastTabOffsetLeft = lastTab.offsetLeft;

        return (lastTabOffsetLeft + lastTabWidth) - this.swipeWidth;
      }
    },

    mounted() {
      // 页面载入完成
      this.$nextTick(() => {
        // 可以开始触发在computed中关于nav-bar的css动画
        this.isReady = true;
        this.initEvents();
  
        if (this.tabs.length > 4) {
          this.doOnValueChange();
        }
      });
    },

    methods: {
      /**
       * tab点击事件
       *
       * @param {number} index tab在tabs中的索引
       * @param {Object} el tab的vue实例
       */
      handleTabClick(index, el) {
        if (el.disabled) {
          this.$emit('disabled', index);
          return;
        }

        this.$emit('click', index);
        this.curActive = index;
      },

      /**
       * 将当前value值转换为需要translate的值
       */
      value2Translate(value) {
        /* istanbul ignore if */
        if (!this.$refs.tabkey) return 0;

        const tab = this.$refs.tabkey[value];
        const maxTranslate = this.maxTranslate;
        const tabWidth = tab.offsetWidth;
        const tabOffsetLeft = tab.offsetLeft;
        let translate = tabOffsetLeft + (tabWidth * 2.7) - this.swipeWidth;
        if (translate < 0) {
          translate = 0;
        }

        return -1 * (translate > maxTranslate ? maxTranslate : translate);
      },

      initEvents() {
        const el = this.$refs.swipe;
        if (!el) return;

        let swipeState = {};

        swipe(el, {
          start: event => {
            swipeState = {
              start: new Date(),
              startLeft: event.pageX,
              startTranslateLeft: translateUtil.getElementTranslate(el).left
            };
          },

          drag: event => {
            this.isSwiping = true;

            swipeState.left = event.pageX;
            const deltaX = swipeState.left - swipeState.startLeft;
            const translate = swipeState.startTranslateLeft + deltaX;

            /* istanbul ignore else */
            if (translate > 0 || (translate * -1) > this.maxTranslate) return;

            translateUtil.translateElement(el, translate, null);
          },

          end: () => {
            this.isSwiping = false;
          }
        });
      },

      doOnValueChange() {
        const value = +this.curActive;
        const swipe = this.$refs.swipe;

        translateUtil.translateElement(swipe, this.value2Translate(value), null);
      }
    }
  };
</script>
