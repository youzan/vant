## Sku 商品购买组件

<script>
import data from '../../mock/sku';

const goods = data.goods_info;
goods.picture = goods.picture[0];

export default {
  data() {
    return {
      showBase: false,
      showCustomAction: false,
      sku: data.sku,
      goods: goods,
      goodsId: data.goods_id,
      quota: data.quota,
      quotaUsed: data.quota_used,
      disableStepperInput: true,
      resetStepperOnHide: true,
      initialSku: {
        s1: '30349',
        s2: '1193'
      }
    }
  },

  methods: {
    handleBuyClicked(data) {
      alert(JSON.stringify(data));
    },
    handleAddCartClicked(data) {
      alert(JSON.stringify(data));
    },
    handlePointClicked() {
      alert('积分兑换');
    }
  }
}
</script>

<style>
  .sku-container {
    padding: 0 15px;
  }
</style>

### 使用指南
```javascript
import { Sku } from 'vant';

Vue.component(Sku.name, Sku);
```

### 代码演示
#### 基础用法
:::demo 
```html
<template>
  <div class="sku-container">
    <van-sku
      v-model="showBase"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :hide-stock="sku.hide_stock"
      :quota="quota"
      :quota-used="quotaUsed"
      :reset-stepper-on-hide="resetStepperOnHide"
      :disable-stepper-input="disableStepperInput"
      @buy-clicked="handleBuyClicked"
      @add-cart="handleAddCartClicked"
    >
    </van-sku>
    <van-button type="primary" @click="showBase = true" block>基础用法</van-button>
  </d>
</template>
```
:::

#### 自定义sku slot区块
:::demo 
```html
<template>
  <div class="sku-container">
    <van-sku
      v-model="showCustomAction"
      stepper-title="我要买"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :hide-stock="sku.hide_stock"
      :show-add-cart-btn="true"
      :quota="quota"
      :quota-used="quotaUsed"
      :reset-stepper-on-hide="true"
      :initial-sku="initialSku"
      @buy-clicked="handleBuyClicked"
      @add-cart="handleAddCartClicked"
    >
      <!-- 隐藏sku messages -->
      <template slot="sku-messages"></template>
      <!-- 自定义sku actions -->
      <template slot="sku-actions" slot-scope="props">
        <div class="van-sku-actions">
          <button class="van-sku__add-cart-btn" @click="handlePointClicked">
            积分兑换
          </button>
          <!-- 直接触发sku内部事件，通过内部事件执行handleBuyClicked回调 -->
          <button class="van-sku__buy-btn" @click="props.skuEventBus.$emit('sku:buy')">
            买买买
          </button>
        </div>
      </template>
    </van-sku>
    <van-button type="primary" @click="showCustomAction = true" block>自定义sku actions</van-button>
  </d>
</template>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 必须 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 是否显示sku | Boolean | false |    是 |
| sku | 商品sku数据 | Object | - |    是 |
| goods | 商品信息 | Object | - |  是 |
| goodsId | 商品id | String/Number | - |  是 |
| hideStock | 是否显示商品剩余库存 | Boolean | false | 否 |
| showAddCartBtn | 是否显示加入购物车按钮 | Boolean | true |  否 |
| quota | 限购数(0表示不限购) | Number | 0 |  否 |
| quotaUsed | 已经购买过的数量 | Number | 0 |  否 |
| resetStepperOnHide | 窗口隐藏时重置选择的商品数量 | Boolean | false |  否 |
| disableStepperInput | 是否禁用sku中stepper的input框 | Boolean | false | 否 |
| stepperTitle | 数量选择组件左侧文案 | String | '购买数量' |  否 |
| add-cart | 点击添加购物车回调 | Function(skuData: Object) | - |  否 |
| buy-clicked | 点击购买回调 | Function(skuData: Object) | - |  否 |

### slots
sku组件默认划分好了若干区块，这些区块都定义成了slot，可以按需进行替换。区块顺序见下表：

| Name | 说明 | 
|-----------|-----------|
| sku-header | 商品信息展示区，包含商品图片、名称、价格等信息 |
| sku-group | 商品sku展示区 |
| extra-sku-group | 额外商品sku展示区，一般用不到 |
| sku-stepper | 商品数量选择区 |
| sku-messages | 商品留言区 |
| sku-actions | 操作按钮区 |

### 数据结构
#### sku对象结构
```javascript
"sku": {
    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
    "tree": [{ 
        "k": "颜色", // skuKeyName：规格类目名称 
        "v": [{
            "id": "30349", // skuValueId：规格值id 
            "name": "红色", // skuValueName：规格值名称 
            "imgUrl": "https:\/\/img.yzcdn.cn\/upload_files\/2017\/02\/21\/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
        }, {
            "id": "1215",
            "name": "蓝色",
            "imgUrl": "https:\/\/img.yzcdn.cn\/upload_files\/2017\/03\/16\/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg"
        }],
        "k_s": "s1" // skuKeyStr：sku组合列表（下方list）中当前类目对应的key值，value值会是从属于当前类目的一个规格值id 
    }, ...],
    // 所有sku的组合列表，比如红色、M码为一个sku组合，红色、S码为另一个组合
    "list": [{
        "id": 2259, // skuId，下单时后端需要
        "price": 100, // 价格（单位分）
        "s1": "1215", // 规格类目k_s为s1的对应规格值id
        "s2": "1193",  // 规格类目k_s为s2的对应规格值id
        "s3": "0", // 最多包含3个规格值，为0表示不存在该规格
        "stock_num": 110 // 当前sku组合对应的库存
    }, ...],
    "price": "1.00", // 默认价格（单位元）后端单位暂时有点不统一
    "stock_num": 227, // 商品总库存
    "collection_id": 2261, // 无规格商品skuId取collection_id，否则取所选sku组合对应的id
    "none_sku": false, // 是否无规格商品
    "messages": [{ // 商品留言
        "datetime": "0", // 留言类型为time时，是否含日期。“1”表示包含
        "multiple": "0", // 留言类型为text时，是否多行文本。“1”表示多行
        "name": "留言", // 留言名称
        "type": "text", // 留言类型，可选id_no（身份证）, text, tel, date, time, email
        "required": "1" // 是否必填 “1”表示必填
    }, ...],
    "hide_stock": false // 是否隐藏剩余库存
},
```

#### goods对象结构
```javascript
"goods": {
    // 商品标题
    "title": "测试商品", 
    // 默认商品sku缩略图
    "picture": "https:\/\/img.yzcdn.cn\/upload_files\/2017\/03\/16\/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2\/2\/w\/100\/h\/100\/q\/75\/format\/webp"
},
```

#### 添加购物车和点击购买回调函数接收的skuData对象结构
```javascript
skuData: {
  // 商品id
  goodsId:"946755",
  // 留言信息
  messages: {
    message_0:"12",
    message_1:"",
    ... // 有几个留言就有几条
  },
  // 另一种格式的留言，key不同
  cartMessages: {
    '留言1': 'xxxx',
    ... // key是message的name
  },
  // 选择的商品数量
  selectedNum:1,
  // 选择的sku组合
  selectedSkuComb: {
    id:2257,
    price:100,
    s1:"30349",
    s2:"1193",
    s3:"0",
    stock_num:111
  }
}
```
