# Sidebar

### Install

``` javascript
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

## Usage

### Basic Usage

```html
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="Title" />
  <van-sidebar-item title="Title" />
  <van-sidebar-item title="Title" />
</van-sidebar>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  }
};
```

### Show Badge

```html
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="Title" info="8" />
  <van-sidebar-item title="Title" info="99" />
  <van-sidebar-item title="Title" info="99+" />
</van-sidebar>
```

## API

### Sidebar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Index of chosen item | `String | Number` | `0` |

### Sidebar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when item changed | index: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Content | `String` | `''` |
| info | Info Message | `String | Number` | `''` |
| url | Link | `String` | - |

### SidebarItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click item | index: index of current item |
