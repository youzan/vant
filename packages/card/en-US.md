# Card

### Install
``` javascript
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
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
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
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
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
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">Tag</van-tag>
    <van-tag plain type="danger">Tag</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">Button</van-button>
    <van-button size="mini">Button</van-button>
  </div>
</van-card>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| thumb | Left thumb image URL | `String` | - |
| title | Title | `String` | - |
| desc | Description | `String` | - |
| tag | Tag | `String` | - |
| num | Number | `String | Number` | - |
| price | Price | `String | Number` | - |
| origin-price | Origin price | `String | Number` | - |
| centered | Whether content vertical centered | `Boolean` | `false` |
| currency | Currency symbol |  `String` | `¥` |
| thumb-link | Thumb link URL | `String` | - |
| lazy-load | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | `Boolean` | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | - |
| click-thumb | Triggered when thumb clicked | - |

### Slots

| Name | Description |
|------|------|
| title | Custom title |
| desc | Custom description |
| num | Custom num |
| price | Custom price |
| origin-price | Custom origin price |
| bottom | Custom price bottom |
| thumb | Custom thumb |
| tag | Custom thumb tag |
| tags | Custom tags |
| footer | Custom footer |
