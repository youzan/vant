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
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      actions1: [
        {
          name: '微信安全支付',
          className: 'actionsheet-wx'
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
  }
}
</script>

## ActionSheet

### 基础用法

:::demo 基础用法
```html
<div class="zan-row">
  <zan-button @click="show1 = true">弹出actionsheet</zan-button>
</div>
<zan-actionsheet v-model="show1" :actions="actions1">
</zan-actionsheet>
```
:::

### 带取消按钮的ActionSheet

:::demo 带取消按钮的ActionSheet
```html
<div class="zan-row">
  <zan-button @click="show2 = true">弹出带取消按钮的actionsheet</zan-button>
</div>
<zan-actionsheet v-model="show2" :actions="actions1" cancel-text="取消">
</zan-actionsheet>
```
:::

### 带标题的ActionSheet

:::demo 带标题的ActionSheet
```html
<div class="zan-row">
  <zan-button @click="show3 = true">弹出带标题的actionsheet</zan-button>
</div>
<zan-actionsheet v-model="show3" title="支持以下配送方式" class="title-actionsheet">
  <p>一些内容</p>
</zan-actionsheet>
```
:::
