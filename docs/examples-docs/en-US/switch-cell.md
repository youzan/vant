## SwitchCell

`SwitchCell`组件是对`Switch`和`Cell`组件的封装

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
通过`disabled`属性可以将组件设置为禁用状态

:::demo 禁用状态
```html
<van-cell-group>
  <van-switch-cell v-model="checked" :disabled="true" title="标题" />
</van-cell-group>
```
:::

#### Loading
通过`loading`属性可以将组件设置为加载状态

:::demo 加载状态
```html
<van-cell-group>
  <van-switch-cell v-model="checked" :loading="true" title="标题" />
</van-cell-group>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 开关状态 | `Boolean` | - | - |
| title | 左侧标题 |  `String` | `''` | - |
| loading | 是否为加载状态 |  `Boolean` | `false` | - |
| disabled | 是否为禁用状态 |  `Boolean` | `false` | - |

### Event

| Event | Description | Attribute |
|-----------|-----------|-----------|
| change | 开关状态切换回调 | checked: 是否选中开关 |