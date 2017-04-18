<template><section class="demo-loading"><h1 class="demo-title">Loading 加载</h1><example-block title="渐变深色spinner">
                <zan-loading class="some-customized-class"></zan-loading>

              </example-block><example-block title="渐变浅色spinner">
                <div class="demo-loading__example demo-loading__example--with-bg">
  <zan-loading class="some-customized-class" :color="'white'"></zan-loading>
</div>

              </example-block><example-block title="单色spinner">
                <zan-loading class="circle-loading" :type="'circle'" :color="'white'"></zan-loading>
<zan-loading class="circle-loading" :type="'circle'" :color="'black'"></zan-loading>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b loading {
    .zan-loading {
      margin: 0 auto;
    }

    .circle-loading {
      margin: 20px auto;
    }

    .demo-loading__example--with-bg {
      background-color: rgba(0, 0, 0, 0.5);
      margin: 0 auto;
      width: 80px;
      padding: 25px 0;
      border-radius: 10px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>