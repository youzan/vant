## Checkbox

### Install
``` javascript
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
```

### Usage

#### Basic Usage

```html
<van-checkbox v-model="checked">Checkbox 1</van-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

#### Disabled

```html
<van-checkbox v-model="checked" disabled>Checkbox 2</van-checkbox>
```

#### Checkbox Group
When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

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
  }
};
```

#### Inside a Cell

```html
<van-checkbox-group v-model="result">
  <van-cell-group>
    <van-cell v-for="(item, index) in list" :key="index">
      <van-checkbox :name="item">Checkbox {{ item }}</van-checkbox>
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

#### Configure the maximum amount of checked options

```html
<van-checkbox-group v-model="result" :max="max">
  <van-cell-group>
    <van-cell v-for="(item, index) in list" :key="index">
      <van-checkbox :name="item">Checkbox {{ item }}</van-checkbox>
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

```
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b'],
      max: 2
    };
  }
};
```

### Checkbox API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| name | Checkbox name | `Boolean` | `false` | - |
| disabled | Diable checkbox | `Boolean` | `false` | - |
| shape | Checkbox shape | `String` | `round` | `square` |

### CheckboxGroup API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| disabled | Disable all checkboxes | `Boolean` | `false` | - |
| max | the maximum amount of checked options | `Number` | `0`(Unlimited) | - |

### Checkbox Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |

### CheckboxGroup Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |
