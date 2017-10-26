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
          Toast('Refresh Success');
          this.isLoading = false;
          this.count++;
        }, 500);
      }
    }
  },

  mounted() {
    const head = document.querySelector('.van-pull-refresh__head');
    head.insertAdjacentHTML('afterend', '<h1 class="zan-doc-demo-block__title">PullRefresh</h1>');
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
<!-- use v-model to control loading status -->
<van-pull-refresh
  v-model="isLoading"
  pulling-text="Pull to refresh..."
  loosing-text="Loose to refresh..."
  loading-text="Loading..."
>
  <p>Refresh Count: {{ count }}</p>
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
          Toast('Refresh Success');
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
| v-model | Loading status | `Boolean` | - | - |
| pullingText | Text to show when pulling | `String` | `下拉即可刷新...` | - |
| loosingText | Text to show when loosing | `String` | `释放即可刷新...` | - |
| loadingText | Text to show when loading | `String` | `加载中...` | - |
| animationDuration | Animation duration | `Number` | `300` | - |
| headHeight | Height of head | `Number` | `50` | - |

### Slot

| name | Description |
|-----------|-----------|
| - | Default slot |
| normal | Content of head when at normal status |
| pulling | Content of head when at pulling |
| loosing | Content of head when at loosing |
| loading | Content of head when at loading |
