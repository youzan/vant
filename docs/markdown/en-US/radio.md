## Radio

### Install
``` javascript
import { Radio } from 'vant';

Vue.component(Radio.name, Radio);
```

### Usage

#### Basic Usage
Use `v-model` to bind check status of radio. The value will be set to the name of radio when radio get checked.

```html
<van-radio name="1" v-model="radio">Radio 1</van-radio>
<van-radio name="2" v-model="radio">Radio 2</van-radio>
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
<van-radio name="1" v-model="radio" disabled>Disabled</van-radio>
<van-radio name="2" v-model="radio" disabled>Disabled and checked</van-radio>
```


#### Radio Group
When Radios are inside a RadioGroup, the checked radio's name is bound with CheckboxGroup by `v-model`.

```html
<van-radio-group v-model="radio">
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
| disabled | Diable radio | `Boolean` | `false` | - |
| name | Radio name | `Boolean` | `false` | - |

### RadioGroup API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| disabled | Diable all radios | `Boolean` | `false` | - |

### RadioGroup Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |
