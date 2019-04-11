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
  color="#f44"
  void-icon="star"
  void-color="#eee"
/>
```

#### Half Star

```html
<van-rate
  v-model="value"
  allow-half
  void-icon="star"
  void-color="#eee"
/>
```

```javascript
export default {
  data() {
    return {
      value: 2.5
    };
  }
}
```

#### Custom Count

```html
<van-rate v-model="value" :count="6" />
```

#### Disabled

```html
 <van-rate v-model="value" disabled />
```

#### Readonly

```html
<van-rate v-model="value" readonly />
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
| allow-half | Whether to allow half star | `Boolean` | `false` |
| readonly | Whether to be readonly | `Boolean` | `false` |
| disabled | Whether to disable rate | `Boolean` | `false` |
| disabled-color | Disabled color | `String` | `#bdbdbd` | 

### Event

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when rate changed | current rate |
