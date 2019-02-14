## Card

### Install
``` javascript
import { Card } from 'vant';

Vue.use(Card);
```

### Usage

#### Basic Usage

```html
<van-card
  title="Title"
  desc="Description"
  num="2"
  price="2.00"
  :thumb="imageURL"
/>
```

#### Advanced Usage

Use slot to custom content.

```html
<van-card
  num="2"
  tag="Tag"
  title="Title"
  desc="Description"  
  price="2.00"
  :thumb="imageURL"
  origin-price="10.00"
>
  <div slot="footer">
    <van-button size="mini">Button</van-button>
    <van-button size="mini">Button</van-button>
  </div>
</van-card>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| thumb | Left thumb image URL | `String` | - |
| title | Title | `String` | - |
| desc | Description | `String` | - |
| tag | Tag | `String` | - |
| num | Number | `String | Number` | - |
| price | Price | `String | Number` | - |
| origin-price | Origin price | `String | Number` | - |
| centered | Whether content vertical centered | `String` | `false` |
| currency | Currency symbol |  `String` | `¥` |
| thumb-link | Thumb link URL | `String` | - |
| lazy-load | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | `Boolean` | `false` |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | - |

### Slot

| name | Description |
|------|------|
| title | Custom title |
| desc | Custom description |
| num | Custom num |
| price | Custom price |
| origin-price | Custom origin price |
| thumb | Custom thumb |
| tag | Custom thumb tag |
| tags | Custom tags |
| footer | Custom footer |
