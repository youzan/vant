## List
A list component to show items and control loading status.

### Install
``` javascript
import { List } from 'vant';

Vue.use(List);
```

### Usage

#### Basic Usage

```html
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="Finished"
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

| Attribute | Description | Type | Default |
|------|------|------|------|
| loading | Whether to show loading info，the `load` event will not be triggered when loading | `Boolean` | `false` |
| finished | Whether loading is finished，the `load` event will not be triggered when finished | `Boolean` | `false` |
| offset | The load event will be triggered when the distance between the scrollbar and the bottom is less than offset | `Number` | `300` |
| loading-text | Loading text | `String` | `Loading...` |
| finished-text | Finished text | `String` | - |
| immediate-check | Whether to check loading position immediately after mounted | `Boolean` | `true` |

### Event

| Event | Description | Arguments |
|------|------|------|
| load | Triggered when the distance between the scrollbar and the bottom is less than offset | - |

### Methods

Use ref to get list instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| check | - | - | Check scroll position |

### Slot

| Name | Description |
|------|------|
| - | List content |
| loading | Custom loading tips |
