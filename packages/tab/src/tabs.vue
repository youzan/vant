<template>
  <div class="van-tabs" :class="[`van-tabs--${type}`]">
    <div
      class="van-tabs__nav"
      :class="[`van-tabs__nav--${this.type}`, `van-tabs--col-${this.tabs.length}`]"
    >
      <div class="van-tabs__nav-bar" :style="navBarStyle" v-if="type === 'line'"></div>
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="van-tab"
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
        curActive: +this.active
      };
    },

    watch: {
      active(val) {
        this.curActive = +val;
      }
    },

    computed: {
      /**
       * `type`为`line`时，tab下方的横线的样式
       */
      navBarStyle() {
        if (!this.isReady || this.type !== 'line') return;

        const tabKey = this.curActive;
        const elem = this.$refs.tabkey[tabKey];
        const offsetWidth = `${elem.offsetWidth || 0}px`;
        const offsetLeft = `${elem.offsetLeft || 0}px`;

        return {
          width: offsetWidth,
          transform: `translate3d(${offsetLeft}, 0px, 0px)`,
          transitionDuration: `${this.duration}s`
        };
      }
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
      }
    },

    mounted() {
      // 页面载入完成
      this.$nextTick(() => {
        // 可以开始触发在computed中关于nav-bar的css动画
        this.isReady = true;
      });
    }
  };
</script>
