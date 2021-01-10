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
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(3);
    return { value };
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
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(2.5);
    return { value };
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
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const value = ref(3);
    const onChange = (value) => {
      Toast('current value:' + value);
    };
    return {
      value,
      onChange,
    };
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
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| allow-half | Whether to allow half star | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| disabled | Whether to disable rate | _boolean_ | `false` |
| touchable | Whether to allow select rate by touch gesture | _boolean_ | `true` |

### Events

| Event  | Description               | Parameters   |
| ------ | ------------------------- | ------------ |
| change | Emitted when rate changed | current rate |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                      | Default Value   | Description |
| ------------------------- | --------------- | ----------- |
| @rate-icon-size           | `20px`          | -           |
| @rate-icon-gutter         | `@padding-base` | -           |
| @rate-icon-void-color     | `@gray-5`       | -           |
| @rate-icon-full-color     | `@red`          | -           |
| @rate-icon-disabled-color | `@gray-5`       | -           |
