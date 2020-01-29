# SwitchCell

### Deprecate Tip

The SwitchCell component will be deprecated in version 3.0. Please use the Cell and Switch components instead.

### Install

```js
import Vue from 'vue';
import { SwitchCell } from 'vant';

Vue.use(SwitchCell);
```

## Usage

### Basic Usage

```html
<van-cell-group>
  <van-switch-cell v-model="checked" title="Title" />
</van-cell-group>
```

```js
export default {
  data() {
    return {
      checked: true
    }
  }
}
```

### Disabled

use `disabled` property to disable the component

```html
<van-cell-group>
  <van-switch-cell v-model="checked" disabled title="Title" />
</van-cell-group>
```

### Loading

use `loading` property to keep component in loading state

```html
<van-cell-group>
  <van-switch-cell v-model="checked" loading title="Title" />
</van-cell-group>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | on-off state of the switch | *any* | `false` |
| title | the left side title | *string* | `''` |
| border | whether to show cell border | *boolean* | `true` |
| cell-size | Cell size，can be set to `large` | *string* | - |
| loading | whether switch is loading | *boolean* | `false` |
| disabled | whether to disable switch | *boolean* | `false` |
| size | Size of switch | *number \| string* | `24px` |
| active-color | Background of switch color when active | *string* | `#1989fa` |
| inactive-color | Background of switch color when inactive | *string* | `white` |
| active-value | Value when active | *any* | `true` |
| inactive-value | Value when inactive | *any* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | triggered when the on-off state is changed | checked: switch is on or not |
