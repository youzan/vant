# Radio

### Install

``` javascript
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);
```

## Usage

### Basic Usage

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

### Disabled

```html
<van-radio-group v-model="radio" disabled>
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
</van-radio-group>
```

### Custom Color

```html
<van-radio-group v-model="radio">
  <van-radio name="1" checked-color="#07c160">Radio 1</van-radio>
  <van-radio name="2" checked-color="#07c160">Radio 2</van-radio>
</van-radio-group>
```

### Custom Icon

Use icon slot to custom icon

```html
<van-radio-group v-model="radio">
  <van-radio name="1">
    Radio 1
    <img
      slot="icon"
      slot-scope="props"
      :src="props.checked ? icon.active : icon.inactive"
    >
  </van-radio>
  <van-radio name="2">
    Radio 2
    <img
      slot="icon"
      slot-scope="props"
      :src="props.checked ? icon.active : icon.inactive"
    >
  </van-radio>
</van-radio-group>
```

```js
export default {
  data() {
    radio: '1',
    icon: {
      active: 'https://img.yzcdn.cn/vant/user-active.png',
      inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
    }
  }
}
```

### Inside a Cell

```html
<van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="Radio 1" clickable @click="radio = '1'">
      <van-radio slot="right-icon" name="1" />
    </van-cell>
    <van-cell title="Radio 2" clickable @click="radio = '2'">
      <van-radio slot="right-icon" name="2" />
    </van-cell>
  </van-cell-group>
</van-radio-group>
```

## API

### Radio Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Radio name | `any` | - |
| shape | Can be set to `square` | `string` | `round` |
| disabled | Whether to disable radio | `boolean` | `false` |
| icon-size | Icon size | `string | number` | `20px` |
| label-disabled | Whether to disable label click | `boolean` | `false` |
| label-position | Can be set to `left` | `string` | `right` |
| checked-color | Checked color | `string` | `#1989fa` | - |

### RadioGroup Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Name of checked radio | `any` | - |
| disabled | Diable all radios | `boolean` | `false` |

### Radio Events

| Event | Description | Parameters |
|------|------|------|
| click | Triggered when click radio | event: Event |

### RadioGroup Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |

### Radio Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom label | - |
| icon | Custom icon | checked: whether to be checked |
