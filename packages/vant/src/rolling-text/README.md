# RollingText

### Introduction

Rolling text animation, which can roll numbers and other types of text. Please upgrade `vant` to >= v4.6.0 before using this component.

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

You can set the starting value with `start-num` and the target value with `target-num`. The RollingText component will automatically start the animation, rolling from the starting value to the target value.

```html
<van-rolling-text :start-num="0" :target-num="123" />
```

### Set Rolling Direction

You can set the rolling direction of the numbers using the `direction` prop. By default, it rolls downwards, but you can set it to `up` to roll upwards.

```html
<van-rolling-text :start-num="0" :target-num="432" direction="up" />
```

### Set Stop Order

You can set the order of stopping the animation of each digit through the `stop-order` prop. By default, it stops from the higher digits. Setting `rtl` can stop from the ones digit.

```html
<van-rolling-text :start-num="0" :target-num="54321" stop-order="rtl" />
```

### Roll Non-numeric Text

You can reverse non-numeric content by using the `text-list` prop. The component will rolling from the first item to the last item in the array. Please make sure that the array length is greater than or equal to 2, and that each item has the same length.

```html
<van-rolling-text :text-list="textList" :duration="1" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const textList = ref([
      'aaaaa',
      'bbbbb',
      'ccccc',
      'ddddd',
      'eeeee',
      'fffff',
      'ggggg',
    ]);
    return { textList };
  },
};
```

### Custom Style

The RollingText component provides some CSS variables that you can override to customize the style, or you can directly modify the component's style. Additionally, you can set the height of the numbers using the `height` prop.

```html
<van-rolling-text
  class="my-rolling-text"
  :height="54"
  :start-num="12345"
  :target-num="54321"
/>
```

```css
.my-rolling-text {
  --van-rolling-text-background: #1989fa;
  --van-rolling-text-color: white;
  --van-rolling-text-font-size: 24px;
  --van-rolling-text-gap: 6px;
  --van-rolling-text-item-border-radius: 5px;
  --van-rolling-text-item-width: 40px;
}
```

### Manual Control

After obtaining the component instance through `ref`, you can call the `start` and `reset` methods. The `start` method is used to start the animation, and the `reset` method is used to reset the animation.

```html
<van-rolling-text
  ref="rollingTextRef"
  :start-num="0"
  :target-num="54321"
  :auto-start="false"
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
| text-list | Text array | _string[]_ | `[]` |
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
