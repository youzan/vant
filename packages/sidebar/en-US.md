# Sidebar

### Install

``` javascript
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

## Usage

### Basic Usage

Use `active-key` prop to set index of chosen item

```html
<van-sidebar :active-key="activeKey" @change="onChange">
  <van-sidebar-item title="Title" />
  <van-sidebar-item title="Title" info="8" />
  <van-sidebar-item title="Title" info="99" />
  <van-sidebar-item title="Title" info="99+" />
</van-sidebar>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  },

  methods: {
    onChange(key) {
      this.activeKey = key;
    }
  }
};
```

## API

### Sidebar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| active-key | Index of chosen item | `String | Number` | `0` |

### Sidebar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when item changed | key: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Content | `String` | `''` |
| info | Info Message | `String | Number` | `''` |
| url | Link | `String` | - |

### SidebarItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click item | key: index of current item |
