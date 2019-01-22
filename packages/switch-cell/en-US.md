## SwitchCell
`SwitchCell` component is an encapsulation of `Switch` and `Cell`.

### Install
``` javascript
import { SwitchCell } from 'vant';

Vue.use(SwitchCell);
```

### Usage

#### Basic Usage

```html
<van-cell-group>
  <van-switch-cell v-model="checked" title="Title" />
</van-cell-group>
```

```javascript
export default {
  data() {
    return {
      checked: true
    }
  }
}
```


#### Disabled

use `disabled` property to disable the component

```html
<van-cell-group>
  <van-switch-cell v-model="checked" disabled title="Title" />
</van-cell-group>
```


#### Loading

use `loading` property to keep component in loading state

```html
<van-cell-group>
  <van-switch-cell v-model="checked" loading title="Title" />
</van-cell-group>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | on-off state of the switch | `any` | `false` |
| title | the leftside title |  `String` | `''` |
| loading | whether switch is loading |  `Boolean` | `false` |
| disabled | whether to disable switch |  `Boolean` | `false` |
| size | Size of switch | `String` | `24px` |
| active-color | Background of switch color when active | `String` | `#1989fa` |
| inactive-color | Background of switch color when inactive | `String` | `#fff` |
| active-value | Value when active | `any` | `true` |
| inactive-value | Value when inactive | `any` | `false` |

### Event

| Event | Description | Arguments |
|------|------|------|
| change | triggered when the on-off state is changed | checked: switch is on or not |
