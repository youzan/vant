# Rate

### Install

```js
import { createApp } from 'vue';
import { Rate } from 'vant';

const app = createApp();
app.use(Rate);
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
      value: 3,
    };
  },
};
```

### Custom Icon

```html
<van-rate v-model="value" icon="like" void-icon="like-o" />
```

### Custom Style

```html
<van-rate
  v-model="value"
  :size="25"
  color="#ffd21e"
  void-icon="star"
  void-color="#eee"
/>
```

### Half Star

```html
<van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
```

```js
export default {
  data() {
    return {
      value: 2.5,
    };
  },
};
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
      Toast('current value:' + value);
    },
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current rate | _number_ | - |
| count | Count | _number \| string_ | `5` |
| size | Icon size | _number \| string_ | `20px` |
| gutter | Icon gutter | _number \| string_ | `4px` |
| color | Selected color | _string_ | `#ee0a24` |
| void-color | Void color | _string_ | `#c8c9cc` |
| disabled-color | Disabled color | _string_ | `#c8c9cc` |
| icon | Selected icon | _string_ | `star` |
| void-icon | Void icon | _string_ | `star-o` |
| icon-prefix `v2.5.3` | Icon className prefix | _string_ | `van-icon` |
| allow-half | Whether to allow half star | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| disabled | Whether to disable rate | _boolean_ | `false` |
| touchable | Whether to allow select rate by touch gesture | _boolean_ | `true` |

### Events

| Event  | Description                 | Parameters   |
| ------ | --------------------------- | ------------ |
| change | Triggered when rate changed | current rate |
