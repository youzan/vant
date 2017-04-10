<template><section class="demo-progress"><h1 class="demo-title">progress</h1><example-block title="基础用法">
                <div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" :percentage="0"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo2" :percentage="46"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" :percentage="100"></zan-progress>
</div>

              </example-block><example-block title="Inactive">
                <div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" :inactive="true" :percentage="0"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo2" :inactive="true" :percentage="46"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" :inactive="true" :percentage="100"></zan-progress>
</div>

              </example-block><example-block title="自定义颜色和文字">
                <div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" pivot-text="红色" color="#ed5050" :percentage="26"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" pivot-text="橙色" color="#f60" :percentage="46"></zan-progress>
</div>
<div class="demo-progress__wrapper">
  <zan-progress class="demo-progress__demo1" pivot-text="黄色" color="#f09000" :percentage="66"></zan-progress>
</div>

              </example-block></section></template>
<style>
  @component-namespace demo {
    @b progress {
      @e wrapper {
        padding: 5px;
        margin: 20px 10px;
      }
    }
  } 
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);</script>