## PullRefresh 下拉刷新

### 使用指南
``` javascript
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
```

### 代码演示

#### 基础用法

下拉刷新时会触发 `refresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 `v-model` 设置为 `false`，表示加载完成。

```html
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>
```

```javascript
export default {
  data() {
    return {
      count: 0,
      isLoading: false
    }
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 是否在加载中 | `Boolean` | - | - |
| pulling-text | 下拉过程文案 | `String` | `下拉即可刷新...` | - |
| loosing-text | 释放过程文案 | `String` | `释放即可刷新...` | - |
| loading-text | 加载过程文案 | `String` | `加载中...` | - |
| animation-duration | 动画时长 | `Number` | `300` | - |
| head-height | 顶部内容高度 | `Number` | `50` | - |
| disabled | 是否禁用 | `Boolean` | `false` | 1.1.10 |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| refresh | 下拉刷新时触发 | - |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义内容 |
| normal | 非下拉状态时顶部内容 |
| pulling | 下拉过程中顶部内容 |
| loosing | 释放过程中顶部内容 |
| loading | 加载过程中顶部内容 |
