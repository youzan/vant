<template><section class="demo-popup"><h1 class="demo-title">popup</h1><example-block title="基础用法">
                <div class="zan-row">
  <zan-button @click="popupShow1 = true">从下方弹出popup</zan-button>
</div>
<zan-popup v-model="popupShow1" position="bottom" class="zan-popup-1">
  xxxx
</zan-popup>

<div class="zan-row">
  <zan-button @click="popupShow2 = true">从上方方弹出popup</zan-button>
</div>
<zan-popup v-model="popupShow2" position="top" class="zan-popup-2" :overlay="false">
  更新成功
</zan-popup>

<div class="zan-row">
  <zan-button @click="popupShow3 = true">从右方弹出popup</zan-button>
</div>
<zan-popup v-model="popupShow3" position="right" class="zan-popup-3" :overlay="false">
  <zan-button @click.native="popupShow3 = false">关闭 popup</zan-button>
</zan-popup>

<div class="zan-row">
  <zan-button @click="popupShow4 = true">从中间弹出popup</zan-button>
</div>
<zan-popup v-model="popupShow4" transition="popup-fade" class="zan-popup-4">
  一些内容
</zan-popup>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b popup {
    .zan-popup-4 {
      width: 60%;
      height: 200px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false
    }
  },

  watch: {
    popupShow2(val) {
      if (val) {
        setTimeout(() => {
          this.popupShow2 = false;
        }, 2000);
      }
    }
  }
};
</script>