# Coupon

### Install

```js
import { createApp } from 'vue';
import { CouponCell, CouponList } from 'vant';

const app = createApp();
app.use(CouponCell);
app.use(CouponList);
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
  unitDesc: '元',
};

export default {
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
};
```

## API

### CouponCell Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Cell title | _string_ | `Coupon` |
| chosen-coupon | Index of chosen coupon | _number \| string_ | `-1` |
| coupons | Coupon list | _Coupon[]_ | `[]` |
| editable | Cell editable | _boolean_ | `true` |
| border | Whether to show innner border | _boolean_ | `true` |
| currency | Currency symbol | _string_ | `¥` |

### CouponList Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current exchange code | _string_ | - |
| chosen-coupon | Index of chosen coupon | _number_ | `-1` |
| coupons | Coupon list | _Coupon[]_ | `[]` |
| disabled-coupons | Disabled coupon list | _Coupon[]_ | `[]` |
| enabled-title | Title of coupon list | _string_ | `Available` | - |
| disabled-title | Title of disabled coupon list | _string_ | `Unavailable` | - |
| exchange-button-text | Exchange button text | _string_ | `Exchange` |
| exchange-button-loading | Whether to show loading in exchange button | _boolean_ | `false` |
| exchange-button-disabled | Whether to disable exchange button | _boolean_ | `false` |
| exchange-min-length | Min length to enable exchange button | _number_ | `1` |
| displayed-coupon-index | Index of displayed coupon | _number_ | - |
| close-button-text | Close button text | _string_ | `Close` |
| input-placeholder | Input placeholder | _string_ | `Coupon code` |
| currency | Currency symbol | _string_ | `¥` |
| empty-image | Placeholder image when list is empty | _string_ | `https://img.yzcdn.cn/vant/coupon-empty.png` |
| show-count `v2.3.0` | Whether to show coupon count in tab title | _boolean_ | `true` |

### CouponList Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when change chosen coupon | index: index of chosen coupon |
| exchange | Triggered when exchange coupon | code: exchange code |

### Data Structure of Coupon

| Key         | Description                         | Type     |
| ----------- | ----------------------------------- | -------- |
| id          | Id                                  | _string_ |
| name        | Name                                | _string_ |
| condition   | Condition                           | _string_ |
| startAt     | Start time (Timestmap, unit second) | _number_ |
| endAt       | End time (Timestmap, unit second)   | _number_ |
| description | Description                         | _string_ |
| reason      | Unavailable reason                  | _string_ |
| value       | Value                               | _number_ |
| valueDesc   | Value Text                          | _string_ |
| unitDesc    | Unit Text                           | _string_ |
