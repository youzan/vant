<template><section class="demo-actionsheet"><h1 class="demo-title">Actionsheet 行动按钮</h1><example-block title="基础用法">
                <van-button @click="show1 = true">弹出actionsheet</van-button>
<van-actionsheet v-model="show1" :actions="actions1">
</van-actionsheet>



              </example-block><example-block title="带取消按钮的ActionSheet">
                <van-button @click="show2 = true">弹出带取消按钮的actionsheet</van-button>
<van-actionsheet v-model="show2" :actions="actions1" cancel-text="取消">
</van-actionsheet>



              </example-block><example-block title="带标题的ActionSheet">
                <van-button @click="show3 = true">弹出带标题的actionsheet</van-button>
<van-actionsheet v-model="show3" title="支持以下配送方式" class="title-actionsheet">
  <p>一些内容</p>
</van-actionsheet>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b actionsheet {
    .actionsheet-wx {
      color: #06BF04;
    }

    .van-button {
      margin-left: 15px;
    }

    .title-actionsheet p {
      padding: 20px;
    }
  }
}
</style>
<script>
import Vue from "vue";import ExampleBlock from "components/example-block";Vue.component("example-block", ExampleBlock);
import MobileComputed from 'components/mobile-computed';

export default {
  mixins: [MobileComputed],

  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      actions1: [
        {
          name: '微信安全支付',
          className: 'actionsheet-wx',
          callback: this.handleActionClick
        },
        {
          name: '支付宝支付',
          loading: true
        },
        {
          name: '有赞E卡',
          subname: '（剩余260.50元）'
        },
        {
          name: '信用卡支付'
        },
        {
          name: '其他支付方式'
        }
      ]
    };
  },

  methods: {
    handleActionClick(item) {
      console.log(item);
    }
  }
}
</script>