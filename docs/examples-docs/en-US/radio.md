<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1'
    };
  }
};
</script>

## Radio

### Install
``` javascript
import { Radio } from 'vant';

Vue.component(Radio.name, Radio);
```

### Usage

#### Basic Usage
Use `v-model` to bind check status of radio. The value will be set to the name of radio when radio get checked.

:::demo Basic Usage
```html
<div class="van-radios">
  <van-radio name="1" v-model="radio1">Radio 1</van-radio>
  <van-radio name="2" v-model="radio1">Radio 2</van-radio>
</div>
```
```javascript
export default {
  data() {
    return {
      radio1: '1'
    }
  }
};
```
:::

#### Disabled

:::demo Disabled
```html
<div class="van-radios">
  <van-radio name="1" v-model="radio2" disabled>Disabled</van-radio>
  <van-radio name="2" v-model="radio2" disabled>Disabled and checked</van-radio>
</div>
```

```javascript
export default {
  data() {
    return {
      radio2: '2'
    }
  }
};
```
:::

#### RadioGroup
When Radios are inside a RadioGroup, the checked radio's name is bound with CheckboxGroup by `v-model`.

:::demo RadioGroup
```html
<div class="van-radios">
  <van-radio-group v-model="radio3">
    <van-radio name="1">Radio 1</van-radio>
    <van-radio name="2">Radio 2</van-radio>
  </van-radio-group>
</div>
```
  
```javascript
export default {
  data() {
    return {
      radio3: '1'
    }
  }
};
```
:::

#### With Cell

:::demo With Cell
```html
<van-radio-group v-model="radio4">
  <van-cell-group>
    <van-cell><van-radio name="1">Radio 1</van-radio></van-cell>
    <van-cell><van-radio name="2">Radio 2</van-radio></van-cell>
  </van-cell-group>
</van-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio4: '1'
    }
  }
};
```
:::

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
