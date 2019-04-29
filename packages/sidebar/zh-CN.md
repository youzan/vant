## Sidebar 侧边导航

### 使用指南

``` javascript
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

### 代码演示

#### 基础用法

通过在`van-sidebar`上设置`active-key`属性来控制选中项

```html
<van-sidebar :active-key="activeKey" @change="onChange">
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" info="8" />
  <van-sidebar-item title="标签名称" info="99" />
  <van-sidebar-item title="标签名称" info="99+" />
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

### Sidebar API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| active-key | 当前导航项的索引 | `String | Number` | `0` | - |

### Sidebar Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换当前导航项时触发 | key: 当前导航项的索引 |

### SidebarItem API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 内容 | `String` | `''` | - |
| info | 提示消息 | `String | Number` | `''` | - |
| url | 跳转链接 | `String` | - | - |

### SidebarItem Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击时触发 | key: 当前导航项的索引 |
