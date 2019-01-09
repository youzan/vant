## Rate

### Install
``` javascript
import { Rate } from 'vant';

Vue.use(Rate);
```

### Usage

#### Basic Usage

```html
<van-rate v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 3
    };
  }
}
```

#### Custom Icon

```html
<van-rate
  v-model="value"
  icon="like"
  void-icon="like-o"
/>
```

#### Custom Style

```html
<van-rate
  v-model="value"
  :size="25"
  :count="6"
  color="#07c160"
  void-color="#ceefe8"
/>
```

#### Disabled

```html
 <van-rate v-model="value" disabled />
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current rate | `Number` | - |
| count | Count | `Number` | `5` |
| size | Icon size (px) | `Number` | `20` |
| color | Selected color | `String` | `#ffd21e` |
| void-color | Void color | `String` | `#c7c7c7` |
| icon | Selected icon | `String` | `star` |
| void-icon | Void icon | `String` | `star-o` |
| readonly | Whether to be readonly | `Boolean` | `false` |
| disabled | Whether to disable rate | `Boolean` | `false` |
| disabled-color | Disabled color | `String` | `#bdbdbd` | 

### Event

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when rate changed | current rate |
