# Coupon 优惠券选择器

### 引入

```js
import { createApp } from 'vue';
import { CouponCell, CouponList } from 'vant';

const app = createApp();
app.use(CouponCell);
app.use(CouponList);
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

| 参数          | 说明                 | 类型               | 默认值   |
| ------------- | -------------------- | ------------------ | -------- |
| title         | 单元格标题           | _string_           | `优惠券` |
| chosen-coupon | 当前选中优惠券的索引 | _number \| string_ | `-1`     |
| coupons       | 可用优惠券列表       | _Coupon[]_         | `[]`     |
| editable      | 能否切换优惠券       | _boolean_          | `true`   |
| border        | 是否显示内边框       | _boolean_          | `true`   |
| currency      | 货币符号             | _string_           | `¥`      | - |

### CouponList Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:code | 当前输入的兑换码 | _string_ | - |
| chosen-coupon | 当前选中优惠券的索引 | _number_ | `-1` |
| coupons | 可用优惠券列表 | _Coupon[]_ | `[]` |
| disabled-coupons | 不可用优惠券列表 | _Coupon[]_ | `[]` |
| enabled-title | 可用优惠券列表标题 | _string_ | `可使用优惠券` |
| disabled-title | 不可用优惠券列表标题 | _string_ | `不可使用优惠券` |
| exchange-button-text | 兑换按钮文字 | _string_ | `兑换` |
| exchange-button-loading | 是否显示兑换按钮加载动画 | _boolean_ | `false` |
| exchange-button-disabled | 是否禁用兑换按钮 | _boolean_ | `false` |
| exchange-min-length | 兑换码最小长度 | _number_ | `1` |
| displayed-coupon-index | 滚动至特定优惠券位置 | _number_ | - |
| show-close-button | 是否显示列表底部按钮 | _boolean_ | `true` |
| close-button-text | 列表底部按钮文字 | _string_ | `不使用优惠` |
| input-placeholder | 输入框文字提示 | _string_ | `请输入优惠码` |
| show-exchange-bar | 是否展示兑换栏 | _boolean_ | `true` |
| currency | 货币符号 | _string_ | `¥` |
| empty-image | 列表为空时的占位图 | _string_ | `https://img.yzcdn.cn/vant/coupon-empty.png` |
| show-count `v2.3.0` | 是否展示可用 / 不可用数量 | _boolean_ | `true` |

### CouponList Events

| 事件名   | 说明           | 回调参数                |
| -------- | -------------- | ----------------------- |
| change   | 优惠券切换回调 | index, 选中优惠券的索引 |
| exchange | 兑换优惠券回调 | code, 兑换码            |

### Coupon 数据结构

| 键名        | 说明                            | 类型     |
| ----------- | ------------------------------- | -------- |
| id          | 优惠券 id                       | _string_ |
| name        | 优惠券名称                      | _string_ |
| condition   | 满减条件                        | _string_ |
| startAt     | 卡有效开始时间 (时间戳, 单位秒) | _number_ |
| endAt       | 卡失效日期 (时间戳, 单位秒)     | _number_ |
| description | 描述信息，优惠券可用时展示      | _string_ |
| reason      | 不可用原因，优惠券不可用时展示  | _string_ |
| value       | 折扣券优惠金额，单位分          | _number_ |
| valueDesc   | 折扣券优惠金额文案              | _string_ |
| unitDesc    | 单位文案                        | _string_ |
