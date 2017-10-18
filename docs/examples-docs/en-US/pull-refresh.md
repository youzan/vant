<script>
import { Toast } from 'packages';

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
  },

  mounted() {
    const head = document.querySelector('.van-pull-refresh__head');
    head.insertAdjacentHTML('afterend', '<h1 class="zan-doc-demo-block__title">PullRefresh 下拉刷新</h1>');
  }
}
</script>

## PullRefresh

### Install
``` javascript
import { PullRefresh } from 'vant';

Vue.component(PullRefresh.name, PullRefresh);
```

### Usage

:::demo  
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
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 是否在加载中 | `Boolean` | - | - |
| pullingText | 下拉过程中顶部文案 | `String` | `下拉即可刷新...` | - |
| loosingText | 释放过程中顶部文案 | `String` | `释放即可刷新...` | - |
| loadingText | 加载过程中顶部文案 | `String` | `加载中...` | - |
| animationDuration | 动画时长 | `Number` | `300` | - |
| headHeight | 顶部内容高度 | `Number` | `50` | - |

### Slot

| name | Description |
|-----------|-----------|
| - | 自定义内容 |
| normal | 非下拉状态时顶部内容 |
| pulling | 下拉过程中顶部内容 |
| loosing | 释放过程中顶部内容 |
| loading | 加载过程中顶部内容 |
