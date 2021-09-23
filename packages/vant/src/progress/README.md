# Progress

### Intro

Used to show the current progress of the operation.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Progress } from 'vant';

const app = createApp();
app.use(Progress);
```

## Usage

### Basic Usage

Use `percentage` prop to set current progress.

```html
<van-progress :percentage="50" />
```

### Stroke Width

```html
<van-progress :percentage="50" stroke-width="8" />
```

### Inactive

```html
<van-progress inactive :percentage="50" />
```

### Custom Style

Use `pivot-text` to custom text，use `color` to custom bar color.

```html
<van-progress pivot-text="Orange" color="#f2826a" :percentage="25" />
<van-progress pivot-text="Red" color="#ee0a24" :percentage="50" />
<van-progress
  :percentage="75"
  pivot-text="Purple"
  pivot-color="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| percentage | Percentage | _number \| string_ | `0` |
| stroke-width | Stroke width | _number \| string_ | `4px` |
| color | Color | _string_ | `#1989fa` |
| track-color | Track color | _string_ | `#e5e5e5` |
| pivot-text | Pivot text | _string_ | percentage |
| pivot-color | Pivot text background color | _string_ | inherit progress color |
| text-color | Pivot text color | _string_ | `white` |
| inactive | Whether to be gray | _boolean_ | `false` |
| show-pivot | Whether to show text | _boolean_ | `true` |

### Types

The component exports the following type definitions:

```ts
import type { ProgressProps, ProgressInstance } from 'vant';
```

`ProgressInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { ProgressInstance } from 'vant';

const progressRef = ref<ProgressInstance>();

progressRef.value?.resize();
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-progress-height | _4px_ | - |
| --van-progress-color | _var(--van-primary-color)_ | - |
| --van-progress-background-color | _var(--van-gray-3)_ | - |
| --van-progress-pivot-padding | _0 5px_ | - |
| --van-progress-pivot-text-color | _var(--van-white)_ | - |
| --van-progress-pivot-font-size | _var(--van-font-size-xs)_ | - |
| --van-progress-pivot-line-height | _1.6_ | - |
| --van-progress-pivot-background-color | _var(--van-primary-color)_ | - |
