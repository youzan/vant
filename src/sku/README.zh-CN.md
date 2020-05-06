# Sku 商品规格

### 引入

```js
import Vue from 'vue';
import { Sku } from 'vant';

Vue.use(Sku);
```

## 代码演示

### 基础用法

```html
<van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :quota="quota"
  :quota-used="quotaUsed"
  :hide-stock="sku.hide_stock"
  :message-config="messageConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
```

```js
export default {
  data() {
    return {
      show: false,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },
    };
  },
};
```

### 自定义步进器

```html
<van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :quota="quota"
  :quota-used="quotaUsed"
  :hide-stock="sku.hide_stock"
  :custom-stepper-config="customStepperConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
```

### 高级用法

```html
<van-sku
  v-model="show"
  stepper-title="我要买"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :quota="quota"
  :quota-used="quotaUsed"
  :hide-stock="sku.hide_stock"
  show-add-cart-btn
  reset-stepper-on-hide
  :initial-sku="initialSku"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
>
  <!-- 自定义 sku-header-price -->
  <template #sku-header-price="props">
    <div class="van-sku__goods-price">
      <span class="van-sku__price-symbol">￥</span
      ><span class="van-sku__price-num">{{ props.price }}</span>
    </div>
  </template>

  <!-- 自定义 sku actions -->
  <template #sku-actions="props">
    <div class="van-sku-actions">
      <van-button square size="large" type="warning" @click="onPointClicked">
        积分兑换
      </van-button>
      <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
      <van-button
        square
        size="large"
        type="danger"
        @click="props.skuEventBus.$emit('sku:buy')"
      >
        买买买
      </van-button>
    </div>
  </template>
</van-sku>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否显示 sku | _boolean_ | `false` |
| sku | 商品 sku 数据 | _object_ | - |
| goods | 商品信息 | _object_ | - |
| goods-id | 商品 id | _number \| string_ | - |
| price-tag | 显示在价格后面的标签 | _string_ | - |
| hide-stock | 是否显示商品剩余库存 | _boolean_ | `false` |
| hide-quota-text | 是否显示限购提示 | _boolean_ | `false` |
| hide-selected-text | 是否隐藏已选提示 | _boolean_ | `false` |
| stock-threshold | 库存阈值。低于这个值会把库存数高亮显示 | _boolean_ | `50` |
| show-add-cart-btn | 是否显示加入购物车按钮 | _boolean_ | `true` |
| buy-text | 购买按钮文字 | _string_ | `立即购买` |
| add-cart-text | 加入购物车按钮文字 | _string_ | `加入购物车` |
| quota | 限购数，0 表示不限购 | _number_ | `0` |
| quota-used | 已经购买过的数量 | _number_ | `0` |
| reset-stepper-on-hide | 隐藏时重置选择的商品数量 | _boolean_ | `false` |
| reset-selected-sku-on-hide | 隐藏时重置已选择的 sku | _boolean_ | `false` |
| disable-stepper-input | 是否禁用步进器输入 | _boolean_ | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| stepper-title | 数量选择组件左侧文案 | _string_ | `购买数量` |
| custom-stepper-config | 步进器相关自定义配置 | _object_ | `{}` |
| message-config | 留言相关配置 | _object_ | `{}` |
| get-container | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| () => Element_ | - |
| initial-sku | 默认选中的 sku，具体参考高级用法 | _object_ | `{}` |
| show-soldout-sku | 是否展示售罄的 sku，默认展示并置灰 | _boolean_ | `true` |
| safe-area-inset-bottom `v2.2.1` | 是否开启[底部安全区适配](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| start-sale-num `v2.3.0` | 起售数量 | _number_ | `1` |
| properties `v2.4.2` | 商品属性 | _array_ | - |
| preview-on-click-image `v2.5.2` | 是否在点击商品图片时自动预览 | _boolean_ | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| add-cart | 点击添加购物车回调 | skuData: object |
| buy-clicked | 点击购买回调 | skuData: object |
| stepper-change | 购买数量变化时触发 | value: number |
| sku-selected | 切换规格类目时触发 | { skuValue, selectedSku, selectedSkuComb } |
| sku-prop-selected | 切换商品属性时触发 | { propValue, selectedProp, selectedSkuComb } |
| open-preview | 打开商品图片预览时触发 | data: object |
| close-preview | 关闭商品图片预览时触发 | data: object |
| sku-reset `v2.8.1` | 规格和属性被重置时触发 | { selectedSku, selectedProp, selectedSkuComb } |

### 方法

通过 ref 可以获取到 Sku 实例并调用实例方法，详见[组件实例方法](#/zh-CN/quickstart#zu-jian-shi-li-fang-fa)

| 方法名                    | 说明                   | 参数 | 返回值  |
| ------------------------- | ---------------------- | ---- | ------- |
| getSkuData                | 获取当前 skuData       | -    | skuData |
| resetSelectedSku `v2.3.0` | 重置选中规格到初始状态 | -    | -       |

### Slots

Sku 组件默认划分好了若干区块，这些区块都定义成了插槽，可以按需进行替换。区块顺序见下表：

| 名称 | 说明 |
| --- | --- |
| sku-header | 商品信息展示区，包含商品图片、名称、价格等信息 |
| sku-header-price | 自定义 sku 头部价格展示 |
| sku-header-origin-price | 自定义 sku 头部原价展示 |
| sku-header-extra | 额外 sku 头部区域 |
| sku-header-image-extra `v2.5.2` | 自定义 sku 头部图片额外的展示 |
| sku-body-top | sku 展示区上方的内容，无默认展示内容，按需使用 |
| sku-group | 商品 sku 展示区 |
| extra-sku-group | 额外商品 sku 展示区，一般用不到 |
| sku-stepper | 商品数量选择区 |
| sku-messages | 商品留言区 |
| sku-actions-top `v2.4.7` | 操作按钮区顶部内容，无默认展示内容，按需使用 |
| sku-actions | 操作按钮区 |

### sku 对象结构

```js
sku: {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: [
    {
      k: '颜色', // skuKeyName：规格类目名称
      v: [
        {
          id: '30349', // skuValueId：规格值 id
          name: '红色', // skuValueName：规格值名称
          imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
          previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
        },
        {
          id: '1215',
          name: '蓝色',
          imgUrl: 'https://img.yzcdn.cn/2.jpg',
          previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
        }
      ],
      k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: [
    {
      id: 2259, // skuId，下单时后端需要
      price: 100, // 价格（单位分）
      s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
      s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
      s3: '0', // 最多包含3个规格值，为0表示不存在该规格
      stock_num: 110 // 当前 sku 组合对应的库存
    }
  ],
  price: '1.00', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false, // 是否无规格商品
  messages: [
    {
      // 商品留言
      datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
      multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
      name: '留言', // 留言名称
      type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
      required: '1', // 是否必填 '1' 表示必填
      placeholder: '' // 可选值，占位文本
    }
  ],
  hide_stock: false // 是否隐藏剩余库存
}
```

### properties 对象结构

```js
[
  // 商品属性
  {
    k_id: 123, // 属性id
    k: '加料', // 属性名
    is_multiple: true, // 是否可多选
    v: [
      {
        id: 1222, // 属性值id
        name: '珍珠', // 属性值名
        price: 1, // 属性值加价
      },
      {
        id: 1223,
        name: '椰果',
        price: 1,
      },
    ],
  },
];
```

### initialSku 对象结构

```js
{
  // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
  // 值：skuValueId（规格值 id）
  s1: '30349',
  s2: '1193',
  // 初始选中数量
  selectedNum: 3,
  // 初始选中的商品属性
  // 键：属性id
  // 值：属性值id列表
  selectedProp: {
    123: [1222]
  }
}
```

### goods 对象结构

```js
goods: {
  // 默认商品 sku 缩略图
  picture: 'https://img.yzcdn.cn/1.jpg';
}
```

### customStepperConfig 对象结构

```js
customStepperConfig: {
  // 自定义限购文案
  quotaText: '每次限购xxx件',
  // 自定义步进器超过限制时的回调
  handleOverLimit: (data) => {
    const { action, limitType, quota, quotaUsed, startSaleNum } = data;

    if (action === 'minus') {
      Toast(startSaleNum > 1  ? `${startSaleNum}件起售` : '至少选择一件商品');
    } else if (action === 'plus') {
      // const { LIMIT_TYPE } = Sku.skuConstants;
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        let msg = `单次限购${quota}件`;
        if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
        Toast(msg);
      } else {
        Toast('库存不够了');
      }
    }
  },
  // 步进器变化的回调
  handleStepperChange: currentValue => {},
  // 库存
  stockNum: 1999,
  // 格式化库存
  stockFormatter: stockNum => {},
}
```

### messageConfig Data Structure

```js
messageConfig: {
  // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
  uploadImg: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
    });
  },
  // 最大上传体积 (MB)
  uploadMaxSize: 3,
  // placeholder 配置
  placeholderMap: {
    text: 'xxx',
    tel: 'xxx',
    ...
  },
  // 初始留言信息
  // 键：留言 name
  // 值：留言内容
  initialMessages: {
    留言: '留言信息'
  }
}
```

### 添加购物车和点击购买回调函数接收的 skuData 对象结构

```js
skuData: {
  // 商品 id
  goodsId: '946755',
  // 留言信息
  messages: {
    message_0: '12',
    message_1: ''
  },
  // 另一种格式的留言，key 不同
  cartMessages: {
    '留言1': 'xxxx'
  },
  // 选择的商品数量
  selectedNum: 1,
  // 选择的 sku 组合
  selectedSkuComb: {
    id: 2257,
    price: 100,
    s1: '30349',
    s2: '1193',
    s3: '0',
    stock_num: 111,
    properties: [
      {
        k_id: 123,
        k: '加料',
        is_multiple: true,
        v: [
          {
            id: 1223,
            name: '椰果',
            price: 1
          }
        ]
      }
    ],
    property_price: 1
  },
}
```
