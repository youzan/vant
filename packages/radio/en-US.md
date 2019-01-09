## Radio

### Install
``` javascript
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
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

#### Custom Color

```html
<van-radio checked-color="#07c160">Radio</van-radio>
```

#### Inside a Cell

```html
<van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="Radio 1" clickable @click="radio = '1'">
      <van-radio name="1" />
    </van-cell>
    <van-cell title="Radio 2" clickable @click="radio = '2'">
      <van-radio name="2" />
    </van-cell>
  </van-cell-group>
</van-radio-group>
```

### Radio API

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Radio name | `any` | - |
| disabled | Whether to disable radio | `Boolean` | `false` |
| label-disabled | Whether to disable label click | `Boolean` | `false` |
| label-position | Can be set to `left` | `String` | `right` |
| checked-color | Checked color | `String` | `#1989fa` | - |

### RadioGroup API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Name of checked radio | `any` | - |
| disabled | Diable all radios | `Boolean` | `false` |

### RadioGroup Event

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |
