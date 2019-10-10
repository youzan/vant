# GoodsAction 商品导航

### 引入

``` javascript
import Vue from 'vue';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
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

```javascript
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

通过`info`属性在图标右上角显示徽标

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
```

### 自定义按钮颜色

通过`color`属性可以自定义按钮的颜色，支持传入`linear-gradient`渐变色

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

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| safe-area-inset-bottom | 是否开启底部安全区适配，[详细说明](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | *boolean* | `false` | - |

### GoodsActionIcon Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 按钮文字 | *string* | - | - |
| icon | 图标 | *string* | - | - |
| icon-class | 图标额外类名 | *any* | - | - |
| info | 图标右上角徽标的内容 | *string \| number* | - | - |
| url | 点击后跳转的链接地址 | *string* | - | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | *string \| object* | - | - |
| replace | 是否在跳转时替换当前页面历史 | *boolean* | `false` | - |

### GoodsActionButton Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 按钮文字 | *string* | - | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | *string* | `default` | - |
| color | 按钮颜色，支持传入`linear-gradient`渐变色 | *string* | - | 2.1.8 |
| disabled | 是否禁用按钮 | *boolean* | `false` | - | - |
| loading | 是否显示为加载状态 | *boolean* | `false` | - | - |
| url | 点击后跳转的链接地址 | *string* | - | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | *string \| object* | - | - |
| replace | 是否在跳转时替换当前页面历史 | *boolean* | `false` | - |

### GoodsActionIcon Slots

| 名称 | 说明 |
|------|------|
| default | 文本内容 |
| icon | 自定义图标 |

### GoodsActionButton Slots

| 名称 | 说明 |
|------|------|
| default | 按钮显示内容 |
