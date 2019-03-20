## Tabbar

### Install
``` javascript
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
```

### Usage

#### Basic Usage

```html
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">Tab</van-tabbar-item>
  <van-tabbar-item icon="search" dot>Tab</van-tabbar-item>
  <van-tabbar-item icon="friends-o" info="5">Tab</van-tabbar-item>
  <van-tabbar-item icon="setting-o" info="20">Tab</van-tabbar-item>
</van-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    }
  }
}
```

#### Custom icon

Use `icon` slot to custom icon

```html
<van-tabbar v-model="active">
  <van-tabbar-item info="3">
    <span>Custom</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>
  <van-tabbar-item icon="search">Tab</van-tabbar-item>
  <van-tabbar-item icon="setting-o">Tab</van-tabbar-item>
</van-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  }
}
```

### Tabbar API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Index of current tab | `Number` | - |
| fixed | Whether to fixed bottom | `Boolean` | `true` |
| z-index | Z-index | `Number` | `1` |
| active-color | Color of active tab item | `String` | `#1989fa` |

### Tabbar Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when change active tab | active: index of current tab |

### TabbarItem API

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Icon name | `String` | - |
| dot | Whether to show red dot | `Boolean` | - |
| info | Info message | `String | Number` | - |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |

### TabbarItem Slot

| Name | Description | slot-scope |
|------|------|------|
| icon | Custom icon | active |
