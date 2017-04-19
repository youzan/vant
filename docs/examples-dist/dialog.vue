<template><section class="demo-dialog"><h1 class="demo-title">Dialog 弹出框</h1><example-block title="消息提示">
                <van-button @click="handleAlertClick">alert</van-button>
<van-button @click="handleAlert2Click">无标题alert</van-button>



              </example-block><example-block title="消息确认">
                <van-button @click="handleConfirmClick">confirm</van-button>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b dialog {
    .van-button {
      margin: 15px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
import { Dialog } from 'src/index';
import MobileComputed from 'components/mobile-computed';

export default {
  mixins: [MobileComputed],

  methods: {
    handleAlertClick() {
      Dialog.alert({
        title: 'alert标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then((action) => {
        console.log(action);
      });
    },

    handleAlert2Click() {
      Dialog.alert({
        message: '无标题alert'
      }).then((action) => {
        console.log(action);
      });
    },

    handleConfirmClick() {
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