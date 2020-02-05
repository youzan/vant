# Coupon

### Install

```js
import Vue from 'vue';
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell);
Vue.use(CouponList);
```

## Usage

### Basic Usage

```html
<!-- Coupon Cell -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>
<!-- Coupon List -->
<van-popup
  v-model="showList"
  round
  position="bottom"
  style="height: 90%; padding-top: 4px;"
>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
```

```js
const coupon = {
  available: 1,
  originCondition: 0,
  reason: '',
  value: 150,
  name: 'Coupon name',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
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

## API

### CouponCell Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Cell title | *string* | `Coupon` |
| chosen-coupon | Index of chosen coupon | *number \| string* | `-1` |
| coupons | Coupon list | *Coupon[]* | `[]` |
| editable | Cell editable | *boolean* | `true` |
| border | Whether to show innner border | *boolean* | `true` |
| currency | Currency symbol |  *string* | `¥` |

### CouponList Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current exchange code | *string* | - |
| chosen-coupon | Index of chosen coupon | *number* | `-1` |
| coupons | Coupon list | *Coupon[]* | `[]` |
| disabled-coupons | Disabled coupon list | *Coupon[]* | `[]` |
| enabled-title | Title of coupon list | *string* | `Available` | - |
| disabled-title | Title of disabled coupon list | *string* | `Unavailable` | - |
| exchange-button-text | Exchange button text | *string* | `Exchange` |
| exchange-button-loading | Whether to show loading in exchange button | *boolean* | `false` |
| exchange-button-disabled | Whether to disable exchange button | *boolean* | `false` |
| exchange-min-length | Min length to enable exchange button | *number* | `1` |
| displayed-coupon-index | Index of displayed coupon | *number* | - |
| close-button-text | Close button text | *string* | `Close` |
| input-placeholder | Input placeholder | *string* | `Coupon code` |
| currency | Currency symbol |  *string* | `¥` |
| empty-image | Placeholder image when list is empty | *string* | `https://img.yzcdn.cn/vant/coupon-empty.png` |
| show-count `v2.3.0` | Whether to show coupon count in tab title | *boolean* | `true` |

### CouponList Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when change chosen coupon | index: index of chosen coupon |
| exchange | Triggered when exchange coupon | code: exchange code |

### Data Structure of Coupon

| Key | Description | Type |
|------|------|------|
| id | Id | *string* |
| name | Name | *string* |
| condition | Condition | *string* |
| startAt | Start time (Timestmap, unit second) | *number* |
| endAt | End time (Timestmap, unit second) | *number* |
| description | Description | *string* |
| reason | Unavailable reason | *string* |
| value | Value | *number* |
| valueDesc | Value Text | *string* |
| unitDesc | Unit Text | *string* |
