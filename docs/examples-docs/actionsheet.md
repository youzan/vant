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

点击以下按钮查看手机端效果：

<zan-button @click="mobileShow = true">点击查看手机端效果</zan-button>
<mobile-popup v-model="mobileShow" :url="mobileUrl"></mobile-popup>

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| actions | 行动按钮数组 | Array  | [] |    |
| title | 标题 | String  |  |    |
| cancelText | 取消按钮文案 | String  |  |    |
| overlay | 是否显示遮罩 | Boolean  |  |    |
| closeOnClickOverlay | 点击遮罩是否关闭ActionSheet | Boolean  |  |    |

### actions

`API`中的`actions`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`：

| key       | 说明      |
|-----------|-----------|
| name | 标题 |
| subname | 二级标题 |
| className | 为对应列添加特殊的`class` |
| loading | 是否是loading状态 |
