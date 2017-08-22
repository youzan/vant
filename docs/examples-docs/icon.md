<style>
.demo-icon {
  font-size: 0;

  .examples {
    max-height: none;
  }

  .van-col {
    text-align: center;
    height: 120px;
    float: none;
    display: inline-block;
  }

  .van-icon {
    font-size: 45px;
    margin: 15px 0;
    display: block;
  }

  span {
    font-size: 14px;
  }
} 
</style>

<script>
import Vue from 'vue';
import { Icon } from 'packages';

Vue.component('van-icon-inner', Icon);
Vue.component('van-icon', {
  props: ['name'],

  render(h) {
    return <van-col span="8">
      <van-icon-inner name={this.name}></van-icon-inner>
      <span>{this.name}</span>
    </van-col>
  }
});

export default {};
</script>

## Icon 图标

### 使用指南
``` javascript
import { Icon } from 'vant';

Vue.component(Icon.name, Icon);
```

### 代码演示

#### 基础用法

设置`name`属性为对应的图标名称即可：

:::demo 基础用法
```html
<van-icon name="success"></van-icon>
```
:::

#### 图标列表

:::demo 所有Icon
```html
<van-icon name="qr-invalid"></van-icon>
<van-icon name="qr"></van-icon>
<van-icon name="exchange"></van-icon>
<van-icon name="close"></van-icon>
<van-icon name="location"></van-icon>
<van-icon name="upgrade"></van-icon>
<van-icon name="check"></van-icon>
<van-icon name="checked"></van-icon>
<van-icon name="like-o"></van-icon>
<van-icon name="like" style="color: red;"></van-icon>
<van-icon name="chat"></van-icon>
<van-icon name="shop"></van-icon>
<van-icon name="photograph"></van-icon>
<van-icon name="add"></van-icon>
<van-icon name="add2"></van-icon>
<van-icon name="photo"></van-icon>
<van-icon name="edit"></van-icon>
<van-icon name="passed"></van-icon>
<van-icon name="cart"></van-icon>
<van-icon name="arrow"></van-icon>
<van-icon name="gift"></van-icon>
<van-icon name="search"></van-icon>
<van-icon name="clear"></van-icon>
<van-icon name="success"></van-icon>
<van-icon name="fail"></van-icon>
<van-icon name="contact"></van-icon>
<van-icon name="wechat"></van-icon>
<van-icon name="alipay"></van-icon>
<van-icon name="password-view"></van-icon>
<van-icon name="wap-nav"></van-icon>
<van-icon name="password-not-view"></van-icon>
<van-icon name="wap-home"></van-icon>
<van-icon name="ecard-pay"></van-icon>
<van-icon name="balance-pay"></van-icon>
<van-icon name="peer-pay"></van-icon>
<van-icon name="credit-pay"></van-icon>
<van-icon name="debit-pay"></van-icon>
<van-icon name="other-pay"></van-icon>
<van-icon name="cart"></van-icon>
<van-icon name="browsing-history"></van-icon>
<van-icon name="goods-collect"></van-icon>
<van-icon name="shop-collect"></van-icon>
<van-icon name="receive-gift"></van-icon>
<van-icon name="send-gift"></van-icon>
<van-icon name="setting"></van-icon>
<van-icon name="points"></van-icon>
<van-icon name="coupon"></van-icon>
<van-icon name="free-postage"></van-icon>
<van-icon name="discount"></van-icon>
<van-icon name="birthday-privilege"></van-icon>
<van-icon name="member-day-privilege"></van-icon>
<van-icon name="balance-details"></van-icon>
<van-icon name="cash-back-record"></van-icon>
<van-icon name="points-mall"></van-icon>
<van-icon name="exchange-record"></van-icon>
<van-icon name="pending-payment"></van-icon>
<van-icon name="pending-orders"></van-icon>
<van-icon name="pending-deliver"></van-icon>
<van-icon name="logistics"></van-icon>
<van-icon name="pending-evaluate"></van-icon>
<van-icon name="cash-on-deliver"></van-icon>
<van-icon name="gift-card-pay"></van-icon>
<van-icon name="underway"></van-icon>
<van-icon name="point-gift"></van-icon>
<van-icon name="after-sale"></van-icon>
<van-icon name="edit-data"></van-icon>
<van-icon name="question"></van-icon>
<van-icon name="delete"></van-icon>
<van-icon name="records"></van-icon>
<van-icon name="description"></van-icon>
<van-icon name="card"></van-icon>
<van-icon name="gift-card"></van-icon>
<van-icon name="coupon"></van-icon>
<van-icon name="clock"></van-icon>
<van-icon name="gold-coin"></van-icon>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| name | icon名称 | `string`  | `''` |   |
