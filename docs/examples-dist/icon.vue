<template><section class="demo-icon"><h1 class="demo-title">icon</h1><example-block title="所有Icon">
                <zan-icon name="album"></zan-icon>
<zan-icon name="arrow"></zan-icon>
<zan-icon name="camera"></zan-icon>
<zan-icon name="certificate"></zan-icon>
<zan-icon name="check"></zan-icon>
<zan-icon name="checked"></zan-icon>
<zan-icon name="close"></zan-icon>
<zan-icon name="gift"></zan-icon>
<zan-icon name="home"></zan-icon>
<zan-icon name="location"></zan-icon>
<zan-icon name="message"></zan-icon>
<zan-icon name="send"></zan-icon>
<zan-icon name="shopping-cart"></zan-icon>
<zan-icon name="sign"></zan-icon>
<zan-icon name="store"></zan-icon>
<zan-icon name="topay"></zan-icon>
<zan-icon name="tosend"></zan-icon>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b icon {

    .zan-icon {
      margin: 10px;
      font-size: 45px;
    }
  }
} 
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);</script>