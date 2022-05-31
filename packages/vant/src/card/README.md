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
  thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
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
  thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
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
  thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="primary">Tag</van-tag>
    <van-tag plain type="primary">Tag</van-tag>
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
| lazy-load | Whether to enable thumb lazy load, should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |

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

### Types

The component exports the following type definitions:

```ts
import type { CardProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-card-padding | _var(--van-padding-xs) var(--van-padding-md)_ | - |
| --van-card-font-size | _var(--van-font-size-sm)_ | - |
| --van-card-text-color | _var(--van-text-color)_ | - |
| --van-card-background | _var(--van-background)_ | - |
| --van-card-thumb-size | _88px_ | - |
| --van-card-thumb-radius | _var(--van-radius-lg)_ | - |
| --van-card-title-line-height | _16px_ | - |
| --van-card-desc-color | _var(--van-text-color-2)_ | - |
| --van-card-desc-line-height | _var(--van-line-height-md)_ | - |
| --van-card-price-color | _var(--van-text-color)_ | - |
| --van-card-origin-price-color | _var(--van-text-color-2)_ | - |
| --van-card-num-color | _var(--van-text-color-2)_ | - |
| --van-card-origin-price-font-size | _var(--van-font-size-xs)_ | - |
| --van-card-price-font-size | _var(--van-font-size-sm)_ | - |
| --van-card-price-integer-font-size | _var(--van-font-size-lg)_ | - |
| --van-card-price-font | _var(--van-price-font)_ | - |
