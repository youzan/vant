<template><section class="demo-toast"><h1 class="demo-title">Toast 轻提示</h1><example-block title="基础用法">
                <van-button @click="showSimpleToast">普通文字提示</van-button>
<van-button @click="showLoadingToast">加载Toast</van-button>
<van-button @click="showSuccessToast">成功</van-button>
<van-button @click="showFailToast">失败</van-button>
<van-button @click="showForbidClickToast">背景不能点击</van-button>
<van-button @click="showCustomizedToast(5000)">倒数5秒</van-button>



              </example-block><example-block title="手动关闭">
                <van-button @click="showToast">打开</van-button>
<van-button @click="closeToast">关闭</van-button>



              </example-block><example-block title="手动关闭">
                <van-button @click="showHtmlToast">打开</van-button>



              </example-block></section></template>
<style>
@component-namespace demo {
  @b toast {
    .van-button {
      margin: 15px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
import { Toast } from 'src/index';

export default {
  methods: {
    showSimpleToast() {
      Toast('我是提示文案，建议不超过十五字~');
    },
    showLoadingToast() {
      Toast.loading();
    },
    showSuccessToast() {
      Toast.success('成功文案');
    },
    showFailToast() {
      Toast.fail('失败文案');
    },
    showForbidClickToast() {
      Toast({
        message: '背景不能点击',
        forbidClick: true
      })
    },
    showCustomizedToast(duration) {
      let leftSec = duration / 1000;
      let toast = Toast({
        duration: duration + 1000,
        type: 'success',
        message: leftSec.toString()
      });
      const id = window.setInterval(() => {
        if (leftSec <= 1) {
          window.clearInterval(id);
          toast.message = '跳转中...'
          return;
        }
        toast.message = (--leftSec).toString();
      }, 1000);
    },
    showToast() {
      this.toast = Toast('我是提示文案，建议不超过十五字~');
    },
    closeToast() {
      this.toast.clear();
    },
    showHtmlToast() {
      Toast({
        type: 'html',
        message: '<em>HTML<em>'
      })
    }
  }
};
</script>