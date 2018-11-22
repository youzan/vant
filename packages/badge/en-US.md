## Badge

### Install
``` javascript
import { Badge, BadgeGroup } from 'vant';

Vue.use(Badge);
Vue.use(BadgeGroup);
```

### Usage

#### Basic Usage
Use `active-key` prop to set index of chosen 'badge'

```html
<van-badge-group :active-key="activeKey" @change="onChange">
  <van-badge title="Title" />
  <van-badge title="Title" info="8" />
  <van-badge title="Title" info="99" />
  <van-badge title="Title" info="99+" />
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

| Attribute | Description | Type | Default |
|------|------|------|------|
| active-key | Index of chosen badge | `String | Number` | `0` |

### BadgeGroup Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when badge changed | key: index of current badge |

### Badge API

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Content | `String` | `''` |
| info | Info Message | `String | Number` | `''` |
| url | Link | `String` | - |

### Badge Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click badge | key: index of current badge |
