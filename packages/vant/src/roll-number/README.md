# RollNumber Rolling Number Animation

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
  :is-start="true"
  :direction="'down'"
/>
```

### Rolling Up

You can set the rolling direction of the number by using the `direction` property. `up` represents rolling up.

```html
<van-roll-number
  :start-num="0"
  :target-num="123"
  :duration="2"
  :is-start="true"
  :direction="'up'"
/>
```

### Stop the Animation of Ones Digit First

You can set the order of stopping the animation of each digit through the `stop-order` attribute. By default, it stops from the higher digits. Setting `rtl` can stop from the ones digit.

```html
<van-roll-number
  :start-num="0"
  :target-num="123"
  :duration="2"
  :is-start="true"
  stop-order="rtl"
  :direction="'up'"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| start-num | Start number | _number_ | 0 |
| target-num | Target number | _number_ | - |
| duration | Duration of the animation, in seconds | _number_ | 2 |
| direction | Rolling direction of the number, with `down` and `up` as the values | _string_ | `down` |
| is-start | Whether to start the animation | _boolean_ | false |
| stop-order | Order of stopping the animation of each digit, with `ltr` and `rtl` as the values | _string_ | 'ltr' |

### Events

| Event Name | Description | Parameters |
| ---------- | ----------- | ---------- |
|            |             |            |

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
| --van-roll-number-bg-color | _black_ | Background color of a single digit |
| --van-roll-number-color | _white_ | Color of the number |
| --van-roll-number-gap | _5px_ | Spacing between digits |
| --van-roll-number-single-width | _20px_ | Width of a single digit |
| --van-roll-number-single-border-r | _0px_ | Border radius of a single digit |
