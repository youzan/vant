<template><section class="demo-actionsheet"><h1 class="demo-title">actionsheet</h1><example-block title="基础用法">
                <div class="zan-row">
  <zan-button @click="show1 = true">弹出actionsheet</zan-button>
</div>
<zan-actionsheet v-model="show1" :actions="actions1">
</zan-actionsheet>



              </example-block><example-block title="带取消按钮的ActionSheet">
                <div class="zan-row">
  <zan-button @click="show2 = true">弹出带取消按钮的actionsheet</zan-button>
</div>
<zan-actionsheet v-model="show2" :actions="actions1" cancel-text="取消">
</zan-actionsheet>



              </example-block><example-block title="带标题的ActionSheet">
                <div class="zan-row">
  <zan-button @click="show3 = true">弹出带标题的actionsheet</zan-button>
</div>
<zan-actionsheet v-model="show3" title="支持以下配送方式" class="title-actionsheet">
  <p>一些内容</p>
</zan-actionsheet>

              </example-block></section></template>
<style>
@component-namespace demo {
  @b actionsheet {
    .actionsheet-wx {
      color: #06BF04;
    }

    .zan-button {
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