# Card

### Intro

Used to display product pictures, prices and other information.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Card } from 'vant';

const app = createApp();
app.use(Card);
```

## Usage

### Basic Usage

```html
<van-card
  num="2"
  price="2.00"
  title="Title"
  desc="Description"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
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
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
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
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
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

| Event       | Description                       | Arguments           |
| ----------- | --------------------------------- | ------------------- |
| click       | Emitted when component is clicked | _event: MouseEvent_ |
| click-thumb | Emitted when thumb is clicked     | _event: MouseEvent_ |

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

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-card-padding | `var(--van-padding-xs) var(--van-padding-md)` | - |
| --van-card-font-size | `var(--van-font-size-sm)` | - |
| --van-card-text-color | `var(--van-text-color)` | - |
| --van-card-background-color | `var(--van-background-color-light)` | - |
| --van-card-thumb-size | `88px` | - |
| --van-card-thumb-border-radius | `var(--van-border-radius-lg)` | - |
| --van-card-title-line-height | `16px` | - |
| --van-card-desc-color | `var(--van-gary-7)` | - |
| --van-card-desc-line-height | `var(--van-line-height-md)` | - |
| --van-card-price-color | `var(--van-gary-8)` | - |
| --van-card-origin-price-color | `var(--van-gary-6)` | - |
| --van-card-num-color | `var(--van-gary-6)` | - |
| --van-card-origin-price-font-size | `var(--van-font-size-xs)` | - |
| --van-card-price-font-size | `var(--van-font-size-sm)` | - |
| --van-card-price-integer-font-size | `var(--van-font-size-lg)` | - |
| --van-card-price-font-family | `var(--van-price-integer-font-family)` | - |
