## SubmitBar 提交订单栏

### 使用指南
``` javascript
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
```

### 代码演示

#### 基础用法

```html
<van-submit-bar
  :price="3050"
  button-text="提交订单"
  @submit="onSubmit"
/>
```

#### 禁用状态

禁用状态下不会触发`submit`事件

```html
<van-submit-bar
  disabled
  :price="3050"
  button-text="提交订单"
  tip="你的收货地址不支持同城送, 我们已为你推荐快递"
  @submit="onSubmit"
/>
```

#### 加载状态

加载状态下不会触发`submit`事件

```html
<van-submit-bar
  loading
  :price="3050"
  button-text="提交订单"
  @submit="onSubmit"
/>
```

#### 高级用法

通过插槽插入自定义内容

```html
<van-submit-bar
  :price="3050"
  button-text="提交订单"
  @submit="onSubmit"
>
  <van-checkbox v-model="checked">全选</van-checkbox>
  <span slot="tip">
    你的收货地址不支持同城送, <span>修改地址</span>
  </span>
</van-submit-bar>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| price | 价格（单位分） | `Number` | - | - |
| label | 价格文案 | `String` | `合计：` | - |
| button-text | 按钮文字 | `String` | - | - |
| button-type | 按钮类型 | `String` | `danger` | - |
| tip | 提示文案 |  `String` | - | - |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - |
| loading | 是否显示加载中的按钮 |  `Boolean` | `false` | - |
| currency | 货币符号 | `String` | `¥` | 1.0.6 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| submit | 按钮点击事件回调 | - |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义订单栏左侧内容 |
| top | 自定义订单栏上方内容 |
| tip | 提示文案中的额外操作和说明 |
