# GoodsAction 商品导航

### 引入

``` javascript
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
  <van-goods-action-icon
    icon="chat-o"
    text="客服"
    @click="onClickIcon"
  />
  <van-goods-action-icon
    icon="cart-o"
    text="购物车"
    @click="onClickIcon"
  />
  <van-goods-action-button
    type="warning"
    text="加入购物车"
    @click="onClickButton"
  />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton"
  />
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

### 图标提示

通过`info`属性在图标右上角增加相应的提示

```html
<van-goods-action>
  <van-goods-action-icon
    icon="chat-o"
    text="客服"
  />
  <van-goods-action-icon
    info="5"
    icon="cart-o"
    text="购物车"
  />
  <van-goods-action-icon
    icon="shop-o"
    text="店铺"
  />
  <van-goods-action-button
    type="warning"
    text="加入购物车"
  />
  <van-goods-action-button
    type="danger"
    text="立即购买"
  />
</van-goods-action>
```

## API

### GoodsAction Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| safe-area-inset-bottom | 是否开启 iPhone X 底部安全区适配，需要在 `viewport` meta 标签中设置 `viewport-fit=cover` | `Boolean` | `false` | 1.6.15 |

### GoodsActionIcon Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 按钮文字 | `String` | - | - |
| icon | 图标 | `String` | - | - |
| icon-class | 图标额外类名 | `any` | - | - |
| info | 图标右上角提示信息 | `String | Number` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | - |

### GoodsActionButton Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 按钮文字 | `String` | - | - |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | `String` | `default` |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - | 1.3.10 |
| loading | 是否显示为加载状态 | `Boolean` | `false` | - | 1.3.10 |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | - |
