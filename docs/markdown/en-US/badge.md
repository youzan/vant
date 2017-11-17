## Badge

### Install
``` javascript
import { Badge } from 'vant';

Vue.component(Badge.name, Badge);
```

### Usage

#### Basic Usage
Use `activeKey` prop to set index of chosen 'badge'

```html
<van-badge-group :activeKey="activeKey">
  <van-badge title="Title" @click="onClick"></van-badge>
  <van-badge title="Title" @click="onClick" info="8"></van-badge>
  <van-badge title="Title" @click="onClick" info="99"></van-badge>
  <van-badge title="Title" @click="onClick" info="199"></van-badge>
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
    onClick(key) {
      this.activeKey = key;
    }
  }
};
```

### BadgeGroup API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| activeKey | Index of chosen badge | `String | Number` | `0` | - |

### Badge API
| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Content | `String` | `''` | - |
| info | Info Message | `String` | `''` | - |
| url | Link | `String` | - | - |
