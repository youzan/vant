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
Use `slot` to custom content.

```html
<van-card
  num="2"
  tag="Tag"
  title="Title"
  desc="Description"  
  price="2.00"
  :thumb="imageURL"
>
  <div slot="footer">
    <van-button size="mini">Button</van-button>
    <van-button size="mini">Button</van-button>
  </div>
</van-card>
```

### API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| thumb | Left thumb image URL | `String` | - |
| title | Title | `String` | - |
| desc | Description | `String` | - |
| tag | Tag | `String` | - |
| num | Number of goods | `String | Number` | - |
| price | Price of goods | `String | Number` | - |
| centered | Whether content vertical centered | `String` | `false` |
| currency | Currency symbol |  `String` | `¥` |
| thumb-link | Thumb link URL | `String` | - |

### Slot

| name | Description |
|-----------|-----------|
| title | Custom title |
| desc | Custom description |
| tags | Custom tags |
| thumb | Custom thumb |
| footer | Custom footer |
