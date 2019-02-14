## Coupon 优惠券选择器

### 使用指南
``` javascript
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell).use(CouponList);
```

### 代码演示

#### 基础用法

```html
<!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>

<!-- 优惠券列表 -->
<van-popup v-model="showList" position="bottom">
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
```

```javascript
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
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


### CouponCell API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 单元格标题 | `String` | `优惠券` | - |
| chosen-coupon | 当前选中优惠券的索引 | `Number` | `-1` | - |
| coupons | 可用优惠券列表 | `Array` | `[]` | - |
| editable | 能否切换优惠券 | `Boolean` | `true` | - |
| border | 是否显示内边框 | `Boolean` | `true` | 1.3.10 |
| currency | 货币符号 |  `String` | `¥` | - | 1.5.0 |

### CouponList API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前输入的兑换码 | `String` | - | - |
| chosen-coupon | 当前选中优惠券的索引 | `Number` | `-1` | - |
| coupons | 可用优惠券列表 | `Array` | `[]` | - |
| disabled-coupons | 不可用优惠券列表 | `Array` | `[]` | - |
| exchange-button-text | 兑换按钮文字 | `String` | `兑换` | - |
| exchange-button-loading | 是否显示兑换按钮加载动画 | `Boolean` | `false` | - |
| exchange-button-disabled | 是否禁用兑换按钮 | `Boolean` | `false` | - |
| exchange-min-length | 兑换码最小长度 | `Number` | `1` | - |
| displayed-coupon-index | 滚动至特定优惠券位置 | `Number` | - | - |
| show-close-button | 是否显示列表底部按钮 | `Boolean` | `true` | - |
| close-button-text | 列表底部按钮文字 | `String` | `不使用优惠` | - |
| input-placeholder | 输入框文字提示 | `String` | `请输入优惠码` | - |
| show-exchange-bar | 是否展示兑换栏 | `Boolean` | `true` | - |
| currency | 货币符号 |  `String` | `¥` | - | 1.5.0 |

### CouponList Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 优惠券切换回调 | index, 选中优惠券的索引 |
| exchange | 兑换优惠券回调 | code, 兑换码 |

### 数据格式

#### 优惠券字段说明

| key | 说明 | 类型 |
|------|------|------|
| id | 优惠券 id | `String` |
| name | 优惠券名称 | `String` |
| condition | 满减条件 | `String` |
| startAt | 卡有效开始时间 (时间戳, 单位秒) | `Number` |
| endAt | 卡失效日期 (时间戳, 单位秒) | `Number` |
| description | 描述信息，优惠券可用时展示 | `String` |
| reason | 不可用原因，优惠券不可用时展示 | `String` |
| value | 折扣券优惠金额，单位分 | `Number` |
| valueDesc | 折扣券优惠金额文案 | `String` |
| unitDesc | 单位文案 | `String` |
