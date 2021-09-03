# Loading

### Intro

Used to indicate the transition state during loading.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Loading } from 'vant';

const app = createApp();
app.use(Loading);
```

## Usage

### Type

```html
<van-loading />

<van-loading type="spinner" />
```

### Color

```html
<van-loading color="#1989fa" />

<van-loading type="spinner" color="#1989fa" />
```

### Size

```html
<van-loading size="24" />

<van-loading type="spinner" size="24px" />
```

### Text

```html
<van-loading size="24px">Loading...</van-loading>
```

### Vertical

```html
<van-loading size="24px" vertical>Loading...</van-loading>
```

### Text Color

use `color` or `text-color` to change text color.

```html
<!-- the color of text and icon will be changed -->
<van-loading color="#0094ff" />

<!-- only change text color -->
<van-loading text-color="#0094ff" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| color | Loading color | _string_ | `#c9c9c9` |
| type | Can be set to `spinner` | _string_ | `circular` |
| size | Icon size | _number \| string_ | `30px` |
| text-size | Text font size | _number \| string_ | `14px` |
| text-color | Text color | _string_ | `#c9c9c9` |
| vertical | Whether to arrange icons and text content vertically | _boolean_ | `false` |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Loading text |

### Types

The component exports the following type definitions:

```ts
import type { LoadingType } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-loading-text-color | _var(--van-gray-6)_ | - |
| --van-loading-text-font-size | _var(--van-font-size-md)_ | - |
| --van-loading-spinner-color | _var(--van-gray-5)_ | - |
| --van-loading-spinner-size | _30px_ | - |
| --van-loading-spinner-animation-duration | _0.8s_ | - |
