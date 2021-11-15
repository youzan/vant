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
    <van-button square type="primary" text="Collect" />
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
    thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
  />
  <template #right>
    <van-button square text="Delete" type="danger" class="delete-button" />
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
            message: 'Are you sure to delete?',
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Identifier of SwipeCell | _number \| string_ | - |
| left-width | Width of the left swipe area | _number \| string_ | `auto` |
| right-width | Width of the right swipe area | _number \| string_ | `auto` |
| before-close | Callback function before close | _Function_ | - |
| disabled | Whether to disabled swipe | _boolean_ | `false` |
| stop-propagation | Whether to stop touchmove event propagation | _boolean_ | `false` |

### Slots

| Name    | Description                     |
| ------- | ------------------------------- |
| default | custom content                  |
| left    | content of left scrollable area |
| right   | content of right scrollabe area |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when SwipeCell is clicked | Click position (`left` `right` `cell` `outside`) |
| open | Emitted when SwipeCell is opened | { position: 'left' \| 'right' , name: string } |
| close | Emitted when SwipeCell is closed | { position: string , name: string } |

### beforeClose Params

| Attribute | Description                                      | Type        |
| --------- | ------------------------------------------------ | ----------- |
| name      | Name                                             | _string_    |
| position  | Click position (`left` `right` `cell` `outside`) | _string_    |
| instance  | SwipeCell instance                               | _SwipeCell_ |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get SwipeCell instance and call instance methods.

| Name  | Description     | Attribute                 | Return value |
| ----- | --------------- | ------------------------- | ------------ |
| open  | open SwipeCell  | position: `left \| right` | -            |
| close | close SwipeCell | -                         | -            |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @switch-cell-padding-top | `@cell-vertical-padding - 1px` | - |
| @switch-cell-padding-bottom | `@cell-vertical-padding - 1px` | - |
| @switch-cell-large-padding-top | `@cell-large-vertical-padding - 1px` | - |
| @switch-cell-large-padding-bottom | `@cell-large-vertical-padding - 1px` | - |
