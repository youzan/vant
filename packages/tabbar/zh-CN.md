# Tabbar 标签栏

### 引入

``` javascript
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
```

## 代码演示

### 基础用法

`v-model`默认绑定选中标签的索引值，通过修改`v-model`即可切换选中的标签

```html
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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

### 通过名称匹配

在标签指定`name`属性的情况下，`v-model`的值为当前标签的`name`

```html
<van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
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

### 显示徽标

```html
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
</van-tabbar>
```

### 自定义图标

通过 icon 插槽自定义图标，可以通过 `slot-scope` 判断标签是否选中

```html
<van-tabbar v-model="active">
  <van-tabbar-item info="3">
    <span>自定义</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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

### 自定义颜色

```html
<van-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000"
>
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="freinds-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
```

### 路由模式

标签栏支持路由模式，用于搭配`vue-router`使用。路由模式下会匹配页面路径和标签的`to`属性，并自动选中对应的标签

```html
<router-view />

<van-tabbar route>
  <van-tabbar-item
    replace
    to="/home"
    icon="home-o"
  >
    标签
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/search"
    icon="search"
  >
    标签
  </van-tabbar-item>
</van-tabbar>
```

## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中标签的名称或索引值 | `String | Number` | `0` | - |
| fixed | 是否固定在底部 | `Boolean` | `true` | - |
| border | 是否显示外边框 | `Boolean` | `true` | 2.0.0 |
| z-index | 元素 z-index | `Number` | `1` | 1.1.9 |
| active-color | 选中标签的颜色 | `String` | `#1989fa` | 1.5.1 |
| inactive-color | 未选中标签的颜色 | `String` | `#7d7e80` | 2.0.0 |
| route | 是否开启路由模式 | `Boolean` | `false` | 2.0.0 |
| safe-area-inset-bottom | 是否开启 iPhone X 底部安全区适配，需要在 `viewport` meta 标签中设置 `viewport-fit=cover` | `Boolean` | `false` | 1.6.15 |

### Tabbar Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换标签时触发 | active: 当前选中标签的名称或索引值 |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标签名称，作为匹配的标识符 | `String | Number` | 当前标签的索引值 | 2.0.0 |
| icon | 图标名称或图片链接，可选值见 Icon 组件| `String` | - | - |
| dot | 是否显示小红点 | `Boolean` | - | - |
| info | 图标右上角提示信息 | `String | Number` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前页面历史 | `Boolean` | `false` | - |

### TabbarItem Slots

| 名称 | 说明 | slot-scope |
|------|------|------|
| icon | 自定义图标 | active: 是否为选中标签 |
