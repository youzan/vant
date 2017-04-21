<template><section class="demo-waterfall"><h1 class="demo-title">Waterfall 瀑布流</h1><example-block title="基础用法">
                <p class="page-desc">当即将滚动到元素底部时，会自动加载更多</p>
<div class="waterfall">
  <div v-waterfall-lower="loadMore" waterfall-disabled="isWaterfallDisabled" waterfall-offset="400">
    <div class="waterfall-item" v-for="item in list" style="text-align: center;">
      {{ item }}
    </div>
    <van-loading v-if="loading" :type="'circle'" :color="'black'"></van-loading>
  </div>
</div>

              </example-block></section></template>
<style>
  .waterfall {
    max-height: 360px;
    overflow: scroll;
    border-top: 1px solid #e5e5e5;
  }
  .waterfall-item {
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
  }
  .page-desc {
    padding: 5px 0;
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
  .van-loading {
    margin: 10px auto;
  }
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      loading: false,
      finished: false
    };
  },
  methods: {
    loadMore() {
      if (this.list.length >= 200) {
        this.finished = true;
        return;
      }

      this.loading = true;
      setTimeout(() => {
        let lastNumber = this.list[this.list.length - 1];
        for (let i = 0; i < 5; i ++) {
          lastNumber += 1;
          this.list.push(lastNumber);
        }
        this.loading = false;
      }, 2000);
    }
  },
  computed: {
    isWaterfallDisabled: function() {
      return this.loading || this.finished;
    }
  }
};
</script>