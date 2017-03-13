<template><section class="demo-waterfall"><h1 class="demo-title">waterfall</h1><example-block title="基础用法">
                <div class="waterfall">
  <div v-waterfall-lower="loadMore" v-waterfall-upper="loadMoreUpper" waterfall-disabled="isWaterfallDisabled" waterfall-offset="400">
    <div class="waterfall-item" v-for="item in list" style="text-align: center;">
      {{ item }}
    </div>
    <div v-if="loading" style="text-align: center;">
      loading
    </div>
  </div>
</div>

              </example-block></section></template>
<style>
  .waterfall {
    max-height: 300px;
    overflow: scroll;
  }
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
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
      }, 2500);
    },
    loadMoreUpper() {
      if (this.list[0] < 0) return;
      this.list.unshift(-1);
    }
  },
  computed: {
    isWaterfallDisabled: function() {
      return this.loading || this.finished;
    }
  }
};
</script>