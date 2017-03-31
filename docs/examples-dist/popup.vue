<template><section class="demo-popup"><h1 class="demo-title">popup</h1><example-block title="基础用法">
                <zan-button block="" @click="popupShow1 = true">从中间弹出popup</zan-button>
<zan-popup v-model="popupShow1" class="zan-popup-1">
  从中间弹出popup
</zan-popup>



              </example-block><example-block title="从不同位置弹出菜单">
                <zan-button block="" @click="popupShow2 = true;">从下方弹出popup</zan-button>
<zan-popup v-model="popupShow2" position="bottom" class="zan-popup-2">
  <zan-button @click="showDialog">弹出dialog</zan-button>
</zan-popup>

<zan-button block="" @click="popupShow3 = true">从上方弹出popup</zan-button>
<zan-popup v-model="popupShow3" position="top" class="zan-popup-3" :overlay="false">
  更新成功
</zan-popup>

<zan-button block="" @click="popupShow4 = true">从右方弹出popup</zan-button>
<zan-popup v-model="popupShow4" position="right" class="zan-popup-4" :overlay="false">
  <zan-button @click.native="popupShow4 = false">关闭 popup</zan-button>
</zan-popup>

<zan-button block="" @click="popupShow5 = true">从左方弹出popup</zan-button>
<zan-popup v-model="popupShow5" position="left" class="zan-popup-5" :overlay="false">
  <zan-button @click.native="popupShow5 = false">关闭 popup</zan-button>
</zan-popup>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b popup {
    .examples,
    .example-block {
      padding: 0 15px;
    }

    .zan-popup-1 {
      width: 60%;
      box-sizing: border-box;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
    }

    .zan-popup-2 {
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      padding: 20px;
    }

    .zan-popup-3 {
      line-height: 50px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.701961);
      color: #fff;
    }

    .zan-popup-4,
    .zan-popup-5 {
      width: 100%;
      height: 100%;
    }

    .zan-button {
      margin: 10px 0;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
import MobileComputed from 'components/mobile-computed';
import Dialog from 'packages/dialog';

export default {
  mixins: [MobileComputed],

  data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false,
      popupShow5: false
    }
  },

  watch: {
    popupShow3(val) {
      if (val) {
        setTimeout(() => {
          this.popupShow3 = false;
        }, 2000);
      }
    }
  },

  methods: {
    showDialog() {
      Dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then((action) => {
        console.log(action);
      }, (error) => {
        console.log(error);
      });
    }
  }
};
</script>