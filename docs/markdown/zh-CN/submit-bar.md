## SubmitBar 提交订单栏

### 使用指南
``` javascript
import { SubmitBar } from 'vant';

Vue.component(SubmitBar.name, SubmitBar);
```

### 代码演示

#### 基础用法

```html
<van-submit-bar
  :price="3050"
  buttonText="提交订单"
  @submit="onClickButton"
/>
```

#### 禁用状态
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

#### 加载状态
加载状态下不会触发`submit`事件

```html
<van-submit-bar
  loading
  :price="3050"
  buttonText="提交订单"
  @submit="onClickButton"
/>
```

#### 高级用法
提示文案中的额外操作和说明

```html
<van-submit-bar
  :price="3050"
  buttonText="提交订单"
  @submit="onClickButton"
>
  <span slot="tip">
    您的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址 ></span>
  </span>
</van-submit-bar>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| price | 价格（单位分） |  `Number` | - | 是 |
| buttonText | 按钮文字 | `String` | - | 是 |
| buttonType | 按钮类型 |  `String` | `danger` | 否 |
| tip | 提示文案 |  `String` | - | 否 |
| disabled | 是否禁用按钮 |  `Boolean` | `false` | 否 |
| loading | 是否显示加载中的按钮 |  `Boolean` | `false` | 否 |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| submit | 按钮点击事件回调 | - |

### Slot

| Name | 说明 |
|-----------|-----------|
| tip | 提示文案中的额外操作和说明 |
