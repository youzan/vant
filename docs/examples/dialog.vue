<template>
  <div class="page-dialog">
    <h1 class="page-title">Dialog</h1>

    <div class="z-button-1">
      <z-button @click="handleAlertClick">点击我打开alert提示框</z-button>
    </div>

    <div class="z-button-1">
      <z-button @click="handleConfirmClick">点击我打开confirm提示框</z-button>
    </div>

  </div>
</template>

<script>
import ZanUI from 'src/index';
let { Dialog } = ZanUI;

export default {
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

<style>
@component-namespace page {
  @b dialog {
    padding: 0 15px;

    .z-button-1 {
      margin-bottom: 10px;
    }
  }
}
</style>
