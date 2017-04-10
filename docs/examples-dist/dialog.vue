<template><section class="demo-dialog"><h1 class="demo-title">dialog</h1><example-block title="消息提示">
                <zan-button @click="handleAlertClick">alert</zan-button>



              </example-block><example-block title="消息确认">
                <zan-button @click="handleConfirmClick">confirm</zan-button>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b dialog {
    .zan-button {
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