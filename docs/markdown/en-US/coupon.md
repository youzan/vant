<script>
import { Toast } from 'packages';

const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  origin_condition: 0,
  reason: '',
  value: 150,
  condition: '下单立减 1.50 元',
  name: '新手专用优惠券',
  start_at: 1489104000,
  end_at: 1514592000
};

const discountCoupon = {
  ...coupon,
  discount: 88,
  denominations: 0,
  origin_condition: 50,
  value: 12,
  condition: '下单即享 8.8 折',
};

const disabledCoupon = {
  ...coupon,
  avaliable: 0,
  reason: '未满足使用门槛'
};

const disabledDiscountCoupon = {
  ...discountCoupon,
  avaliable: 0,
  reason: '未满足使用门槛'
};

export default {
  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon, discountCoupon],
      disabledCoupons: [disabledCoupon, disabledDiscountCoupon]
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;      
      this.chosenCoupon = index;
    },
    onExchange(code) {
      Toast('兑换成功');
      this.coupons.push(coupon);
    }
  }
}
</script>

## Coupon

### Install
``` javascript
import { CouponCell, CouponList } from 'vant';

Vue.component(CouponCell.name, CouponCell);
Vue.component(CouponList.name, CouponList);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
></van-coupon-cell>

<!-- 优惠券列表 -->
<van-popup v-model="showList" position="bottom">
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  ></van-coupon-list>
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
  condition: '下单立减 1.50 元',
  name: '新手专用优惠券',
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
:::

### CouponCell API

| Attribute | Description | Type | Default | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| title | 单元格标题 | `String` | `优惠` | - |
| chosenCoupon | 当前选中优惠券的索引 | `Number` | `-1` | - |
| coupons | 可用优惠券列表 | `Array` | `[]` | - |
| editable | 能否切换优惠券 | `Boolean` | `true` | - |

### CouponList API

| Attribute | Description | Type | Default | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 是否展示优惠券列表 | `Boolean` | `false` | - |
| chosenCoupon | 当前选中优惠券的索引 | `Number` | `-1` | - |
| coupons | 可用优惠券列表 | `Array` | `[]` | - |
| disabledCoupons | 不可用优惠券列表 | `Array` | `[]` | - |
| exchangeButtonText | 兑换按钮文字 | `String` | `兑换` | - |
| exchangeButtonDisabled | 是否禁用兑换按钮 | `Boolean` | `false` | - |
| displayedCouponIndex | 滚动至特定优惠券位置 | `Number` | - | - |
| closeButtonText | 列表底部按钮文字 | `String` | 不使用优惠 | - |
| disabledListTitle | 不可用券列表标题 | `String` | 不可用优惠 | - |
| inputPlaceholder | 输入框文字提示 | `String` | 请输入优惠码 | - |

### CouponList Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| change | 优惠券切换回调 | index, 选中优惠券的索引 |
| exchange | 兑换优惠券回调 | code, 兑换码 |

### Data Structure
#### 优惠券字段说明
| key | Description | Type |
|-----------|-----------|-----------|
| id | 优惠券 id | `String` |
| name | 优惠券名称 | `String` |
| available | 是否可用, 1:可用,0:不可用 | `Number` |
| discount | 折扣（0为满减券）88=>8.8折 | `Number` |
| denominations | 面值（0为折扣券）单位分 | `Number` |
| origin_condition | 满减条件（0为无门槛，满XX元可用）单位分 | `Number` |
| start_at | 	卡有效开始时间 | `Number` |
| end_at | 卡失效日期 | `Number` |
| reason | 不可用原因 | `String` |
| value | 订单优惠金额，单位分 | `Number` |
| condition | 格式化输出 value | `String` |
