## PullRefresh 下拉刷新

### 使用指南
``` javascript
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
```

### 代码演示

```html
<!-- 通过 v-model 控制加载状态 -->
<van-pull-refresh v-model="isLoading">
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

  watch: {
    isLoading() {
      if (this.isLoading) {
        setTimeout(() => {
          Toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      }
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 是否在加载中 | `Boolean` | - | - |
| pullingText | 下拉过程中顶部文案 | `String` | `下拉即可刷新...` | - |
| loosingText | 释放过程中顶部文案 | `String` | `释放即可刷新...` | - |
| loadingText | 加载过程中顶部文案 | `String` | `加载中...` | - |
| animationDuration | 动画时长 | `Number` | `300` | - |
| headHeight | 顶部内容高度 | `Number` | `50` | - |

### Slot

| name | 描述 |
|-----------|-----------|
| - | 自定义内容 |
| normal | 非下拉状态时顶部内容 |
| pulling | 下拉过程中顶部内容 |
| loosing | 释放过程中顶部内容 |
| loading | 加载过程中顶部内容 |
