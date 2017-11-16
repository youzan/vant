## NavBar

### Install
``` javascript
import { NavBar } from 'vant';

Vue.component(NavBar.name, NavBar);
```

### Usage

#### Basic Usage

```html
<van-nav-bar
  title="Title"
  leftText="Back"
  rightText="Button"
  leftArrow
/>
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