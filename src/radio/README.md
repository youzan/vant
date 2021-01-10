# Radio

### Install

```js
import { createApp } from 'vue';
import { RadioGroup, Radio } from 'vant';

const app = createApp();
app.use(Radio);
app.use(RadioGroup);
```

## Usage

### Basic Usage

Use `v-model` to bind the name of checked radio.

```html
<van-radio-group v-model="checked">
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
</van-radio-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref('1');
    return { checked };
  },
};
```

### Horizontal

```html
<van-radio-group v-model="checked" direction="horizontal">
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
</van-radio-group>
```

### Disabled

```html
<van-radio-group v-model="checked" disabled>
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
</van-radio-group>
```

### Custom Shape

```html
<van-radio-group v-model="checked">
  <van-radio name="1" shape="square">Radio 1</van-radio>
  <van-radio name="2" shape="square">Radio 2</van-radio>
</van-radio-group>
```

### Custom Color

```html
<van-radio-group v-model="checked">
  <van-radio name="1" checked-color="#ee0a24">Radio 1</van-radio>
  <van-radio name="2" checked-color="#ee0a24">Radio 2</van-radio>
</van-radio-group>
```

### Custom Icon Size

```html
<van-radio-group v-model="checked">
  <van-radio name="1" icon-size="24px">Radio 1</van-radio>
  <van-radio name="2" icon-size="24px">Radio 2</van-radio>
</van-radio-group>
```

### Custom Icon

Use icon slot to custom icon

```html
<van-radio-group v-model="checked">
  <van-radio name="1">
    Radio 1
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </van-radio>
  <van-radio name="2">
    Radio 2
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </van-radio>
</van-radio-group>

<style>
  .img-icon {
    height: 20px;
  }
</style>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref('1');
    return {
      checked,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    };
  },
};
```

### Disable Label Click

```html
<van-radio-group v-model="checked">
  <van-radio name="1" label-disabled>Radio 1</van-radio>
  <van-radio name="2" label-disabled>Radio 2</van-radio>
</van-radio-group>
```

### Inside a Cell

```html
<van-radio-group v-model="checked">
  <van-cell-group>
    <van-cell title="Radio 1" clickable @click="checked = '1'">
      <template #right-icon>
        <van-radio name="1" />
      </template>
    </van-cell>
    <van-cell title="Radio 2" clickable @click="checked = '2'">
      <template #right-icon>
        <van-radio name="2" />
      </template>
    </van-cell>
  </van-cell-group>
</van-radio-group>
```

## API

### Radio Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Radio name | _any_ | - |
| shape | Can be set to `square` | _string_ | `round` |
| disabled | Whether to disable radio | _boolean_ | `false` |
| label-disabled | Whether to disable label click | _boolean_ | `false` |
| label-position | Can be set to `left` | _string_ | `right` |
| icon-size | Icon size | _number \| string_ | `20px` |
| checked-color | Checked color | _string_ | `#1989fa` | - |

### RadioGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Name of checked radio | _any_ | - |
| disabled | Disable all radios | _boolean_ | `false` |
| direction | Direction, can be set to `horizontal` | _string_ | `vertical` |
| icon-size | Icon size of all radios | _number \| string_ | `20px` |
| checked-color | Checked color of all radios | _string_ | `#1989fa` | - |

### Radio Events

| Event | Description                   | Parameters     |
| ----- | ----------------------------- | -------------- |
| click | Emitted when radio is clicked | _event: Event_ |

### RadioGroup Events

| Event  | Description                | Parameters     |
| ------ | -------------------------- | -------------- |
| change | Emitted when value changed | _name: string_ |

### Radio Slots

| Name    | Description  | SlotProps          |
| ------- | ------------ | ------------------ |
| default | Custom label | -                  |
| icon    | Custom icon  | _checked: boolean_ |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                             | Default Value              | Description |
| -------------------------------- | -------------------------- | ----------- |
| @radio-size                      | `20px`                     | -           |
| @radio-border-color              | `@gray-5`                  | -           |
| @radio-transition-duration       | `@animation-duration-fast` | -           |
| @radio-label-margin              | `@padding-xs`              | -           |
| @radio-label-color               | `@text-color`              | -           |
| @radio-checked-icon-color        | `@blue`                    | -           |
| @radio-disabled-icon-color       | `@gray-5`                  | -           |
| @radio-disabled-label-color      | `@gray-5`                  | -           |
| @radio-disabled-background-color | `@border-color`            | -           |
