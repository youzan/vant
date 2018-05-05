## Checkbox

### Install
``` javascript
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
```

### Usage

#### Basic Usage

```html
<van-checkbox v-model="checked">Checkbox</van-checkbox>
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
<van-checkbox v-model="checked" disabled>Checkbox</van-checkbox>
```

#### Disable Label click event

```html
<van-checkbox v-model="checked" label-disabled>Checkbox</van-checkbox>
```

#### Checkbox Group
When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

```html
<van-checkbox-group v-model="result">
  <van-checkbox
    v-for="(item, index) in list"
    :key="item"
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

#### Maximum amount of checked options

```html
<van-checkbox-group v-model="result" :max="2">
  <van-checkbox
    v-for="(item, index) in list"
    :name="item"
    :key="item"
  >
    Checkbox {{ item }}
  </van-checkbox>
</van-checkbox-group>
```

#### Inside a Cell

```html
<van-checkbox-group v-model="result">
  <van-cell-group>
    <van-cell v-for="item in list" :title="`Checkbox ${item}`" :key="item">
      <van-checkbox :name="item" />
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

### Checkbox API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| v-model | Check status | `Boolean` | `false` |
| name | Checkbox name | `any` | - |
| disabled | Diable checkbox | `Boolean` | `false` |
| label-disabled | Whether to disable label click | `Boolean` | `false` |
| shape | Can be set to `round` `square` | `String` | `round` |

### CheckboxGroup API

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-------------|
| v-model | Names of all checked checkboxes | `Array` | - |
| disabled | Disable all checkboxes | `Boolean` | `false` |
| max | Maximum amount of checked options | `Number` | `0`(Unlimited) |

### Checkbox Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |

### CheckboxGroup Event

| Event | Description | Parameters |
|-----------|-----------|-----------|
| change | Triggered when value changed | current value |
