<template>
  <div class="zan-tabs">
    <div class="zan-tabs-nav" :class="classNames">
      <div class="zan-tabs-nav-bar" :style="navBarStyle"></div>
      <div
        v-for="tab in tabs"
        class="zan-tab J-tab-key"
        :class="[{'zan-tab-active': tab.tabKey == switchActiveTabKey}, tabClassName]"
        :data-key="tab.tabKey"
        @click="handleTabClick(tab.tabKey)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="zan-tabs-content"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'zan-tabs',
    props: {
      // 外部传入的激活的tab标签
      activeTabKey: {
        type: [Number, String],
        default: 0
      },
      // 是默认的line还是card
      classType: {
        type: String,
        default: 'line'
      },
      // nav的wrap的样式
      tabsClassName: {
        type: String,
        default: ''
      },
      // 每个nav里tab的样式
      tabClassName: {
        type: String
      }
    },
    data() {
      return {
        tabs: [],
        isReady: false,
        switchActiveTabKey: this.activeTabKey
      };
    },
    computed: {
      classNames () {
        return [ `zan-tabs-${this.classType}`, this.tabsClassName ]
      },
      navBarStyle () {
        if(!this.isReady) return;
        let tabKey = this.switchActiveTabKey;
        let selectors = `.J-tab-key[data-key="${tabKey}"]`;
        let elem = this.$el.querySelector(selectors) || {};
        let w = `${elem.offsetWidth || 0}px`;
        let x = `${elem.offsetLeft || 0}px`;
        return {
          width: w,
          transform: `translate3d(${x}, 0px, 0px)`
        }
      }
    },
    methods: {
      tabCreate (tabKey, title) {
        this.tabs.push({
          tabKey: tabKey,
          title: title
        });
      },
      handleTabClick(tabKey) {
        this.switchActiveTabKey = tabKey;
      }
    },
    mounted () {
      //页面载入完成
      this.$nextTick(() => {
        // 可以开始触发在computed中关于nav-bar的css动画
        this.isReady = true;
      })
    }
  };
</script>
