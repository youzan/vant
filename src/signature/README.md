# Signature

### Install

```js
import Vue from 'vue';
import { Signature } from 'vant';

Vue.use(Signature);
```

## Usage

### Basic Usage

```html
<van-signature v-model="value" />
```

```js
export default {
  data() {
    return {
      value: '',
    };
  },
};
```

### Disabled

```html
<van-signature v-model="value" disabled />
```

### Custom lineWidth

```html
<van-signature v-model="value" :line-width="2" />
```

### Custom lineColor

```html
<van-signature v-model="value" lineColor="#ee0a24" />
```

```js
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {},
};
```

## API

### Props

| Attribute | Description                  | Type      | Default   |
| --------- | ---------------------------- | --------- | --------- |
| v-model   | value                        | _base64_  | ``        |
| disabled  | Whether to disable signature | _boolean_ | `false`   |
| lineWidth | width of line                | \_number  | `1`       |
| lineColor | color of line                | _string_  | `#1989fa` |

### Events

| Event | Description        | Parameters      |
| ----- | ------------------ | --------------- |
| input | Emitted when input | _value: String_ |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| ---- | ------------- | ----------- |

