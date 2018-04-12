## Radio

### Install
``` javascript
import { Radio } from 'vant';

Vue.use(Radio);
```

### Usage

#### Basic Usage
Use `v-model` to bind the name of checked radio

```html
<van-radio-group v-model="radio">
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
</van-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

#### Disabled

```html
<van-radio-group v-model="radio" disabled>
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
</van-radio-group>
```

#### Inside a Cell

```html
<van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell><van-radio name="1">Radio 1</van-radio></van-cell>
    <van-cell><van-radio name="2">Radio 2</van-radio></van-cell>
  </van-cell-group>
</van-radio-group>
```

### Radio API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| name | Radio name | `any` | - | - |
| disabled | Whether to disable radio | `Boolean` | `false` | - |

### RadioGroup API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | Name of checked radio | `any` | - | - |
| disabled | Diable all radios | `Boolean` | `false` | - |

### RadioGroup Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |
