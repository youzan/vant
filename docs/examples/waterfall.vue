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

<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);</script>