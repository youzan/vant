<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  }
};
</script>

## Checkbox

### Install
``` javascript
import { Checkbox, CheckboxGroup } from 'vant';

Vue.component(Checkbox.name, Checkbox);
Vue.component(CheckboxGroup.name, CheckboxGroup);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-checkbox v-model="checkbox1">Checkbox 1</van-checkbox>
```

```javascript
export default {
  data() {
    return {
      checkbox1: true
    };
  }
};
```
:::

#### Disabled

:::demo Disabled
```html
<van-checkbox v-model="checkbox2" disabled>Checkbox 2</van-checkbox>
```
:::

#### CheckboxGroup
When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

:::demo CheckboxGroup
```html
<van-checkbox-group v-model="result">
  <van-checkbox
    v-for="(item, index) in list"
    :key="index"
    :name="item"
  >
    Checkbox {{ item }}
  </van-checkbox>
</van-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  },

  watch: {
    result(val) {
      console.log(val);
    }
  }
};
```
:::

#### Inside a Cell

:::demo Inside a Cell
```html
<van-checkbox-group v-model="result">
  <van-cell-group>
    <van-cell v-for="(item, index) in list" :key="index">
      <van-checkbox :name="item">Checkbox{{ item }}</van-checkbox>
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```
:::

### Checkbox API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| name | Checkbox name | `Boolean`  | `false` | - |
| disabled | Diable checkbox | `Boolean`  | `false` | - |
| shape | Checkbox shape | `String`  | `round` | `square` |

### CheckboxGroup API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| disabled | Disable all checkboxes | `Boolean` | `false` | - |

### Checkbox Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |

### CheckboxGroup Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |
