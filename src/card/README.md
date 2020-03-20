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
|------|------|------|------|
| thumb | Left thumb image URL | *string* | - |
| title | Title | *string* | - |
| desc | Description | *string* | - |
| tag | Tag | *string* | - |
| num | number | *number \| string* | - |
| price | Price | *number \| string* | - |
| origin-price | Origin price | *number \| string* | - |
| centered | Whether content vertical centered | *boolean* | `false` |
| currency | Currency symbol |  *string* | `¥` |
| thumb-link | Thumb link URL | *string* | - |
| lazy-load | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | *event: Event* |
| click-thumb | Triggered when thumb clicked | *event: Event* |

### Slots

| Name | Description |
|------|------|
| title | Custom title |
| desc | Custom description |
| num | Custom num |
| price | Custom price |
| origin-price | Custom origin price |
| price-top | Custom price top |
| bottom | Custom price bottom |
| thumb | Custom thumb |
| tag | Custom thumb tag |
| tags | Custom tags |
| footer | Custom footer |
