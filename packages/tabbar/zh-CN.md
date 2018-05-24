## Tabbar 标签栏

### 使用指南
``` javascript
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
```

### 代码演示

#### 基础用法


```html
<van-tabbar v-model="active">
  <van-tabbar-item icon="shop">标签</van-tabbar-item>
  <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
  <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
  <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
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


#### 自定义图标
通过 icon slot 自定义图标


```html
<van-tabbar v-model="active">
  <van-tabbar-item icon="shop">
    <span>自定义</span>
    <template slot="icon" slot-scope="props">
      <img :src="props.active ? icon.active : icon.normal" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="chat">标签</van-tabbar-item>
  <van-tabbar-item icon="records">标签</van-tabbar-item>
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

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前选中标签的索引 | `Number` | - |

### Tabbar Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 切换标签时触发 | active: 当前选中标签 |

### TabbarItem API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-----------|
| icon | 图标名称 (可选值见 Icon 组件) | `String` | - |
| dot | 是否显示小红点 | `Boolean` | - |
| info | 图标右上角提示信息 | `String | Number` | - |
| url | 跳转链接 | `String` | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - |
| replace | 跳转时是否替换当前 history | `String` | `false` |

### TabbarItem Slot

| Name | 描述 | Scope |
|-----------|-----------|-----------|
| icon | 自定义icon | active |
