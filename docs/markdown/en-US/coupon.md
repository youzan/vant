## Coupon

### Install
``` javascript
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell);
Vue.use(CouponList);
```

### Usage

#### Basic Usage

```html
<!-- Coupon Cell -->
<van-coupon-cell
  :coupons="coupons"
  :chosenCoupon="chosenCoupon"
  @click="showList = true"
/>

<!-- Coupon List -->
<van-popup v-model="showList" position="bottom">
  <van-coupon-list
    :coupons="coupons"
    :chosenCoupon="chosenCoupon"
    :disabledCoupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
```

```javascript
const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  origin_condition: 0,
  reason: '',
  value: 150,
  name: 'Coupon name',
  start_at: 1489104000,
  end_at: 1514592000
};

export default {
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
}
```

### CouponCell API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Cell title | `String` | `Coupon` | - |
| chosenCoupon | Index of chosen coupon | `Number` | `-1` | - |
| coupons | Coupon list | `Array` | `[]` | - |
| editable | Cell editable | `Boolean` | `true` | - |

### CouponList API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| chosenCoupon | Index of chosen coupon | `Number` | `-1` | - |
| coupons | Coupon list | `Array` | `[]` | - |
| disabledCoupons | Disabled voupon list | `Array` | `[]` | - |
| exchangeButtonText | Exchange button text | `String` | `Exchange` | - |
| exchangeButtonDisabled | Whether to disable exchange button | `Boolean` | `false` | - |
| displayedCouponIndex | Index of displayed coupon | `Number` | - | - |
| closeButtonText | Close button text | `String` | `Close` | - |
| disabledListTitle | Disabled list title | `String` | `Unavailable` | - |
| inputPlaceholder | Input placeholder | `String` | `Coupon code` | - |

### CouponList Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| change | Triggered when change chosen coupon | index: index of chosen coupon |
| exchange | Triggered when exchange coupon | code: exchange code |

### Coupon Item Data Structure

| key | Description | Type |
|-----------|-----------|-----------|
| id | Id | `String` |
| name | Name | `String` |
| discount | Discount | `Number` |
| denominations | Denominations | `Number` |
| origin_condition | Condition | `Number` |
| start_at | Start time | `Number` |
| end_at | End time | `Number` |
| reason | Unavailable reason | `String` |
| value | Value | `Number` |

