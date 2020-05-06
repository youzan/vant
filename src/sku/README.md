# Sku

### Install

```js
import Vue from 'vue';
import { Sku } from 'vant';

Vue.use(Sku);
```

## Usage

### Basic Usage

```html
<van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :hide-stock="sku.hide_stock"
  :quota="quota"
  :quota-used="quotaUsed"
  :reset-stepper-on-hide="resetStepperOnHide"
  :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
  :close-on-click-overlay="closeOnClickOverlay"
  :disable-stepper-input="disableStepperInput"
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
      sku: {},
      goods: {},
      messageConfig: {},
    };
  },
};
```

### Custom Stepper Config

```html
<van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :hide-stock="sku.hide_stock"
  :quota="quota"
  :quota-used="quotaUsed"
  :custom-stepper-config="customStepperConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
```

### Advanced Usage

```html
<van-sku
  v-model="show"
  stepper-title="Stepper title"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :hide-stock="sku.hide_stock"
  :quota="quota"
  :quota-used="quotaUsed"
  show-add-cart-btn
  reset-stepper-on-hide
  :initial-sku="initialSku"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
>
  <!-- custom sku-header-price -->
  <template #sku-header-price="props">
    <div class="van-sku__goods-price">
      <span class="van-sku__price-symbol">￥</span
      ><span class="van-sku__price-num">{{ props.price }}</span>
    </div>
  </template>

  <!-- custom sku actions -->
  <template #sku-actions="props">
    <div class="van-sku-actions">
      <van-button square size="large" type="warning" @click="onPointClicked">
        Button
      </van-button>
      <!-- trigger sku inner event -->
      <van-button
        square
        size="large"
        type="danger"
        @click="props.skuEventBus.$emit('sku:buy')"
      >
        Button
      </van-button>
    </div>
  </template>
</van-sku>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Whether to show sku | _boolean_ | `false` |
| sku | Sku data | _object_ | - |
| goods | Goods info | _object_ | - |
| goods-id | Goods id | `string | _number_ | - |
| price-tag | Tag behind the price | _string_ | - |
| hide-stock | Whether to hide stock | _boolean_ | `false` |
| hide-quota-text | Whether to hide quota text | _boolean_ | `false` |
| hide-selected-text | Whether to hide selected text | _boolean_ | `false` |
| stock-threshold | stock threshold | _boolean_ | `50` |
| show-add-cart-btn | Whether to show cart button | _boolean_ | `true` |
| buy-text | Buy button text | _string_ | - | - |
| add-cart-text | Add cart button text | _string_ | - | - |
| quota | Quota (0 as no limit) | _number_ | `0` |
| quota-used | Used quota | _number_ | `0` |
| reset-stepper-on-hide | Whether to reset stepper when hide | _boolean_ | `false` |
| reset-selected-sku-on-hide | Whether to reset selected sku when hide | _boolean_ | `false` |
| disable-stepper-input | Whether to disable stepper input | _boolean_ | `false` |
| close-on-click-overlay | Whether to close sku popup when click overlay | _boolean_ | `false` |
| stepper-title | Quantity title | _string_ | `Quantity` |
| custom-stepper-config | Custom stepper related config | _object_ | `{}` |
| message-config | Message related config | _object_ | `{}` |
| get-container | Return the mount node for sku | _string \| () => Element_ | - |
| safe-area-inset-bottom `v2.2.1` | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| start-sale-num `v2.3.0` | Minimum quantity | _number_ | `1` |
| properties `v2.4.2` | Goods properties | _array_ | - |
| preview-on-click-image `v2.5.2` | Whether to preview image when click goods image | _boolean_ | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| add-cart | Triggered when click cart button | data: object |
| buy-clicked | Triggered when click buy button | data: object |
| stepper-change | Triggered when stepper value changed | value: number |
| sku-selected | Triggered when select sku | { skuValue, selectedSku, selectedSkuComb } |
| sku-prop-selected | Triggered when select property | { propValue, selectedProp, selectedSkuComb } |
| open-preview | Triggered when open image preview | data: object |
| close-preview | Triggered when close image preview | data: object |
| sku-reset `v2.8.1` | Triggered when reset sku and property | { selectedSku, selectedProp, selectedSkuComb } |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Sku instance and call instance methods

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| getSkuData | Get current skuData | - | skuData |
| resetSelectedSku `v2.3.0` | Reset selected sku to initial sku | - | - |

### Slots

| Name                            | Description                       |
| ------------------------------- | --------------------------------- |
| sku-header                      | Custom header                     |
| sku-header-price                | Custom header price area          |
| sku-header-origin-price         | Custom header origin price area   |
| sku-header-extra                | Extra header area                 |
| sku-header-image-extra `v2.5.2` | Custom header image extra area    |
| sku-body-top                    | Custom content before sku-group   |
| sku-group                       | Custom sku                        |
| extra-sku-group                 | Extra custom content              |
| sku-stepper                     | Custom stepper                    |
| sku-messages                    | Custom messages                   |
| sku-actions-top `v2.4.7`        | Custom content before sku-actions |
| sku-actions                     | Custom button actions             |

### Sku Data Structure

```js
sku: {
  tree: [
    {
      k: 'Color',
      v: [
        {
          id: '30349',
          name: 'Red',
          imgUrl: 'https://img.yzcdn.cn/1.jpg',
          previewImgUrl: 'https://img.yzcdn.cn/1p.jpg',
        },
        {
          id: '1215',
          name: 'Blue',
          imgUrl: 'https://img.yzcdn.cn/2.jpg',
          previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
        }
      ],
      k_s: 's1'
    }
  ],
  list: [
    {
      id: 2259,
      price: 100,
      s1: '1215',
      s2: '1193',
      s3: '0',
      stock_num: 110
    }
  ],
  price: '1.00',
  stock_num: 227,
  collection_id: 2261,
  none_sku: false,
  messages: [
    {
      datetime: '0',
      multiple: '0',
      name: 'Message',
      type: 'text',
      required: '1'，
      placeholder: ''
    }
  ],
  hide_stock: false,
  properties: [
    {
      k_id: 123,
      k: 'More',
      is_multiple: true,
      v: [
        {
          id: 1222,
          name: 'Tea',
          price: 1,
        },
        {
          id: 1223,
          name: 'Water',
          price: 1,
        }
      ],
    }
  ]
}
```

### properties Data Structure

```js
[
  {
    k_id: 123,
    k: 'More',
    is_multiple: true,
    v: [
      {
        id: 1222,
        name: 'Tea',
        price: 1,
      },
      {
        id: 1223,
        name: 'Water',
        price: 1,
      },
    ],
  },
];
```

### initialSku Data Structure

```js
{
  // Key：skuKeyStr
  // Value：skuValueId
  s1: '30349',
  s2: '1193',
  selectedNum: 3,
  selectedProp: {
    123: [1222]
  }
}
```

### Goods Data Structure

```js
goods: {
  picture: 'https://img.yzcdn.cn/1.jpg';
}
```

### customStepperConfig Data Structure

```js
customStepperConfig: {
  // custom quota text
  quotaText: 'only 5 can buy',
  // custom callback when over limit
  handleOverLimit: (data) => {
    const { action, limitType, quota, quotaUsed, startSaleNum } = data;

    if (action === 'minus') {
      Toast(`at least select ${startSaleNum > 1 ? startSaleNum : 'one'}`);
    } else if (action === 'plus') {
      // const { LIMIT_TYPE } = Sku.skuConstants;
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        let msg = `Buy up to ${quota}`;
        if (quotaUsed > 0) msg += `，you already buy ${quotaUsed}`;
        Toast(msg);
      } else {
        Toast('not enough stock');
      }
    }
  },
  // custom callback when stepper value change
  handleStepperChange: currentValue => {},
  // stock
  stockNum: 1999,
  // stock fomatter
  stockFormatter: stockNum => {},
}
```

### messageConfig Data Structure

```js
messageConfig: {
  // the upload image callback
  uploadImg: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
    });
  },
  // max file size (MB)
  uploadMaxSize: 3,
  // placeholder config
  placeholderMap: {
    text: 'xxx',
    tel: 'xxx',
    ...
  },
  // Key：message name
  // Value：message value
  initialMessages: {
    message: 'message value'
  }
}
```

### Events Params Data Structure

```js
skuData: {
  goodsId: '946755',
  messages: {
    message_0: '12',
    message_1: ''
  },
  cartMessages: {
    'Message 1': 'xxxx'
  },
  selectedNum: 1,
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
        k: 'More',
        is_multiple: true,
        v: [
          {
            id: 1223,
            name: 'Water',
            price: 1
          }
        ]
      }
    ],
    property_price: 1
  }
}
```
