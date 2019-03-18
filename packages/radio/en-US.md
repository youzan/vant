## Radio

### Install
``` javascript
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);
```

### Usage

#### Basic Usage

Use `v-model` to bind the name of checked radio

```html
<van-radio-group v-model="radio">
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
</van-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

#### Disabled

```html
<van-radio-group v-model="radio" disabled>
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
</van-radio-group>
```

#### Custom Color

```html
<van-radio checked-color="#07c160">Radio</van-radio>
```

#### Custom Icon

Use icon slot to custom icon

```html
<van-radio v-model="checked">
  Custom Icon
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? icon.active : icon.normal"
  >
</van-radio>
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

#### Inside a Cell

```html
<van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="Radio 1" clickable @click="radio = '1'">
      <van-radio name="1" />
    </van-cell>
    <van-cell title="Radio 2" clickable @click="radio = '2'">
      <van-radio name="2" />
    </van-cell>
  </van-cell-group>
</van-radio-group>
```

### Radio API

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Radio name | `any` | - |
| shape | Can be set to `square` | `String` | `round` |
| disabled | Whether to disable radio | `Boolean` | `false` |
| label-disabled | Whether to disable label click | `Boolean` | `false` |
| label-position | Can be set to `left` | `String` | `right` |
| checked-color | Checked color | `String` | `#1989fa` | - |

### RadioGroup API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Name of checked radio | `any` | - |
| disabled | Diable all radios | `Boolean` | `false` |

### Radio Event

| Event | Description | Parameters |
|------|------|------|
| click | Triggered when click radio | event: Event |

### RadioGroup Event

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |

### Radio Slot

| Name | Description | slot-scope |
|------|------|------|
| - | Custom label | - |
| icon | Custom icon | checked: whether to be checked |
