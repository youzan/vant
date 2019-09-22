# Checkbox

### Install

``` javascript
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
```

## Usage

### Basic Usage

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

### Disabled

```html
<van-checkbox v-model="checked" disabled>Checkbox</van-checkbox>
```

### Custom Color

```html
<van-checkbox v-model="checked" checked-color="#07c160">Checkbox</van-checkbox>
```

### Custom Icon

Use icon slot to custom icon

```html
<van-checkbox v-model="checked">
  Custom Icon
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? icon.active : icon.inactive"
  >
</van-checkbox>
```

```js
export default {
  data() {
    return {
      checked: true,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  }
};
```

### Checkbox Group

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

### Maximum amount of checked options

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

### Inside a Cell

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
      <van-checkbox
        :name="item"
        ref="checkboxes"
        slot="right-icon"
      />
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

## API

### Checkbox Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| name | Checkbox name | *any* | - | - |
| shape | Can be set to `square` | *string* | `round` | - |
| v-model | Check status | *boolean* | `false` | - |
| disabled | Disable checkbox | *boolean* | `false` | - |
| label-disabled | Whether to disable label click | *boolean* | `false` | - |
| label-position | Can be set to `left` | *string* | `right` | - |
| icon-size | Icon size | *string \| number* | `20px` | - |
| checked-color | Checked color | *string* | `#1989fa` | - | - |

### CheckboxGroup Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| v-model | Names of all checked checkboxes | *any[]* | - | - |
| max | Maximum amount of checked options | *number* | `0`(Unlimited) | - |
| disabled | Disable all checkboxes | *boolean* | `false` | - |
| icon-size | Icon size of all checkboxes | *string \| number* | `20px` | 2.2.3 |
| checked-color | Checked color of all checkboxes | *string* | `#1989fa` | - | 2.2.3 |

### Checkbox Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |
| click | Triggered when click checkbox | event: Event |

### CheckboxGroup Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |

### Checkbox Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom label | - |
| icon | Custom icon | checked: whether to be checked |

### Checkbox Methods

Use ref to get checkbox instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| toggle | Toggle check status | - | - |
