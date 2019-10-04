# Sidebar 侧边导航

### 引入

``` javascript
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

## 代码演示

### 基础用法

通过`v-model`绑定当前选中项的索引

```html
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
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

### 提示信息

设置`dot`属性后，会在右上角展示一个小红点。设置`info`属性后，会在右上角展示相应的徽标

```html
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="标签名称" dot />
  <van-sidebar-item title="标签名称" info="5" />
  <van-sidebar-item title="标签名称" info="99+" />
</van-sidebar>
```

### 禁用选项

通过`disabled`属性禁用选项

```html
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" disabled />
  <van-sidebar-item title="标签名称" />
</van-sidebar>
```

## API

### Sidebar Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前导航项的索引 | *string \| number* | `0` | 2.0.4 |

### Sidebar Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换导航项时触发 | index: 当前导航项的索引 |

### SidebarItem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 内容 | *string* | `''` | - |
| dot | 是否显示右上角小红点 | *boolean* | `false` | 2.2.1 |
| info | 右上角徽标的内容 | *string \| number* | - | - |
| disabled | 是否禁用该项 | *boolean* | `false` | 2.2.0 |
| url | 点击后跳转的链接地址 | *string* | - | - |
| to | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | *string \| object* | - | 2.0.4 |
| replace | 是否在跳转时替换当前页面历史 | *boolean* | `false` | 2.0.4 |

### SidebarItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | index: 当前导航项的索引 |
