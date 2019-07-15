# DropdownMenu

### Install

``` javascript
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);
```

## Usage

### Basic Usage

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 }
      ],
      option2: [
        { text: 'Option A', value: 'a' },
        { text: 'Option B', value: 'b' },
        { text: 'Option C', value: 'c' },
      ]
    }
  }
};
```

### Custom Content

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value" :options="option" />
  <van-dropdown-item title="Title" ref="item">
    <van-switch-cell v-model="switch1" title="Title" />
    <van-switch-cell v-model="switch2" title="Title" />
    <van-button block type="info" @click="onConfirm">Confirm</van-button>
  </van-dropdown-item>
</van-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 }
      ]
    }
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
```

### Expand Direction

```html
<van-dropdown-menu direction="up">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

### Disabled

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" disabled :options="option1" />
  <van-dropdown-item v-model="value2" disabled :options="option2" />
</van-dropdown-menu>
```

## API

### DropdownMenu Props

| Attribute | Description | Type | Default |
|------|------|------|------|------|
| active-color | Active color of title and option | `string` | `#1989fa` |
| z-index | z-index of menu item | `number` | `10` |
| duration | Transition duration, unit second | `number` | `0.2` |
| direction | Expand direction, can be set to `up` | `string` | `down` |
| overlay | Whether to show overlay | `boolean` | `true` |
| close-on-click-overlay | Whether to close when click overlay | `boolean` | `true` |
| close-on-click-outside | Whether to close when click outside | `boolean` | `true` |

### DropdownItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|------|
| value | Value of current option，can use `v-model` | `string | number` | - |
| title | Item title | `string` | Text of selected option |
| options | Options | `Option[]` | `[]` |
| disabled | Whether to disable dropdown item | `boolean` | `false` |
| title-class | Title class | `string` | - |

### DropdownItem Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered select option and value changed | value |
| open | Triggered when open menu | - |
| opened | Triggered when opened menu | - |
| close | Triggered when close menu | - |

### DropdownItem Methods

Use ref to get DropdownItem instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| toggle | show: boolean | - | Toggle display |

### Data Structure of Option

| Key | Description | Type |
|------|------|------|
| text | Text | `string` |
| value | Value | `string | number` |
| icon | Left icon | `string` |
