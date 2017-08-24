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
  a {
    color: #4078c0;
    text-decoration: none;
  }

  body {
    -webkit-font-smoothing: antialiased;    
  }

  body, html {
    height: 100%;
  }

  .examples-container {
    height: 100%;
    overflow: auto;
    background: #f8f8f8;
    position: relative;
    -webkit-overflow-scrolling: touch;
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
