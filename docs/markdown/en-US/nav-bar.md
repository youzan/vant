## NavBar

### Install
``` javascript
import { NavBar } from 'vant';

Vue.use(NavBar);
```

### Usage

#### Basic Usage

```html
<van-nav-bar
  title="Title"
  leftText="Back"
  rightText="Button"
  leftArrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
export default {
  methods: {
    onClickLeft() {
      Toast('Back');
    },
    onClickRight() {
      Toast('Button');
    }
  }
}
```

#### Advanced Usage

```html
<van-nav-bar title="Title" leftText="Back" leftArrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
```


### API
| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Title | `String` | `''` | - |
| leftText | Left Text | `String` | `''` | - |
| rightText | Right Text | `String` | `''` | - |
| leftArrow | Whether to show left arrow | `Boolean` | `false` | - |
| fixed | Whether to fixed top | `Boolean` | `false` | - |

### Slot

| name | Description |
|-----------|-----------|
| title | Custom title |
| left | Custom left side content |
| right | Custom right side content |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| click-left | Triggered when click left button | - |
| click-right | Triggered when click right button | - |