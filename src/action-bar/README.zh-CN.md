# ActionBar 动作栏

### 引入

```js
import { createApp } from 'vue';
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant';

const app = createApp();
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
```

## 代码演示

### 基础用法

```html
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
  <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" />
</van-action-bar>
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
  },
};
```

### 徽标提示

在 ActionBarIcon 组件上设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" dot />
  <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
  <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
  <van-action-bar-button type="warning" text="加入购物车" />
  <van-action-bar-button type="danger" text="立即购买" />
</van-action-bar>
```

### 自定义图标颜色

通过 ActionBarIcon 的 `color` 属性可以自定义图标的颜色。

```html
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" color="#07c160" />
  <van-action-bar-icon icon="cart-o" text="购物车" />
  <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
  <van-action-bar-button type="warning" text="加入购物车" />
  <van-action-bar-button type="danger" text="立即购买" />
</van-action-bar>
```

### 自定义按钮颜色

通过 ActionBarButton 的 `color` 属性可以自定义按钮的颜色，支持传入 `linear-gradient` 渐变色。

```html
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" />
  <van-action-bar-icon icon="shop-o" text="店铺" />
  <van-action-bar-button color="#be99ff" type="warning" text="加入购物车" />
  <van-action-bar-button color="#7232dd" type="danger" text="立即购买" />
</van-action-bar>
```

## API

### ActionBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### ActionBarIcon Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文字 | _string_ | - |
| icon | 图标 | _string_ | - |
| color `v2.4.2` | 图标颜色 | _string_ | `#323233` |
| icon-class | 图标额外类名 | _any_ | - |
| dot `2.5.5` | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge `v2.5.6` | 图标右上角徽标的内容 | _number \| string_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | - |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |

### ActionBarButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 按钮文字 | _string_ | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |
| color | 按钮颜色，支持传入`linear-gradient`渐变色 | _string_ | - |
| icon `v2.4.4` | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| disabled | 是否禁用按钮 | _boolean_ | `false` | - |
| loading | 是否显示为加载状态 | _boolean_ | `false` | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | - |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |

### ActionBarIcon Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 文本内容   |
| icon    | 自定义图标 |

### ActionBarButton Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 按钮显示内容 |
