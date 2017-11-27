## Tabbar

### Install
``` javascript
import { Tabbar, TabbarItem } from 'vant';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabbarItem.name, TabbarItem);
```

### Usage

#### Basic Usage

```html
<van-tabbar v-model="active">
  <van-tabbar-item icon="shop">Tab</van-tabbar-item>
  <van-tabbar-item icon="chat" dot>Tab</van-tabbar-item>
  <van-tabbar-item icon="records" info="5">Tab</van-tabbar-item>
  <van-tabbar-item icon="gold-coin" info="20">Tab</van-tabbar-item>
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
  <van-tabbar-item icon="shop">
    <span>Custom</span>
    <template slot="icon" slot-scope="props">
      <img :src="props.active ? icon.active : icon.normal" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="chat">Tab</van-tabbar-item>
  <van-tabbar-item icon="records">Tab</van-tabbar-item>
</van-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/1.png',
        active: '//img.yzcdn.cn/2.png'
      }
    }
  }
}
```

### Tabbar API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | Index of current tab | `Number` | - | - |

### Tabbar Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| change | Triggered when change active tab | active: index of current tab |

### TabbarItem API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| icon | Icon name | `String` | - | Names from Icon Component |
| dot | Whether to show red dot | `Boolean` | - | - |
| info | Info message | `String` | - | - |
| url | Link | `String` | - | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - | - |
| replace | If true, the navigation will not leave a history record | `String` | `false` | - |

### TabbarItem Slot

| Name | Description | Scope |
|-----------|-----------|-----------|
| icon | Custom icon | active |
