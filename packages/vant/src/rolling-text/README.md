# RollingText

### Introduction

Rolling text animation, which can roll numbers and other types of text.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { RollingText } from 'vant';

const app = createApp();
app.use(RollingText);
```

## Usage

### Basic Usage

```html
<van-rolling-text
  :start-num="0"
  :target-num="123"
  :duration="2"
  :auto-start="false"
  direction="down"
/>
```

### Set Rolling Direction

You can set the rolling direction of the number by using the `direction` property. `up` represents rolling up.

```html
<van-rolling-text
  :start-num="0"
  :target-num="432"
  :duration="2"
  :auto-start="false"
  direction="up"
/>
```

### Set Stop Order

You can set the order of stopping the animation of each digit through the `stop-order` prop. By default, it stops from the higher digits. Setting `rtl` can stop from the ones digit.

```html
<van-rolling-text
  :start-num="0"
  :target-num="54321"
  :duration="2"
  :auto-start="false"
  stop-order="rtl"
  direction="up"
/>
```

### Roll Non-numeric Text

You can set non-numeric content flip using the `text-array` props.

```html
<van-rolling-text
  :text-array="textArray"
  :duration="1"
  :auto-start="false"
  stop-order="rtl"
  direction="up"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const textArray = ref([
      'aaaaa',
      'bbbbb',
      'ccccc',
      'ddddd',
      'eeeee',
      'fffff',
      'ggggg',
    ]);
    return { textArray };
  },
};
```

### Custom Style

```html
<van-rolling-text
  class="my-rolling-text"
  :start-num="12345"
  :target-num="54321"
  :duration="2"
  stop-order="rtl"
  direction="up"
  :height="70"
/>
```

```css
.my-rolling-text {
  --van-rolling-text-background: deepskyblue;
  --van-rolling-text-color: white;
  --van-rolling-text-font-size: 40px;
  --van-rolling-text-gap: 6px;
  --van-rolling-text-item-border-radius: 5px;
  --van-rolling-text-item-width: 50px;
}
```

### Manual Control

After getting the component instance through `ref`, you can call the `start` and `reset` methods.

```html
<van-rolling-text
  ref="rollingTextRef"
  :start-num="0"
  :target-num="54321"
  :duration="2"
  :auto-start="false"
  stop-order="rtl"
  direction="up"
/>
<van-grid clickable :column-num="3">
  <van-grid-item icon="play-circle-o" :text="start" @click="start" />
  <van-grid-item icon="replay" :text="reset" @click="reset" />
</van-grid>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const rollingTextRef = ref(null);
    const start = () => {
      rollingTextRef.value.start();
    };
    const reset = () => {
      rollingTextRef.value.reset();
    };
    return { rollingTextRef, start, reset };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| start-num | Start number | _number_ | `0` |
| target-num | Target number | _number_ | - |
| text-array | Text array | _Array_ | `[]` |
| duration | Duration of the animation, in seconds | _number_ | `2` |
| direction | Rolling direction of the text, with `down` and `up` as the values | _string_ | `down` |
| auto-start | Whether to start the animation | _boolean_ | `true` |
| stop-order | Order of stopping the animation of each digit, with `ltr` and `rtl` as the values | _string_ | `ltr` |
| height | Height of digit, `px` as unit | _number_ | `40` |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get RollingText instance and call instance methods.

| Name  | Description         | Attribute | Return value |
| ----- | ------------------- | --------- | ------------ |
| start | Start the animation | -         | -            |
| reset | Reset the animation | -         | -            |

### Types

The component exports the following type definitions:

```ts
import type {
  RollingTextProps,
  RollingTextInstance,
  RollingTextDirection,
  RollingTextStopOrder,
} from 'vant';
```

`RollingTextInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { RollingTextInstance } from 'vant';

const rollingTextRef = ref<RollingTextInstance>();

rollingTextRef.value?.start();
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-rolling-text-background | _inherit_ | Background color of a single digit |
| --van-rolling-text-color | _var(--van-text-color)_ | Color of the number |
| --van-rolling-text-font-size | _var(--van-font-size-md)_ | Font size of the number |
| --van-rolling-text-gap | _0px_ | Spacing between digits |
| --van-rolling-text-item-width | _15px_ | Width of a single digit |
| --van-rolling-text-item-border-radius | _0px_ | Border radius of a single digit |
