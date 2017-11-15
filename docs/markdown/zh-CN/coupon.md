## Coupon 优惠券选择器

### 使用指南
``` javascript
import { CouponCell, CouponList } from 'vant';

Vue.component(CouponCell.name, CouponCell);
Vue.component(CouponList.name, CouponList);
```

### 代码演示

#### 基础用法

```html
<!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosenCoupon="chosenCoupon"
  @click="showList = true"
/>

<!-- 优惠券列表 -->
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


### CouponCell API

| 参数 | 说明 | 类型 | 默认值 | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| title | 单元格标题 | `String` | `优惠` | - |
| chosenCoupon | 当前选中优惠券的索引 | `Number` | `-1` | - |
| coupons | 可用优惠券列表 | `Array` | `[]` | - |
| editable | 能否切换优惠券 | `Boolean` | `true` | - |

### CouponList API

| 参数 | 说明 | 类型 | 默认值 | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 是否展示优惠券列表 | `Boolean` | `false` | - |
| chosenCoupon | 当前选中优惠券的索引 | `Number` | `-1` | - |
| coupons | 可用优惠券列表 | `Array` | `[]` | - |
| disabledCoupons | 不可用优惠券列表 | `Array` | `[]` | - |
| exchangeButtonText | 兑换按钮文字 | `String` | `兑换` | - |
| exchangeButtonDisabled | 是否禁用兑换按钮 | `Boolean` | `false` | - |
| displayedCouponIndex | 滚动至特定优惠券位置 | `Number` | - | - |
| showCloseButton | 是否显示列表底部按钮 | `Boolean` | `true` | - |
| closeButtonText | 列表底部按钮文字 | `String` | 不使用优惠 | - |
| disabledListTitle | 不可用券列表标题 | `String` | 不可用优惠 | - |
| inputPlaceholder | 输入框文字提示 | `String` | 请输入优惠码 | - |
| showExchangeBar | 是否展示兑换栏 | `Boolean` | `true` | - |

### CouponList Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 优惠券切换回调 | index, 选中优惠券的索引 |
| exchange | 兑换优惠券回调 | code, 兑换码 |

### 数据格式
#### 优惠券字段说明
| key | 说明 | 类型 |
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
