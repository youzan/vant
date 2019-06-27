# Tabbar

### Install

``` javascript
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
```

## Usage

### Basic Usage

```html
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">Tab</van-tabbar-item>
  <van-tabbar-item icon="search">Tab</van-tabbar-item>
  <van-tabbar-item icon="friends-o">Tab</van-tabbar-item>
  <van-tabbar-item icon="setting-o">Tab</van-tabbar-item>
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

### Item Name

```html
<van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">Tab</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">Tab</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">Tab</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o">Tab</van-tabbar-item>
</van-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 'home'
    }
  }
}
```

### Show Badge

```html
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">Tab</van-tabbar-item>
  <van-tabbar-item icon="search" dot>Tab</van-tabbar-item>
  <van-tabbar-item icon="friends-o" info="5">Tab</van-tabbar-item>
  <van-tabbar-item icon="setting-o" info="20">Tab</van-tabbar-item>
</van-tabbar>
```

### Custom Icon

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

### Custom Color

```html
<van-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000"
>
  <van-tabbar-item icon="home-o">Tab</van-tabbar-item>
  <van-tabbar-item icon="search">Tab</van-tabbar-item>
  <van-tabbar-item icon="freinds-o">Tab</van-tabbar-item>
  <van-tabbar-item icon="setting-o">Tab</van-tabbar-item>
</van-tabbar>
```

### Route Mode

```html
<router-view />

<van-tabbar route>
  <van-tabbar-item
    replace
    to="/home"
    icon="home-o"
  >
    Tab
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/search"
    icon="search"
  >
    Tab
  </van-tabbar-item>
</van-tabbar>
```

## API

### Tabbar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Identifier of current tab | `String | Number` | `0` |
| fixed | Whether to fixed bottom | `Boolean` | `true` |
| border | Whether to show border | `Boolean` | `true` |
| z-index | Z-index | `Number` | `1` |
| active-color | Color of active tab item | `String` | `#1989fa` |
| inactive-color | Color of inactive tab item | `String` | `#7d7e80` |
| route | Whether to enable route mode | `Boolean` | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation, to enable those features use `viewport-fit=cover` in the `viewport` meta tag | `Boolean` | `false` |

### Tabbar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when change active tab | active: index of current tab |

### TabbarItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Identifier | `String | Number` | Item index |
| icon | Icon name | `String` | - |
| dot | Whether to show red dot | `Boolean` | - |
| info | Info message | `String | Number` | - |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |

### TabbarItem Slots

| Name | Description | slot-scope |
|------|------|------|
| icon | Custom icon | active |
