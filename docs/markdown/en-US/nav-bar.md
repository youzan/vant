## NavBar

### Install
``` javascript
import { NavBar } from 'vant';

Vue.component(NavBar.name, NavBar);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-nav-bar
  title="Title"
  left-text="Back"
  right-text="Button"
  left-arrow
/>
```
:::

#### Advanced Usage

:::demo Advanced Usage
```html
<van-nav-bar title="Title" left-text="Back" left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
```
:::


### API
| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Title | `String` | `''` | - |
| left-text | Left Text | `String` | `''` | - |
| right-text | Right Text | `String` | `''` | - |
| left-arrow | Whether to show left arrow | `Boolean` | `false` | - |
| fixed | Whether to fixed top | `Boolean` | `false` | - |

### Slot

| name | Description |
|-----------|-----------|
| title | Custom title |
| left | Custom left side content |
| right | Custom right side content |