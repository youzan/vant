<template><section class="demo-popup"><h1 class="demo-title">Popup 弹出菜单</h1><example-block title="基础用法">
                <van-button @click="popupShow1 = true">从中间弹出popup</van-button>
<van-popup v-model="popupShow1" class="van-popup-1" :lock-on-scroll="true">
  从中间弹出popup
</van-popup>



              </example-block><example-block title="从不同位置弹出菜单">
                <van-button @click="popupShow2 = true;">从下方弹出popup</van-button>
<van-popup v-model="popupShow2" position="bottom" class="van-popup-2">
  <van-button @click="showDialog">弹出dialog</van-button>
</van-popup>

<van-button @click="popupShow3 = true">从上方弹出popup</van-button>
<van-popup v-model="popupShow3" position="top" class="van-popup-3" :overlay="false">
  更新成功
</van-popup>

<van-button @click="popupShow4 = true">从右方弹出popup</van-button>
<van-popup v-model="popupShow4" position="right" class="van-popup-4" :overlay="false">
  <van-button @click.native="popupShow4 = false">关闭 popup</van-button>
</van-popup>


<van-button @click="popupShow5 = true">从左方弹出popup</van-button>
<van-popup v-model="popupShow5" position="left" class="van-popup-5" :overlay="false">
  <van-button @click.native="popupShow5 = false">关闭 popup</van-button>
</van-popup>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b popup {
    .van-button {
      margin: 10px 15px;
    }

    .van-popup-1 {
      width: 60%;
      box-sizing: border-box;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
    }

    .van-popup-2 {
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      padding: 20px;
    }

    .van-popup-3 {
      line-height: 50px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.701961);
      color: #fff;
    }

    .van-popup-4,
    .van-popup-5 {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
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