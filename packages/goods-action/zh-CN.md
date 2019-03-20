## GoodsAction 商品导航

### 使用指南
``` javascript
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);
```

### 代码演示
#### 基础用法

```html
<van-goods-action>
  <van-goods-action-mini-btn
    icon="chat-o"
    text="客服"
    @click="onClickMiniBtn"
  />
  <van-goods-action-mini-btn
    icon="cart-o"
    text="购物车"
    @click="onClickMiniBtn"
  />
  <van-goods-action-big-btn
    text="加入购物车"
    @click="onClickBigBtn"
  />
  <van-goods-action-big-btn
    primary
    text="立即购买"
    @click="onClickBigBtn"
  />
</van-goods-action>
```

```javascript
export default {
  methods: {
    onClickMiniBtn() {
      Toast('点击图标');
    },
    onClickBigBtn() {
      Toast('点击按钮');
    }
  }
}
```

#### 图标提示
通过`info`属性在图标右上角增加相应的提示

```html
<van-goods-action>
  <van-goods-action-mini-btn
    icon="chat-o"
    text="客服"
  />
  <van-goods-action-mini-btn
    info="5"
    icon="cart-o"
    text="购物车"
  />
  <van-goods-action-mini-btn
    icon="shop-o"
    text="店铺"
  />
  <van-goods-action-big-btn text="加入购物车" />
  <van-goods-action-big-btn
    primary
    text="立即购买"
  />
</van-goods-action>
```

### API

#### GoodsActionMiniBtn

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 按钮文字 | `String` | - | - |
| icon | 图标 | `String` | - | - |
| icon-class | 图标额外类名 | `any` | - | - |
| info | 图标右上角提示信息 | `String | Number` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | - |

#### GoodsActionBigBtn

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| text | 按钮文字 | `String` | - | - |
| primary | 是否为红色按钮 | `Boolean` | `false` | - |
| disabled | 是否禁用按钮 | `Boolean` | `false` | - | 1.3.10 |
| loading | 是否显示为加载状态 | `Boolean` | `false` | - | 1.3.10 |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | - |
