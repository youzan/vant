<script>
import Vue from 'vue';

const icons = [
  'close',
  'location',
  'clock',
  'gold-coin',
  'chat',
  'exchange',
  'upgrade',
  'edit',
  'contact',
  'passed',
  'points',
  'delete',
  'records',
  'logistics',
  'check',
  'checked',
  'gift',
  'like-o',
  'like',
  'qr',
  'qr-invalid',
  'shop',
  'photograph',
  'add',
  'add2',
  'photo',
  'cart',
  'arrow',
  'search',
  'clear',
  'success',
  'fail',
  'wechat',
  'alipay',
  'password-view',
  'wap-nav',
  'password-not-view',
  'wap-home',
  'ecard-pay',
  'balance-pay',
  'peer-pay',
  'credit-pay',
  'debit-pay',
  'other-pay',
  'shopping-cart',
  'browsing-history',
  'goods-collect',
  'shop-collect',
  'receive-gift',
  'send-gift',
  'setting',
  'coupon',
  'free-postage',
  'discount',
  'birthday-privilege',
  'member-day-privilege',
  'balance-details',
  'cash-back-record',
  'points-mall',
  'exchange-record',
  'pending-payment',
  'pending-orders',
  'pending-deliver',
  'pending-evaluate',
  'cash-on-deliver',
  'gift-card-pay',
  'underway',
  'point-gift',
  'after-sale',
  'edit-data',
  'question',
  'description',
  'card',
  'gift-card',
  'coupon',
  'completed',
  'value-card',
  'certificate',
  'tosend',
  'sign',
  'home',
  'phone'
];

const IconListConstructor = Vue.extend({
  render(h) {
    return (
      <div>
        {icons.map(icon => (
          <van-col span="8">
            <van-icon name={icon}></van-icon>
            <span>{icon}</span>
          </van-col>
        ))}
      </div>
    )
  }
});

export default {
  mounted() {
    const IconList = new IconListConstructor({
      el: document.createElement('div')  
    });
    const block = document.querySelector('.zan-doc-demo-block');
    if (block) {
      block.appendChild(IconList.$el);
    }
  }
};
</script>

## Icon

### Install
``` javascript
import { Icon } from 'vant';

Vue.component(Icon.name, Icon);
```

### Usage

#### Basic Usage
View all usable icons on the right.

:::demo Icon List
```html
<van-icon name="success" />
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| name | Icon name | `String` | `''` | - |
