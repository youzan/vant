## GoodsAction 商品页行动点

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
  <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
  <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
  <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
  <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
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
  <van-goods-action-mini-btn icon="chat" text="客服" />
  <van-goods-action-mini-btn icon="cart" text="购物车" info="5" />
  <van-goods-action-mini-btn icon="shop" text="店铺" />
  <van-goods-action-big-btn text="加入购物车" />
  <van-goods-action-big-btn text="立即购买" primary />
</van-goods-action>
```

### API

#### GoodsActionMiniBtn

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| text | 按钮文字 | `String` | - |
| icon | 图标 | `String` | - |
| icon-class | 图标额外类名 | `String` | `''` |
| info | 图标右上角提示信息 | `String | Number` | - |
| url | 跳转链接 | `String` | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - |
| replace | 跳转时是否替换当前 history | `String` | `false` |


#### GoodsActionBigBtn

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| text | 按钮文字 | `String` | - |
| primary | 是否主行动按钮，主行动按钮默认为红色 | `Boolean` | `false` |
| url | 跳转链接 | `String` | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - |
| replace | 跳转时是否替换当前 history | `String` | `false` |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.1.4 | bugfix | 修复 info 长度超过三位数时显示错误 |
