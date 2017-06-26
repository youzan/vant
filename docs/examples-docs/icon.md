<style>
@component-namespace demo {
  @b icon {
    .examples {
      max-height: none;
    }

    .van-col {
      text-align: center;
      height: 120px;
    }

    .van-icon {
      font-size: 45px;
      display: block;
      margin: 15px 0;
    }
  }
} 
</style>

## Icon 图标

### 使用指南

如果你已经按照快速上手中引入了整个，以下**组件注册**就可以忽略了，因为你已经全局注册了`vant`中的全部组件。

#### 全局注册

你可以在全局注册`Icon`组件，比如页面的主文件（`index.js`，`main.js`），这样页面任何地方都可以直接使用`Icon`组件了：

```js
import Vue from 'vue';
import { Icon } from 'vant';
import 'vant/lib/vant-css/icon.css';

Vue.component(Icon.name, Icon);
```

#### 局部注册

如果你只是想在某个组件中使用，你可以在对应组件中注册`Icon`组件，这样只能在你注册的组件中使用`Icon`：

```js
import { Icon } from 'vant';
import 'vant/lib/vant-css/icon.css';

export default {
  components: {
    'van-icon': Icon
  }
};
```

### 代码演示

#### 基础用法

设置`name`属性为对应的图标名称即可：

:::demo 所有Icon
```html
<van-icon name="qr-invalid" style="text-align: center"></van-icon>
```
:::

#### 所有Icons

以下目前有的所有图标及其名称：

:::demo 所有Icon
```html
<van-row>
  <van-col span="8">
    <van-icon name="qr-invalid"></van-icon>
    <span>qr-invalid</span>
  </van-col>
  <van-col span="8">
    <van-icon name="qr"></van-icon>
    <span>qr</span>
  </van-col>
  <van-col span="8">
    <van-icon name="exchange"></van-icon>
    <span>exchange</span>
  </van-col>
  <van-col span="8">
    <van-icon name="close"></van-icon>
    <span>close</span>
  </van-col>
  <van-col span="8">
    <van-icon name="location"></van-icon>
    <span>location</span>
  </van-col>
  <van-col span="8">
    <van-icon name="upgrade"></van-icon>
    <span>upgrade</span>
  </van-col>
  <van-col span="8">
    <van-icon name="check"></van-icon>
    <span>check</span>
  </van-col>
  <van-col span="8">
    <van-icon name="checked"></van-icon>
    <span>checked</span>
  </van-col>
  <van-col span="8">
    <van-icon name="like-o"></van-icon>
    <span>like-o</span>
  </van-col>
  <van-col span="8">
    <van-icon name="like" style="color: red;"></van-icon>
    <span>like</span>
  </van-col>
  <van-col span="8">
    <van-icon name="chat"></van-icon>
    <span>chat</span>
  </van-col>
  <van-col span="8">
    <van-icon name="shop"></van-icon>
    <span>shop</span>
  </van-col>
  <van-col span="8">
    <van-icon name="photograph"></van-icon>
    <span>photograph</span>
  </van-col>
  <van-col span="8">
    <van-icon name="add"></van-icon>
    <span>add</span>
  </van-col>
  <van-col span="8">
    <van-icon name="add2"></van-icon>
    <span>add2</span>
  </van-col>
  <van-col span="8">
    <van-icon name="photo"></van-icon>
    <span>photo</span>
  </van-col>
  <van-col span="8">
    <van-icon name="edit"></van-icon>
    <span>edit</span>
  </van-col>
  <van-col span="8">
    <van-icon name="passed"></van-icon>
    <span>passed</span>
  </van-col>
  <van-col span="8">
    <van-icon name="cart"></van-icon>
    <span>cart</span>
  </van-col>
  <van-col span="8">
    <van-icon name="arrow"></van-icon>
    <span>arrow</span>
  </van-col>
  <van-col span="8">
    <van-icon name="gift"></van-icon>
    <span>gift</span>
  </van-col>
  <van-col span="8">
    <van-icon name="search"></van-icon>
    <span>search</span>
  </van-col>
  <van-col span="8">
    <van-icon name="clear"></van-icon>
    <span>clear</span>
  </van-col>
  <van-col span="8">
    <van-icon name="success"></van-icon>
    <span>success</span>
  </van-col>
  <van-col span="8">
    <van-icon name="fail"></van-icon>
    <span>fail</span>
  </van-col>
  <van-col span="8">
    <van-icon name="contact"></van-icon>
    <span>contact</span>
  </van-col>
  <van-col span="8">
    <van-icon name="wechat"></van-icon>
    <span>wechat</span>
  </van-col>
  <van-col span="8">
    <van-icon name="alipay"></van-icon>
    <span>alipay</span>
  </van-col>
  <van-col span="8">
    <van-icon name="password-view"></van-icon>
    <span>password-view</span>
  </van-col>
  <van-col span="8">
    <van-icon name="wap-nav"></van-icon>
    <span>wap-nav</span>
  </van-col>
  <van-col span="8">
    <van-icon name="password-not-view"></van-icon>
    <span>password-not-view</span>
  </van-col>
  <van-col span="8">
    <van-icon name="wap-home"></van-icon>
    <span>wap-home</span>
  </van-col>
  <van-col span="8">
    <van-icon name="ecard-pay"></van-icon>
    <span>ecard-pay</span>
  </van-col>
  <van-col span="8">
    <van-icon name="balance-pay"></van-icon>
    <span>balance-pay</span>
  </van-col>
  <van-col span="8">
    <van-icon name="peer-pay"></van-icon>
    <span>peer-pay</span>
  </van-col>
  <van-col span="8">
    <van-icon name="credit-pay"></van-icon>
    <span>credit-pay</span>
  </van-col>
  <van-col span="8">
    <van-icon name="debit-pay"></van-icon>
    <span>debit-pay</span>
  </van-col>
  <van-col span="8">
    <van-icon name="other-pay"></van-icon>
    <span>other-pay</span>
  </van-col>
  <van-col span="8">
    <van-icon name="cart"></van-icon>
    <span>cart</span>
  </van-col>
  <van-col span="8">
    <van-icon name="browsing-history"></van-icon>
    <span>browsing-history</span>
  </van-col>
  <van-col span="8">
    <van-icon name="goods-collect"></van-icon>
    <span>goods-collect</span>
  </van-col>
  <van-col span="8">
    <van-icon name="shop-collect"></van-icon>
    <span>shop-collect</span>
  </van-col>
  <van-col span="8">
    <van-icon name="receive-gift"></van-icon>
    <span>receive-gift</span>
  </van-col>
  <van-col span="8">
    <van-icon name="send-gift"></van-icon>
    <span>send-gift</span>
  </van-col>
  <van-col span="8">
    <van-icon name="setting"></van-icon>
    <span>setting</span>
  </van-col>
  <van-col span="8">
    <van-icon name="points"></van-icon>
    <span>points</span>
  </van-col>
  <van-col span="8">
    <van-icon name="coupon"></van-icon>
    <span>coupon</span>
  </van-col>
  <van-col span="8">
    <van-icon name="free-postage"></van-icon>
    <span>free-postage</span>
  </van-col>
  <van-col span="8">
    <van-icon name="discount"></van-icon>
    <span>discount</span>
  </van-col>
  <van-col span="8">
    <van-icon name="birthday-privilege"></van-icon>
    <span>birthday-privilege</span>
  </van-col>
  <van-col span="8">
    <van-icon name="member-day-privilege"></van-icon>
    <span>member-day-privilege</span>
  </van-col>
  <van-col span="8">
    <van-icon name="balance-details"></van-icon>
    <span>balance-details</span>
  </van-col>
  <van-col span="8">
    <van-icon name="cash-back-record"></van-icon>
    <span>cash-back-record</span>
  </van-col>
  <van-col span="8">
    <van-icon name="points-mall"></van-icon>
    <span>points-mall</span>
  </van-col>
  <van-col span="8">
    <van-icon name="exchange-record"></van-icon>
    <span>exchange-record</span>
  </van-col>
  <van-col span="8">
    <van-icon name="pending-payment"></van-icon>
    <span>pending-payment</span>
  </van-col>
  <van-col span="8">
    <van-icon name="pending-orders"></van-icon>
    <span>pending-orders</span>
  </van-col>
  <van-col span="8">
    <van-icon name="pending-deliver"></van-icon>
    <span>pending-deliver</span>
  </van-col>
  <van-col span="8">
    <van-icon name="logistics"></van-icon>
    <span>logistics</span>
  </van-col>
  <van-col span="8">
    <van-icon name="pending-evaluate"></van-icon>
    <span>pending-evaluate</span>
  </van-col>
  <van-col span="8">
    <van-icon name="cash-on-deliver"></van-icon>
    <span>cash-on-deliver</span>
  </van-col>
  <van-col span="8">
    <van-icon name="gift-card-pay"></van-icon>
    <span>gift-card-pay</span>
  </van-col>
  <van-col span="8">
    <van-icon name="underway"></van-icon>
    <span>underway</span>
  </van-col>
  <van-col span="8">
    <van-icon name="point-gift"></van-icon>
    <span>point-gift</span>
  </van-col>
  <van-col span="8">
    <van-icon name="after-sale"></van-icon>
    <span>after-sale</span>
  </van-col>
</van-row>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| name | icon名称 | `string`  | `''` |   |
