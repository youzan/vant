## List 列表
瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

### 使用指南
``` javascript
import { List } from 'vant';

Vue.use(List);
```

### 代码演示

#### 基础用法

List 组件通过`loading`和`finished`两个变量控制加载状态，当组件滚动到底部时，会触发`load`事件并将`loading`设置成`true`。此时可以发起异步操作并更新数据，数据更新完毕后，将`loading`设置成`false`即可。若数据已全部加载完毕，则直接将`finished`设置成`true`即可。

```html
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
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
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
```

### 错误提示

若列表数据加载失败，将`error`设置成`true`即可显示错误提示，用户点击错误提示后会重新触发 load 事件。

```html
<van-list
  v-model="loading"
  :error.sync="error"
  error-text="请求失败，点击重新加载"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>
```

```js
export default {
  data() {
    return {
      list: [],
      error: false,
      loading: false
    };
  },

  methods: {
    onLoad() {
      fetchSomeThing().catch(() => {
        this.error = true;
      })
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| loading | 是否处于加载状态，加载过程中不触发`load`事件 | `Boolean` | `false` | - |
| finished | 是否已加载完成，加载完成后不再触发`load`事件 | `Boolean` | `false` | - |
| error | 是否加载失败，加载失败后点击错误提示可以重新<br>触发`load`事件，必须使用`sync`修饰符 | `Boolean` | `false` | - |
| offset | 滚动条与底部距离小于 offset 时触发`load`事件 | `Number` | `300` | - |
| loading-text | 加载过程中的提示文案 | `String` | `加载中...` | 1.1.1 |
| finished-text | 加载完成后的提示文案 | `String` | - | 1.4.7 |
| error-text | 加载失败后的提示文案 | `String` | - | 1.5.3 |
| immediate-check | 是否在初始化时立即执行滚动位置检查 | `Boolean` | `true` | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| load | 滚动条与底部距离小于 offset 时触发 | - |

### 方法

通过 ref 可以获取到 list 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| check | - | - | 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 |

### Slot

| 名称 | 说明 |
|------|------|
| - | 列表内容 |
| loading | 自定义底部加载中提示 |
