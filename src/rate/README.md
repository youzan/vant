# Rate

### Install

```js
import Vue from 'vue';
import { Rate } from 'vant';

Vue.use(Rate);
```

## Usage

### Basic Usage

```html
<van-rate v-model="value" />
```

```js
export default {
  data() {
    return {
      value: 3
    };
  }
}
```

### Custom Icon

```html
<van-rate
  v-model="value"
  icon="like"
  void-icon="like-o"
/>
```

### Custom Style

```html
<van-rate
  v-model="value"
  :size="25"
  color="#ee0a24"
  void-icon="star"
  void-color="#eee"
/>
```

### Half Star

```html
<van-rate
  v-model="value"
  allow-half
  void-icon="star"
  void-color="#eee"
/>
```

```js
export default {
  data() {
    return {
      value: 2.5
    };
  }
}
```

### Custom Count

```html
<van-rate v-model="value" :count="6" />
```

### Disabled

```html
 <van-rate v-model="value" disabled />
```

### Readonly

```html
<van-rate v-model="value" readonly />
```

### Change Event

```html
<van-rate v-model="value" @change="onChange" />
```

```javascript
export default {
  method: {
    onChange(value) {
       Toast('current value:'+ value);
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current rate | *number* | - |
| count | Count | *number \| string* | `5` |
| size | Icon size| *number \| string* | `20px` |
| gutter | Icon gutter | *number \| string* | `4px` |
| color | Selected color | *string* | `#ffd21e` |
| void-color | Void color | *string* | `#c8c9cc` |
| disabled-color | Disabled color | *string* | `#bdbdbd` |
| icon | Selected icon | *string* | `star` |
| void-icon | Void icon | *string* | `star-o` |
| icon-prefix `v2.5.3` | Icon className prefix | *string* | `van-icon` |
| allow-half | Whether to allow half star | *boolean* | `false` |
| readonly | Whether to be readonly | *boolean* | `false` |
| disabled | Whether to disable rate | *boolean* | `false` |
| touchable `v2.2.0` | Whether to allow select rate by touch gesture | *boolean* | `true` |

### Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when rate changed | current rate |
