# BackTop

### Intro

A button to back to top.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { BackTop } from 'vant';

const app = createApp();
app.use(BackTop);
```

## Usage

### Basic Usage

Please scroll the demo page to display the back top button.

```html
<van-cell v-for="item in list" :key="item" :title="item" />

<van-back-top />
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
    return { list };
  },
};
```

### Custom Position

Using `right` and `bottom` props to set the position of BackTop component.

```html
<van-cell v-for="item in list" :key="item" :title="item" />
<van-back-top right="15vw" bottom="10vh" />
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
    return { list };
  },
};
```

### Custom Content

Using the default slot to custom content.

```html
<van-cell v-for="item in list" :key="item" :title="item" />
<van-back-top class="custom">Back Top</van-back-top>

<style>
  .custom {
    width: 80px;
    font-size: 14px;
    text-align: center;
  }
</style>
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
    return { list };
  },
};
```

### Set Scroll Target

```html
<div class="container">
  <van-cell v-for="item in list" :key="item" :title="item" />
  <van-back-top target=".container" bottom="30vh" />
</div>

<style>
  .container {
    height: 60vh;
    overflow: auto;
  }
</style>
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
    return { list };
  },
};
```

### Immediate Scroll

Add `immediate` prop to scroll to top immediately.

```html
<van-back-top immediate />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| target | Can be a selector or a DOM ELement | _string \| HTMLElement_ | - |
| right | Right distance of the page, the default unit is px | _number \| string_ | `30` |
| bottom | Bottom distance of the page, the default unit is px | _number \| string_ | `40` |
| offset | The component will not display until the scroll offset reaches this value | _number_ | `200` |
| teleport | Specifies a target element where BackTop will be mounted | _string \| Element_ | `body` |
| immediate `v4.0.9` | Whether to scroll to top immediately | _boolean_ | `false` |
| z-index | Set the z-index to a fixed value | _number \| string_ | `100` |

### Events

| Event | Description                       | Arguments           |
| ----- | --------------------------------- | ------------------- |
| click | Emitted when Component is clicked | _event: MouseEvent_ |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

### Types

The component exports the following type definitions:

```ts
import type { BackTopProps, BackTopThemeVars } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                      | Default Value     | Description |
| ------------------------- | ----------------- | ----------- |
| --van-back-top-size       | _40px_            | -           |
| --van-back-top-icon-size  | _20px_            | -           |
| --van-back-top-right      | _30px_            | -           |
| --van-back-top-bottom     | _40px_            | -           |
| --van-back-top-z-index    | _100_             | -           |
| --van-back-top-text-color | _#fff_            | -           |
| --van-back-top-background | _var(--van-blue)_ | -           |
