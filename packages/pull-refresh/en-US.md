## PullRefresh

### Install
``` javascript
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
```

### Usage

#### Basic Usage
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

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Loading status | `Boolean` | - |
| pulling-text | Text to show when pulling | `String` | `Pull to refresh...` |
| loosing-text | Text to show when loosing | `String` | `Loose to refresh...` |
| loading-text | Text to show when loading | `String` | `Loading...` |
| success-text | Text to show when loading success | `String` | - |
| success-duration | Success text display duration(ms) | `Number` | `500` |
| animation-duration | Animation duration | `Number` | `300` |
| head-height | Height of head | `Number` | `50` |
| disabled | Whether to disable | `Boolean` | `false` |


### Event

| Event | Description | Parameters |
|------|------|------|
| refresh | Triggered when pull refresh | - |


### Slot

| name | Description |
|------|------|
| - | Default slot |
| normal | Content of head when at normal status |
| pulling | Content of head when at pulling |
| loosing | Content of head when at loosing |
| loading | Content of head when at loading |
