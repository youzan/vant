# Radio

### Intro

Single selection among multiple options.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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
<van-radio-group v-model="checked" shape="square">
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
</van-radio-group>

<van-radio-group v-model="checked" shape="dot">
  <van-radio name="1">Radio 1</van-radio>
  <van-radio name="2">Radio 2</van-radio>
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
      activeIcon:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactiveIcon:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
    };
  },
};
```

### Left Label

Set `label-position` prop to `'left'` to adjust the label position to the left of the Radio.

```html
<van-radio-group v-model="checked">
  <van-radio name="1" label-position="left">Radio 1</van-radio>
  <van-radio name="2" label-position="left">Radio 2</van-radio>
</van-radio-group>
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
  <van-cell-group inset>
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

### Types

The component exports the following type definitions:

```ts
import type {
  RadioProps,
  RadioShape,
  RadioGroupProps,
  RadioLabelPosition,
  RadioGroupDirection,
} from 'vant';
```

## API

### Radio Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Radio name, usually a unique string or number | _any_ | - |
| shape | Can be set to `square` `dot` | _string_ | `round` |
| disabled | Whether to disable radio | _boolean_ | `false` |
| label-disabled | Whether to disable label click | _boolean_ | `false` |
| label-position | Can be set to `left` | _string_ | `right` |
| icon-size | Icon size | _number \| string_ | `20px` |
| checked-color | Checked color | _string_ | `#1989fa` |

### RadioGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Name of checked radio | _any_ | - |
| disabled | Disable all radios | _boolean_ | `false` |
| direction | Direction, can be set to `horizontal` | _string_ | `vertical` |
| icon-size | Icon size of all radios | _number \| string_ | `20px` |
| checked-color | Checked color of all radios | _string_ | `#1989fa` |
| shape `v4.6.3` | Can be set to `square` `dot` | _string_ | `round` |

### Radio Events

| Event | Description                   | Parameters          |
| ----- | ----------------------------- | ------------------- |
| click | Emitted when radio is clicked | _event: MouseEvent_ |

### RadioGroup Events

| Event  | Description                | Parameters     |
| ------ | -------------------------- | -------------- |
| change | Emitted when value changed | _name: string_ |

### Radio Slots

| Name    | Description  | SlotProps                                 |
| ------- | ------------ | ----------------------------------------- |
| default | Custom label | _{ checked: boolean, disabled: boolean }_ |
| icon    | Custom icon  | _{ checked: boolean, disabled: boolean }_ |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-radio-size | _20px_ | - |
| --van-radio-dot-size | _8px_ | The distance between the dot and the border |
| --van-radio-border-color | _var(--van-gray-5)_ | - |
| --van-radio-duration | _var(--van-duration-fast)_ | - |
| --van-radio-label-margin | _var(--van-padding-xs)_ | - |
| --van-radio-label-color | _var(--van-text-color)_ | - |
| --van-radio-checked-icon-color | _var(--van-primary-color)_ | - |
| --van-radio-disabled-icon-color | _var(--van-gray-5)_ | - |
| --van-radio-disabled-label-color | _var(--van-text-color-3)_ | - |
| --van-radio-disabled-background | _var(--van-border-color)_ | - |
