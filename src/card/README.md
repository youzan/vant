# Card

### Install

```js
import Vue from 'vue';
import { Card } from 'vant';

Vue.use(Card);
```

## Usage

### Basic Usage

```html
<van-card
  num="2"
  price="2.00"
  title="Title"
  desc="Description"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/>
```

### Discount Info

```html
<van-card
  num="2"
  tag="Tag"
  price="2.00"
  title="Title"
  desc="Description"
  origin-price="10.00"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/>
```

### Custom Content

Use slot to custom content.

```html
<van-card
  num="2"
  title="Title"
  desc="Description"
  price="2.00"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">Tag</van-tag>
    <van-tag plain type="danger">Tag</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">Button</van-button>
    <van-button size="mini">Button</van-button>
  </template>
</van-card>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| thumb | Left thumb image URL | _string_ | - |
| title | Title | _string_ | - |
| desc | Description | _string_ | - |
| tag | Tag | _string_ | - |
| num | number | _number \| string_ | - |
| price | Price | _number \| string_ | - |
| origin-price | Origin price | _number \| string_ | - |
| centered | Whether content vertical centered | _boolean_ | `false` |
| currency | Currency symbol | _string_ | `¥` |
| thumb-link | Thumb link URL | _string_ | - |
| lazy-load | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |

### Events

| Event       | Description                       | Arguments      |
| ----------- | --------------------------------- | -------------- |
| click       | Emitted when component is clicked | _event: Event_ |
| click-thumb | Emitted when thumb is clicked     | _event: Event_ |

### Slots

| Name         | Description         |
| ------------ | ------------------- |
| title        | Custom title        |
| desc         | Custom description  |
| num          | Custom num          |
| price        | Custom price        |
| origin-price | Custom origin price |
| price-top    | Custom price top    |
| bottom       | Custom price bottom |
| thumb        | Custom thumb        |
| tag          | Custom thumb tag    |
| tags         | Custom tags         |
| footer       | Custom footer       |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                          | Default Value                | Description |
| ----------------------------- | ---------------------------- | ----------- |
| @card-padding                 | `@padding-xs @padding-md`    | -           |
| @card-font-size               | `@font-size-sm`              | -           |
| @card-text-color              | `@text-color`                | -           |
| @card-background-color        | `@background-color-light`    | -           |
| @card-thumb-size              | `88px`                       | -           |
| @card-thumb-border-radius     | `@border-radius-lg`          | -           |
| @card-title-line-height       | `16px`                       | -           |
| @card-desc-color              | `@gray-7`                    | -           |
| @card-desc-line-height        | `@line-height-md`            | -           |
| @card-price-color             | `@gray-8`                    | -           |
| @card-origin-price-color      | `@gray-6`                    | -           |
| @card-num-color               | `@gray-6`                    | -           |
| @card-origin-price-font-size  | `@font-size-xs`              | -           |
| @card-price-font-size         | `@font-size-sm`              | -           |
| @card-price-integer-font-size | `@font-size-lg`              | -           |
| @card-price-font-family       | `@price-integer-font-family` | -           |
