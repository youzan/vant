<template>
  <div class="examples-container" ref="container">
    <div class="demo-content" ref="demo">
      <router-view></router-view>
    </div>
    <div class="footer" :class="{ 'footer-fixed': isFooterFixed }">
      <img src="https://img.yzcdn.cn/upload_files/2017/04/18/FjupTe9o1apJhJr5qR-4ucXqPs7e.png" alt="logo" class="zanui-logo">
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  computed: {
    visible() {
      return ['/'].indexOf(this.$route.path) < 0;
    }
  },

  data() {
    return {
      isFooterFixed: false
    };
  },

  mounted() {
    this.computeFooterFixed();
  },

  watch: {
    '$route.path': function(val) {
      Vue.nextTick(() => {
        this.computeFooterFixed();
      });
    }
  },

  methods: {
    computeFooterFixed() {
      if (this.$refs.container) {
        const demoSize = this.$refs.demo.getBoundingClientRect();
        const containerSize = this.$refs.container.getBoundingClientRect();
        if (demoSize.height < containerSize.height - 54) {
          this.isFooterFixed = true;
          return;
        }
      }
      this.isFooterFixed = false;
    }
  }
};
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  a {
    color: #4078c0;
    text-decoration: none;
  }

  body, html {
    height: 100%;
  }

  .examples-container {
    height: 100%;
    overflow: auto;
    background: #f8f8f8;
    position: relative;
  }

  .page-back {
    display: inline-block;
    position: absolute;
    top: 12px;
    left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    color: #333;
    transform: rotate(180deg);

    i {
      font-size: 24px;
      line-height: 40px;
    }
  }

  .demo-title {
    font-size: 16px;
    display: block;
    line-height: 1;
    padding: 20px 15px 0;
  }

  .demo-sub-title {
    font-size: 14px;
    color: #999;
    padding: 30px 15px 10px;
  }

  .footer {
    margin-top: 30px;
    width: 100%;
    padding: 10px 0 20px;
    background: #f8f8f8;
    
    &.footer-fixed {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .zanui-logo {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: auto;
  }
</style>
