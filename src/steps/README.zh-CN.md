# Steps 步骤条

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

### 引入

```js
import { createApp } from 'vue';
import { Step, Steps } from 'vant';

const app = createApp();
app.use(Step);
app.use(Steps);
```

## 代码演示

### 基础用法

`active` 属性表示当前步骤的索引，从 0 起计。

```html
<van-steps :active="active">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>
```

```js
export default {
  data() {
    return {
      active: 1,
    };
  },
};
```

### 自定义样式

可以通过 `active-icon` 和 `active-color` 属性设置激活状态下的图标和颜色。

```html
<van-steps :active="active" active-icon="success" active-color="#38f">
  <van-step>买家下单</van-step>
  <van-step>商家接单</van-step>
  <van-step>买家提货</van-step>
  <van-step>交易完成</van-step>
</van-steps>
```

### 竖向步骤条

可以通过设置 `direction` 属性来改变步骤条的显示方向。

```html
<van-steps direction="vertical" :active="0">
  <van-step>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-12 12:40</p>
  </van-step>
  <van-step>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-11 10:00</p>
  </van-step>
  <van-step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </van-step>
</van-steps>
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 当前步骤 | _number \| string_ | `0` |
| direction | 显示方向，可选值为 `vertical` | _string_ | `horizontal` |
| active-color | 激活状态颜色 | _string_ | `#07c160` |
| inactive-color `v2.9.1` | 未激活状态颜色 | _string_ | `#969799` |
| active-icon | 激活状态底部图标，可选值见 [Icon 组件](#/zh-CN/icon) | _string_ | `checked` |
| inactive-icon | 未激活状态底部图标，可选值见 [Icon 组件](#/zh-CN/icon) | _string_ | - |

### Step Slots

| 名称          | 说明                 |
| ------------- | -------------------- |
| active-icon   | 自定义激活状态图标   |
| inactive-icon | 自定义未激活状态图标 |

### Steps Events

| 事件名              | 说明                       | 回调参数        |
| ------------------- | -------------------------- | --------------- |
| click-step `v2.5.9` | 点击步骤的标题或图标时触发 | _index: number_ |
