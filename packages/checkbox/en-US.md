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

#### Custom Color

```html
<van-checkbox v-model="checked" checked-color="#07c160">Checkbox</van-checkbox>
```

#### Custom Icon

Use icon slot to custom icon

```html
<van-checkbox v-model="checked">
  Custom Icon
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? icon.active : icon.normal"
  >
</van-checkbox>
```

```js
export default {
  data() {
    checked: true,
    icon: {
      normal: '//img.yzcdn.cn/icon-normal.png',
      active: '//img.yzcdn.cn/icon-active.png'
    }
  }
}
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
    <van-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`Checkbox ${item}`"
      @click="toggle(index)"
    >
      <van-checkbox :name="item" ref="checkboxes" />
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
```

```js
export default {
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```


### Checkbox API

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Checkbox name | `any` | - |
| shape | Can be set to `square` | `String` | `round` |
| v-model | Check status | `Boolean` | `false` |
| disabled | Diable checkbox | `Boolean` | `false` |
| label-disabled | Whether to disable label click | `Boolean` | `false` |
| label-position | Can be set to `left` | `String` | `right` |
| checked-color | Checked color | `String` | `#1989fa` | - |

### CheckboxGroup API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Names of all checked checkboxes | `Array` | - |
| disabled | Disable all checkboxes | `Boolean` | `false` |
| max | Maximum amount of checked options | `Number` | `0`(Unlimited) |

### Checkbox Event

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |
| click | Triggered when click checkbox | event: Event |

### CheckboxGroup Event

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |

### Checkbox Slot

| Name | Description | slot-scope |
|------|------|------|
| - | Custom label | - |
| icon | Custom icon | checked: whether to be checked |

### Checkbox Methods

Use ref to get checkbox instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| toggle | - | - | Toggle check status |
