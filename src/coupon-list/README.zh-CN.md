# Coupon 优惠券选择器

### 引入

```js
import Vue from 'vue';
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell);
Vue.use(CouponList);
```

## 代码演示

### 基础用法

```html
<!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>
<!-- 优惠券列表 -->
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

## API

### CouponCell Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 单元格标题 | *string* | `优惠券` |
| chosen-coupon | 当前选中优惠券的索引 | *number \| string* | `-1` |
| coupons | 可用优惠券列表 | *Coupon[]* | `[]` |
| editable | 能否切换优惠券 | *boolean* | `true` |
| border | 是否显示内边框 | *boolean* | `true` |
| currency | 货币符号 |  *string* | `¥` | - |

### CouponList Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前输入的兑换码 | *string* | - |
| chosen-coupon | 当前选中优惠券的索引 | *number* | `-1` |
| coupons | 可用优惠券列表 | *Coupon[]* | `[]` |
| disabled-coupons | 不可用优惠券列表 | *Coupon[]* | `[]` |
| enabled-title | 可用优惠券列表标题 | *string* | `可使用优惠券` |
| disabled-title | 不可用优惠券列表标题 | *string* | `不可使用优惠券` |
| exchange-button-text | 兑换按钮文字 | *string* | `兑换` |
| exchange-button-loading | 是否显示兑换按钮加载动画 | *boolean* | `false` |
| exchange-button-disabled | 是否禁用兑换按钮 | *boolean* | `false` |
| exchange-min-length | 兑换码最小长度 | *number* | `1` |
| displayed-coupon-index | 滚动至特定优惠券位置 | *number* | - |
| show-close-button | 是否显示列表底部按钮 | *boolean* | `true` |
| close-button-text | 列表底部按钮文字 | *string* | `不使用优惠` |
| input-placeholder | 输入框文字提示 | *string* | `请输入优惠码` |
| show-exchange-bar | 是否展示兑换栏 | *boolean* | `true` |
| currency | 货币符号 |  *string* | `¥` |
| empty-image `v2.1.0` | 列表为空时的占位图 | *string* | `https://img.yzcdn.cn/vant/coupon-empty.png` |
| show-count `v2.3.0` | 是否展示可用 / 不可用数量 | *boolean* | `true` |

### CouponList Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 优惠券切换回调 | index, 选中优惠券的索引 |
| exchange | 兑换优惠券回调 | code, 兑换码 |

### Coupon 数据结构

| 键名 | 说明 | 类型 |
|------|------|------|
| id | 优惠券 id | *string* |
| name | 优惠券名称 | *string* |
| condition | 满减条件 | *string* |
| startAt | 卡有效开始时间 (时间戳, 单位秒) | *number* |
| endAt | 卡失效日期 (时间戳, 单位秒) | *number* |
| description | 描述信息，优惠券可用时展示 | *string* |
| reason | 不可用原因，优惠券不可用时展示 | *string* |
| value | 折扣券优惠金额，单位分 | *number* |
| valueDesc | 折扣券优惠金额文案 | *string* |
| unitDesc | 单位文案 | *string* |
