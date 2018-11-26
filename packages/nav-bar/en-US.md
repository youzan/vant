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
  left-text="Back"
  right-text="Button"
  left-arrow
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
<van-nav-bar title="Title" left-text="Back" left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
```


### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Title | `String` | `''` |
| left-text | Left Text | `String` | `''` |
| right-text | Right Text | `String` | `''` |
| left-arrow | Whether to show left arrow | `Boolean` | `false` |
| fixed | Whether to fixed top | `Boolean` | `false` |
| border | Whether to show bottom border | `Boolean` | `true` |
| z-index | Z-index | `Number` | `1` |

### Slot

| name | Description |
|------|------|
| title | Custom title |
| left | Custom left side content |
| right | Custom right side content |

### Event

| Event | Description | Arguments |
|------|------|------|
| click-left | Triggered when click left button | - |
| click-right | Triggered when click right button | - |