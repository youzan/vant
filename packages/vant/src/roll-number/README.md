# RollNumber

### Introduction

Rolling number animation

### Import

Import component globally using the following methods. For more ways to register components, please refer to [component registration](#/en-US/advanced-usage#component-registration).

```js
import { createApp } from 'vue';
import { RollNumber } from 'vant';

const app = createApp();
app.use(RollNumber);
```

## Code Demo

### Basic Usage

```html
<van-roll-number
  :start-num="0"
  :target-num="123"
  :duration="2"
  :auto-start="false"
  direction="down"
/>
```

### Rolling Up

You can set the rolling direction of the number by using the `direction` property. `up` represents rolling up.

```html
<van-roll-number
  :start-num="0"
  :target-num="432"
  :duration="2"
  :auto-start="false"
  direction="up"
/>
```

### Stop the Animation of Ones Digit First

You can set the order of stopping the animation of each digit through the `stop-order` attribute. By default, it stops from the higher digits. Setting `rtl` can stop from the ones digit.

```html
<van-roll-number
  :start-num="0"
  :target-num="54321"
  :duration="2"
  :auto-start="false"
  stop-order="rtl"
  direction="up"
/>
```

### Custom Style

```html
<van-roll-number
  class="my-roll-number"
  :start-num="12345"
  :target-num="54321"
  :duration="2"
  stop-order="rtl"
  direction="up"
/>
```

```css
.my-roll-number {
  gap: 6px;
  .van-roll-single {
    color: white;
    background: deepskyblue;
    border-radius: 5px;
    width: 25px;
    font-size: 20px;
  }
}
```

### Manual Control

After getting the component instance through `ref`, you can call the `start` and `reset` methods.

```html
<van-roll-number
  ref="rollNumberEl"
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

```javascript
const rollNumberEl = ref(null);
const start = () => {
  rollNumberEl.value.start();
};
const reset = () => {
  rollNumberEl.value.reset();
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| start-num | Start number | _number_ | 0 |
| target-num | Target number | _number_ | - |
| duration | Duration of the animation, in seconds | _number_ | 2 |
| direction | Rolling direction of the number, with `down` and `up` as the values | _string_ | `down` |
| auto-start | Whether to start the animation | _boolean_ | true |
| stop-order | Order of stopping the animation of each digit, with `ltr` and `rtl` as the values | _string_ | `ltr` |

### Type Definition

The component exports the following type definitions:

```ts
import type { RollNumberProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-roll-number-bg-color | _inherit_ | Background color of a single digit |
| --van-roll-number-color | _white_ | Color of the number |
| --van-roll-number-gap | _0px_ | Spacing between digits |
| --van-roll-number-single-width | _15px_ | Width of a single digit |
| --van-roll-number-single-border-r | _0px_ | Border radius of a single digit |
