# Rate

### Install

``` javascript
import Vue from 'vue';
import { Rate } from 'vant';

Vue.use(Rate);
```

## Usage

### Basic Usage

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

```javascript
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

## API

### Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Current rate | *number* | - | - |
| count | Count | *number* | `5` | - |
| size | Icon size| *string \| number* | `20px` | - |
| gutter | Icon gutter | *string \| number* | `4px` | - |
| color | Selected color | *string* | `#ffd21e` | - |
| void-color | Void color | *string* | `#c7c7c7` | - |
| disabled-color | Disabled color | *string* | `#bdbdbd` | - |
| icon | Selected icon | *string* | `star` | - |
| void-icon | Void icon | *string* | `star-o` | - |
| allow-half | Whether to allow half star | *boolean* | `false` | - |
| readonly | Whether to be readonly | *boolean* | `false` | - |
| disabled | Whether to disable rate | *boolean* | `false` | - |
| touchable | Whether to allow select rate by touch gesture | *boolean* | `true` | 2.2.0 |

### Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when rate changed | current rate |
