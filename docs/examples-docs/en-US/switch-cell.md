## SwitchCell

`SwitchCell` component is an encapsulation of `Switch` and `Cell`.

<script>
export default {
  data() {
    return {
      checked: true
    }
  }
}
</script>

### Install
``` javascript
import { SwitchCell } from 'vant';

Vue.component(SwitchCell.name, SwitchCell);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-cell-group>
  <van-switch-cell v-model="checked" title="标题" />
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
:::

#### Disabled
use `disabled` property to disable the component

:::demo Disabled component
```html
<van-cell-group>
  <van-switch-cell v-model="checked" :disabled="true" title="标题" />
</van-cell-group>
```
:::

#### Loading
use `loading` property to keep component in loading state

:::demo Component in loading
```html
<van-cell-group>
  <van-switch-cell v-model="checked" :loading="true" title="标题" />
</van-cell-group>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | on-off state of the switch | `Boolean` | - | - |
| title | the leftside title |  `String` | `''` | - |
| loading | whether the component is in loading state |  `Boolean` | `false` | - |
| disabled | whether to disable the component |  `Boolean` | `false` | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| change | triggered when the on-off state is changed | checked: switch is on or not |