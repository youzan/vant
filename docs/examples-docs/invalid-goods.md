## InvalidGoods 不可用商品列表

<script>
const item = {
  sku: [{ v: '商品SKU1' }, { v: '商品SKU2' }],
  num: 2,
  sku_id: 123,
  title: "商品名称",
  price: 12200,
  unavailable_desc: '超出配送区域',
  img_url: 'https://img.yzcdn.cn/upload_files/2017/06/29/FnPSAKkEeh4FnDA09oIbmnlzWQrw.png',
};

export default {
   data() {
     return {
       goods: [item, item, item]
     }
   }
}
</script>

### 使用指南
``` javascript
import { InvalidGoods } from 'vant';

Vue.component(InvalidGoods.name, InvalidGoods);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<template>
  <van-invalid-goods :goods="goods" />
<tempalte/>

<script>
const item = {
  num: 2,
  sku_id: 123,
  price: 12200,
  title: "商品名称",
  img_url: 'https://img.yzcdn.cn/...',
  unavailable_desc: '超出配送区域',
  sku: [
    { v: '商品SKU1' },
    { v: '商品SKU2' }
  ]
};

export default {
   data() {
     return {
       goods: [item, item, item]
     }
   }
}
</script>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 必须      |
|-----------|-----------|-----------|-------------|-------------|
| goods | 商品数据 | `Array`  |   | 是 |
| title | 标题 | `String`  | `以下商品无法一起购买，点击查看原因` | 否 |
| actionsheetTitle | 弹出层标题 | `String`  | `以下商品无法一起下单` | 否 |

### 数据格式
#### data中的商品字段说明
| key       | 说明      | 类型       |
|-----------|-----------|-----------|
| num | 商品数量 |  `Number` |
| sku_id | 商品 id |  `Number` |
| price | 商品价格，以分为单位 |  `Number` |
| title | 商品标题 |  `String` |
| img_url | 商品图片 url |  `String` |
| unavailable_desc | 不可用原因 |  `String` |
| sku | 商品 sku |  `Array` |
