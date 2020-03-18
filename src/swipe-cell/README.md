# SwipeCell

### Install

```js
import Vue from 'vue';
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
```

## Usage

### Basic Usage

```html
<van-swipe-cell>
  <template #left>
    <van-button square type="primary" text="Select" />
  </template>
  <van-cell :border="false" title="Cell" value="Cell Content" />
  <template #right>
    <van-button square type="danger" text="Delete" />
    <van-button square type="primary" text="Collect"/>
  </template>
</van-swipe-cell>
```

### Custom Content

```html
<van-swipe-cell>
  <van-card
    num="2"
    price="2.00"
    desc="Description"
    title="Title"
    class="goods-card"
    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
  />
  <template #right>
    <van-button
      square
      text="Delete"
      type="danger"
      class="delete-button"
    />
  </template>
</van-swipe-cell>

<style>
.goods-card {
  margin: 0;
  background-color: @white;
}

.delete-button {
  height: 100%;
}
</style>
```

### Before Close

```html
<van-swipe-cell :before-close="beforeClose">
  <template #left>
    <van-button square type="primary" text="Select" />
  </template>
  <van-cell :border="false" title="Cell" value="Cell Content" />
  <template #right>
    <van-button square type="danger" text="Delete" />
  </template>
</van-swipe-cell>
```

```js
export default {
  methods: {
    beforeClose({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: 'Are you sure to delete?'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name `v2.0.4` | Identifier of SwipeCell | *number \| string* | - |
| left-width | Width of the left swipe area | *number \| string* | `auto` |
| right-width | Width of the right swipe area | *number \| string* | `auto` |
| before-close `v2.3.0` | Callback function before close | *Function* | - |
| disabled | Whether to disabled swipe | *boolean* | `false` |
| stop-propagation `v2.1.0` | Whether to stop touchmove event propagation | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | custom content |
| left | content of left scrollable area |
| right | content of right scrollabe area |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | Click positon (`left` `right` `cell` `outside`) |
| open | Triggered when opened | { position: 'left' \| 'right' , name: string } |
| close | Triggered when closed | { position: string , name: string } |

### beforeClose Params

| Attribute | Description | Type |
|------|------|------|
| name | Name | *string* |
| position | Click positon (`left` `right` `cell` `outside`) | *string* |
| instance | SwipeCell instance | *SwipeCell* |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get SwipeCell instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| open | open SwipeCell | position: `left | right` | - |
| close | close SwipeCell | - | - |
