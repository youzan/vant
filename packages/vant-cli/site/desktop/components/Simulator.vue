<template>
  <div :class="['van-doc-simulator', { 'van-doc-simulator-fixed': isFixed }]">
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'van-doc-simulator',

  props: {
    src: String,
  },

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight,
    };
  },

  computed: {
    isFixed() {
      return this.scrollTop > 60;
    },

    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + 'px',
      };
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },
};
</script>

<style lang="less">
@import '../../common/style/var';

.van-doc-simulator {
  position: absolute;
  top: @van-doc-padding + @van-doc-header-top-height;
  right: @van-doc-padding;
  z-index: 1;
  box-sizing: border-box;
  width: @van-doc-simulator-width;
  min-width: @van-doc-simulator-width;
  overflow: hidden;
  background: #fafafa;
  border-radius: @van-doc-border-radius;
  box-shadow: 0 8px 12px #ebedf0;

  @media (max-width: 1100px) {
    right: auto;
    left: 750px;
  }

  @media (min-width: @van-doc-row-max-width) {
    right: 50%;
    margin-right: -@van-doc-row-max-width / 2 + 40px;
  }

  &-fixed {
    position: fixed;
    top: @van-doc-padding;
  }

  iframe {
    display: block;
    width: 100%;
  }
}
</style>
