## SubmitBar

<script>
import { Toast } from 'packages';

export default {
  methods: {
    onClickButton() {
      Toast('点击按钮');
    },
    onClickEditAddress() {
      Toast('修改地址');
    }
  }
}
</script>

<style>
.demo-submit-bar {
  .van-submit-bar {
    position: relative;
  }
  .van-edit-address {
    color: #38F;
  }
}
</style>

### Install
``` javascript
import { SubmitBar } from 'vant';

Vue.component(SubmitBar.name, SubmitBar);
```

### Usage

#### Basic Usage

```html
<van-submit-bar
  :price="3050"
  buttonText="提交订单"
  @submit="onClickButton"
/>
```

#### Disabled
禁用状态下不会触发`submit`事件

```html
<van-submit-bar
  disabled
  :price="3050"
  buttonText="提交订单"
  tip="您的收货地址不支持同城送, 我们已为您推荐快递"
  @submit="onClickButton"
/>
```

#### Loading
加载状态下不会触发`submit`事件

```html
<van-submit-bar
  loading
  :price="3050"
  buttonText="提交订单"
  @submit="onClickButton"
/>
```

#### Advanced Usage
通过 slot 插入自定义内容

```html
<van-submit-bar
  :price="3050"
  buttonText="提交订单"
  @submit="onClickButton"
>
  <van-checkbox v-model="checked">全选</van-checkbox>
  <span slot="tip">
    您的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址 ></span>
  </span>
</van-submit-bar>
```

### API

| Attribute | Description | Type | Default | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| price | 价格（单位分） |  `Number` | - | 是 |
| buttonText | 按钮文字 | `String` | - | 是 |
| buttonType | 按钮类型 |  `String` | `danger` | 否 |
| tip | 提示文案 |  `String` | - | 否 |
| disabled | 是否禁用按钮 |  `Boolean` | `false` | 否 |
| loading | 是否显示加载中的按钮 |  `Boolean` | `false` | 否 |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| submit | 按钮点击事件回调 | - |

### Slot

| Name | Description |
|-----------|-----------|
| default | 自定义订单栏左侧内容 |
| tip | 提示文案中的额外操作和说明 |
