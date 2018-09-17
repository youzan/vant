## List 列表
瀑布流滚动加载，用于控制长列表的展示

### 使用指南
``` javascript
import { List } from 'vant';

Vue.use(List);
```

### 代码演示

#### 基础用法

```html
<van-list
  v-model="loading"
  :finished="finished"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item + ''" />
</van-list>
```

```js
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| loading | 是否显示加载中提示，加载过程中不触发`load`事件 | `Boolean` | `false` |
| finished | 是否已加载完成，加载完成后不再触发`load`事件 | `Boolean` | `false` |
| offset | 滚动条与底部距离小于 offset 时触发`load`事件 | `Number` | `300` |
| loading-text | 加载中提示文案 | `String` | `加载中...` |
| immediate-check | 是否在初始化时立即执行滚动位置检查 | `Boolean` | `true` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| load | 滚动条与底部距离小于 offset 时触发 | - |

### 方法

通过 ref 可以获取到 list 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| check | - | - | 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 列表内容 |
| loading | 自定义底部加载中提示 |

### 更新日志

| 版本 | 类型 | 内容 |
|-----------|-----------|-----------|
| 1.3.2 | feature | 新增 loading 插槽
| 1.1.16 | feature | 新增 check 方法
| 1.1.10 | bugfix | 修复不可见时依旧会触发 load 事件的问题
| 1.1.1 | feature | 新增 loading-text 属性
| 1.0.0 | breaking change | 新增组件
