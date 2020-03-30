# GoodsAction 商品导航

### 引入

```js
import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
```

## 代码演示

### 基础用法

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
  <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
</van-goods-action>
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
    }
  }
}
```

### 徽标提示

在 GoodsActionIcon 组件上设置`dot`属性后，会在图标右上角展示一个小红点。设置`badge`属性后，会在图标右上角展示相应的徽标

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
```

### 自定义图标颜色

通过 GoodsActionIcon 的`color`属性可以自定义图标的颜色

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
  <van-goods-action-icon icon="cart-o" text="购物车" />
  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
```

### 自定义按钮颜色

通过 GoodsActionButton 的`color`属性可以自定义按钮的颜色，支持传入`linear-gradient`渐变色

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" />
  <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
</van-goods-action>
```

## API

### GoodsAction Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | *boolean* | `true` |

### GoodsActionIcon Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| text | 按钮文字 | *string* | - |
| icon | 图标 | *string* | - |
| color `v2.4.2` | 图标颜色 | *string* | `#323233` |
| icon-class | 图标额外类名 | *any* | - |
| dot `2.5.5` | 是否显示图标右上角小红点 | *boolean* | `false` |
| badge `v2.5.6` | 图标右上角徽标的内容 | *number \| string* | - |
| info | 图标右上角徽标的内容（已废弃，请使用 badge 属性） | *number \| string* | - |
| url | 点击后跳转的链接地址 | *string* | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | *string \| object* | - |
| replace | 是否在跳转时替换当前页面历史 | *boolean* | `false` |

### GoodsActionButton Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| text | 按钮文字 | *string* | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | *string* | `default` |
| color `v2.1.8` | 按钮颜色，支持传入`linear-gradient`渐变色 | *string* | - |
| icon `v2.4.4` | 左侧[图标名称](#/zh-CN/icon)或图片链接 | *string* | - |
| disabled | 是否禁用按钮 | *boolean* | `false` | - |
| loading | 是否显示为加载状态 | *boolean* | `false` | - |
| url | 点击后跳转的链接地址 | *string* | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | *string \| object* | - |
| replace | 是否在跳转时替换当前页面历史 | *boolean* | `false` |

### GoodsActionIcon Slots

| 名称 | 说明 |
|------|------|
| default | 文本内容 |
| icon | 自定义图标 |

### GoodsActionButton Slots

| 名称 | 说明 |
|------|------|
| default | 按钮显示内容 |
