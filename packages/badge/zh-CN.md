## Badge 徽章

### 使用指南
``` javascript
import { Badge, BadgeGroup } from 'vant';

Vue.use(Badge);
Vue.use(BadgeGroup);
```

### 代码演示

#### 基础用法

通过在`van-badge-group`上设置`active-key`属性来控制选中的`badge`

```html
<van-badge-group :active-key="activeKey" @change="onChange">
  <van-badge title="标签名称" />
  <van-badge title="标签名称" info="8" />
  <van-badge title="标签名称" info="99" />
  <van-badge title="标签名称" info="99+" />
</van-badge-group>
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

### BadgeGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| active-key | 选中`badge`的索引 | `String | Number` | `0` | - |

### BadgeGroup Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换徽章时触发 | key: 当前选中徽章的索引 |

### Badge API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 内容 | `String` | `''` | - |
| info | 提示消息 | `String | Number` | `''` | - |
| url | 跳转链接 | `String` | - | - |

### Badge Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击徽章时触发 | key: 当前徽章的索引 |
