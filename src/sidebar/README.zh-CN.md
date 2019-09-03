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

### 显示徽标

通过`info`属性设置徽标内容

```html
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="标签名称" info="8" />
  <van-sidebar-item title="标签名称" info="99" />
  <van-sidebar-item title="标签名称" info="99+" />
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
| info | 提示消息 | *string \| number* | `''` | - |
| disabled | 是否禁用该项 | *boolean* | `false` | 2.2.0 |
| url | 跳转链接 | *string* | - | - |
| to | 路由跳转对象，同 vue-router 的 to 属性 | *string \| object* | - | 2.0.4 |
| replace | 跳转时是否替换当前页面历史 | *boolean* | `false` | 2.0.4 |

### SidebarItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | index: 当前导航项的索引 |
