# PullRefresh

### Install

``` javascript
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
```

## Usage

### Basic Usage

The `refresh` event will be triggered when pull refresh, you should set `v-model` to `false` to reset loading status after process refresh event.

```html
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
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

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('Refresh Success');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Loading status | `boolean` | - |
| pulling-text | Text to show when pulling | `string` | `Pull to refresh...` |
| loosing-text | Text to show when loosing | `string` | `Loose to refresh...` |
| loading-text | Text to show when loading | `string` | `Loading...` |
| success-text | Text to show when loading success | `string` | - |
| success-duration | Success text display duration(ms) | `number` | `500` |
| animation-duration | Animation duration | `number` | `300` |
| head-height | Height of head | `number` | `50` |
| disabled | Whether to disable pull refresh | `boolean` | `false` |

### Events

| Event | Description | Parameters |
|------|------|------|
| refresh | Triggered when pull refresh | - |

### Slots

| Name | Description | scoped-slot |
|------|------|------|
| default | Default slot | - |
| normal | Content of head when at normal status | - |
| pulling | Content of head when at pulling | { distance } |
| loosing | Content of head when at loosing | { distance } |
| loading | Content of head when at loading | { distance } |
