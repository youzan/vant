<template><section class="demo-badge"><h1 class="demo-title">badge</h1><example-block title="基础用法">
                <zan-badge-group active-key="2">
  <zan-badge mark="0" title="热销榜" info="8" url="http://baidu.com"></zan-badge>
  <zan-badge mark="1" title="花式寿司" info="99"></zan-badge>
  <zan-badge mark="2" title="火炽寿司"></zan-badge>
  <zan-badge mark="3" title="手握寿司" info="199"></zan-badge>
</zan-badge-group>

              </example-block></section></template>

<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);</script>