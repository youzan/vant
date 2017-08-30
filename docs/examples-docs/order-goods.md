## OrderGoods 下单页商品列表

<script>

const item1 = {
  img_url: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
  pay_price: 1050,
  title: '商品 A',
  num: '1'
};

const item2 = {
  points_price: 200,
  pay_price: 50,
  img_url: '//img.yzcdn.cn/upload_files/2017/07/02/e89d56cd92ad8ce3b9d8e1babc3758b6.jpg',
  title: '商品 B',
  num: '15',
  sku: [{ v: '商品SKU1' }, { v: '商品SKU2' }]
}

const item3 = {
  pay_price: 50,
  img_url: '//img.yzcdn.cn/upload_files/2017/07/02/e89d56cd92ad8ce3b9d8e1babc3758b6.jpg',
  title: '商品 C',
  num: '15',
  is_presale: true,
  delivery_time: '三天后发货',
  show_delivery_time: true,
  is_presale: true,
  is_present: true,
  message: {
    '留言1': '留言1内容',
    '留言2': 'https://img.yzcdn.cn/upload_files/2017/07/02/e89d56cd92ad8ce3b9d8e1babc3758b6.jpg'
  }
};

export default {
  data() {
    return {
      itemList1: [item1],
      itemList2: [item2],
      itemList3: [item3],
      itemListMulti: [item1, item2, item3],
      emptyItemList: [],
      message1: '',
      message2: '',
      message3: '',
      message4: ''
    }
  }
}
</script>

### 使用指南
``` javascript
import { OrderGoods } from 'vant';

Vue.component(OrderGoods.name, OrderGoods);
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<template>
  <van-order-goods
    v-model="message1"
    shop-name="起码运动馆"
    :price="1050"
    :item-list="itemList1"
  />
</template>

<script>
export default {
  data() {
    return {
      message1: '',
      itemList1: [{
        img_url: '//img.yzcdn.cn/...',
        pay_price: 1050,
        title: '商品 A',
        num: '1'
      }]
    }
  }
}
</script>
```
:::

#### 积分商品

:::demo 积分商品
```html
<template>
  <van-order-goods
    v-model="message2"
    shop-name="起码运动馆"
    :item-list="itemList2"
    :price="50"
    :points="200"
  />
</template>

<script>
export default {
  data() {
    return {
      message2: '',
      itemList2: [{
        points_price: 200,
        pay_price: 50,
        img_url: '//img.yzcdn.cn/...',
        title: '商品 B',
        num: '15',
        sku: [
          { v: '商品SKU1' },
          { v: '商品SKU2' }
        ]
      }]
    }
  }
}
</script>
```
:::

#### 预售商品

:::demo 预售商品
```html
<template>
  <van-order-goods
    v-model="message3"
    shop-name="起码运动馆"
    :price="1050"
    :item-list="itemList3"
  />
</template>

<script>
export default {
  data() {
    return {
      message3: '',
      itemList3: [{
        pay_price: 50,
        img_url: '//img.yzcdn.cn/...',
        title: '商品 C',
        num: '15',
        delivery_time: '三天后发货',
        show_delivery_time: true,
        is_presale: true,
        is_present: true
      }]
    }
  }
}
</script>
```
:::

#### 商品为空

:::demo 商品为空
```html
<van-order-goods shop-name="起码运动馆" :item-list="[]" />
```
:::

#### 多个商品

:::demo 多个商品
```html
<van-order-goods
  v-model="message4"
  shop-name="起码运动馆"
  :item-list="itemListMulti"
  :price="1050"
  :message-editable="false"
/>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| shop-name | 店铺名称 |  `String` |  |
| shop-link | 店铺链接 |  `String` |  |
| header-icon | 店铺名称左侧的图标类型 |  `String` | `shop` |
| header-badge | 店铺名称右侧的徽章链接 |  `String` | |
| item-list | 商品列表 |  `Array` | `[]` |
| empty-icon | 商品列表为空时的图标 |  `String` | |
| empty-message | 商品列表为空时的提示文案 |  `String` | `当前没有可购买的商品，请重新选择` |
| empty-button-text | 商品列表为空时的按钮文案 |  `String` | `返回重新选择` |
| v-model | 买家留言 |  `String` | `''` |
| show-total-price | 是否显示价格栏 |  `Boolean` | `true` |
| show-message | 是否显示留言栏 |  `Boolean` | `true` |
| message-editable | 留言是否可以编辑 |  `Boolean` | `true` |
| price | 合计金额（单位分） |  `Number` |  |
| points | 合计积分 |  `Number` |  |

### 数据格式
#### itemList 中的配送方式字段说明
| key       | 说明      | 类型       |
|-----------|-----------|-----------|
| title | 商品名称 | `String` |
| img_url | 图片地址 | `String` |
| delivery_time | 发货时间 | `String` |
| num | 商品数量 | `Number` |
| points_price | 积分价格 | `Number` |
| pay_price（单位分） | 金额 | `Number` |
| sku | 商品 sku | `Array` |
| message | 商品留言 | `Array` |
| is_presale | 是否为预售 | `Boolean` |
| is_present | 是否为赠品 | `Boolean` |
| is_period_buy | 是否为周期购 | `Boolean` |
| show_delivery_time | 是否显示发货时间 | `Boolean` |

### Slot
| name       | 描述      |
|-----------|-----------|
| 默认 | 在商品列表和留言之间插入内容 |
| top | 在标题和商品列表之间插入内容 |
| bottom | 在合计价格下方插入内容 |
