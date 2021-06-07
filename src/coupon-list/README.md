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

| Attribute     | Description                  | Type               | Default  |
| ------------- | ---------------------------- | ------------------ | -------- |
| title         | Cell title                   | _string_           | `Coupon` |
| chosen-coupon | Index of chosen coupon       | _number \| string_ | `-1`     |
| coupons       | Coupon list                  | _Coupon[]_         | `[]`     |
| editable      | Cell editable                | _boolean_          | `true`   |
| border        | Whether to show inner border | _boolean_          | `true`   |
| currency      | Currency symbol              | _string_           | `¥`      |

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
| empty-image | Placeholder image when list is empty | _string_ | `https://img01.yzcdn.cn/vant/coupon-empty.png` |
| show-count | Whether to show coupon count in tab title | _boolean_ | `true` |

### CouponList Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when chosen coupon changed | index: index of chosen coupon |
| exchange | Emitted when exchanging coupon | code: exchange code |

### Data Structure of Coupon

| Key               | Description                              | Type     |
| ----------------- | ---------------------------------------- | -------- |
| id                | Id                                       | _string_ |
| name              | Name                                     | _string_ |
| condition         | Condition                                | _string_ |
| startAt           | Start time (Timestamp, unit millisecond) | _number_ |
| endAt             | End time (Timestamp, unit millisecond)   | _number_ |
| description       | Description                              | _string_ |
| reason            | Unavailable reason                       | _string_ |
| value             | Value                                    | _number_ |
| valueDesc         | Value Text                               | _string_ |
| unitDesc          | Unit Text                                | _string_ |
| customValidPeriod | custom valid period                      | _string_ |

### CouponList Slots

| Name                            | Description                     |
| ------------------------------- | ------------------------------- |
| list-footer `v2.12.21`          | Coupon list bottom              |
| disabled-list-footer `v2.12.21` | Unavailable coupons list bottom |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @coupon-margin | `0 @padding-sm @padding-sm` | - |
| @coupon-content-height | `84px` | - |
| @coupon-content-padding | `14px 0` | - |
| @coupon-background-color | `@white` | - |
| @coupon-active-background-color | `@active-color` | - |
| @coupon-border-radius | `@border-radius-lg` | - |
| @coupon-box-shadow | `0 0 4px rgba(0, 0, 0, 0.1)` | - |
| @coupon-head-width | `96px` | - |
| @coupon-amount-color | `@red` | - |
| @coupon-amount-font-size | `30px` | - |
| @coupon-currency-font-size | `40%` | - |
| @coupon-name-font-size | `@font-size-md` | - |
| @coupon-disabled-text-color | `@gray-6` | - |
| @coupon-description-padding | `@padding-xs @padding-md` | - |
| @coupon-description-border-color | `@border-color` | - |
| @coupon-list-background-color | `@background-color` | - |
| @coupon-list-field-padding | `5px 0 5px @padding-md` | - |
| @coupon-list-exchange-button-height | `32px` | - |
| @coupon-list-close-button-height | `40px` | - |
| @coupon-list-empty-image-size | `200px` | - |
| @coupon-list-empty-tip-color | `@gray-6` | - |
| @coupon-list-empty-tip-font-size | `@font-size-md` | - |
| @coupon-list-empty-tip-line-height | `@line-height-md` | - |
| @coupon-cell-selected-text-color | `@text-color` | - |
