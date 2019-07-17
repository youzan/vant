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
| v-model | Index of chosen item | `string | number` | `0` |

### Sidebar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when item changed | index: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Content | `string` | `''` |
| info | Info Message | `string | number` | `''` |
| url | Link | `string` | - |

### SidebarItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click item | index: index of current item |
