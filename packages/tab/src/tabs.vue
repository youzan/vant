<template>
  <div class="zan-tabs">
    <div class="zan-tabs-nav" :class="classNames">
      <div class="zan-tabs-nav-bar" :style="navBarStyle"></div>
      <div
        v-for="(tab, index) in tabs"
        class="zan-tab"
        :class="{'zan-tab-active': index == switchActiveTabKey}"
        ref="tabkey"
        @click="handleTabClick(index,tab)"
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
      active: {
        type: [Number, String],
        default: 0
      },
      // 是默认的line还是card
      classtype: {
        type: String,
        default: 'line'
      },
      // nav的wrap的样式
      classname: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        tabs: [],
        isReady: false,
        switchActiveTabKey: this.active
      };
    },
    computed: {
      classNames () {
        return [ `zan-tabs-${this.classtype}`, this.classname ]
      },
      navBarStyle () {
        if(!this.isReady) return;
        let tabKey = this.switchActiveTabKey;
        let elem = this.$refs.tabkey[tabKey];
        let w = `${elem.offsetWidth || 0}px`;
        let x = `${elem.offsetLeft || 0}px`;
        return {
          width: w,
          transform: `translate3d(${x}, 0px, 0px)`
        }
      }
    },
    methods: {
      handleTabClick(index, el) {
        if(el.disable) {
          el.$emit('ondisable');
          return 
        }
        this.switchActiveTabKey = index;
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
