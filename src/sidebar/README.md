# Sidebar

### Install

``` javascript
import Vue from 'vue';
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

### Show Info

```html
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="Title" dot />
  <van-sidebar-item title="Title" info="5" />
  <van-sidebar-item title="Title" info="99+" />
</van-sidebar>
```

### Disabled

```html
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="Title" />
  <van-sidebar-item title="Title" disabled />
  <van-sidebar-item title="Title" />
</van-sidebar>
```

## API

### Sidebar Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Index of chosen item | *string \| number* | `0` | - |

### Sidebar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when item changed | index: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| title | Content | *string* | `''` | - |
| dot | Whether to show red dot | *boolean* | `false` | 2.2.1 |
| info | Content of the badge | *string \| number* | `''` | - |
| disabled | Whether to be disabled | *boolean* | `false` | 2.2.0 |
| url | Link | *string* | - | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | 2.0.4 |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | 2.0.4 |

### SidebarItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click item | index: index of current item |
