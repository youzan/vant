# Ellipsis

### Intro

Show ellipsis for long text and support for Expand/Collapse.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Ellipsis } from 'vant';

const app = createApp();
app.use(Ellipsis);
```

## Usage

### Basic Usage

Show one rows by default.

```html
<van-ellipsis :content="text" />
```

```js
export default {
  setup() {
    const text =
      'Vant is a lightweight, customizable mobile component library that was open sourced in 2017. Currently Vant officially provides Vue 2 version, Vue 3 version and WeChat applet version, and the community team maintains React version and Alipay applet version.';
  },
};
```

### Expand/Collapse

Support Expand/Collapse.

```html
<van-ellipsis :content="text" expand-text="expand" collapse-text="collapse" />
```

```js
export default {
  setup() {
    const text =
      'Vant is a lightweight, customizable mobile component library that was open sourced in 2017. Currently Vant officially provides Vue 2 version, Vue 3 version and WeChat applet version, and the community team maintains React version and Alipay applet version.';
  },
};
```

### Customize rows

Display the number of `rows` by setting rows.

```html
<van-ellipsis
  rows="3"
  :content="text"
  expand-text="expand"
  collapse-text="collapse"
/>
```

```js
export default {
  setup() {
    const text =
      'Vant is a lightweight, customizable mobile component library that was open sourced in 2017. Currently Vant officially provides Vue 2 version, Vue 3 version and WeChat applet version, and the community team maintains React version and Alipay applet version.';
  },
};
```

## API

### Props

| Attribute     | Description              | Type               | Default |
| ------------- | ------------------------ | ------------------ | ------- |
| rows          | Number of rows displayed | _number \| string_ | `1`     |
| content       | The text displayed       | _string_           | -       |
| expand-text   | Expand operation text    | _string_           | -       |
| collapse-text | Collapse operation text  | _string_           | -       |

### Events

| Event | Description                             | Arguments           |
| ----- | --------------------------------------- | ------------------- |
| click | Emitted when Expand/Collapse is clicked | _event: MouseEvent_ |

### Types

The component exports the following type definitions:

```ts
import type { EllipsisProps, EllipsisThemeVars } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                        | Default Value     | Description |
| --------------------------- | ----------------- | ----------- |
| --van-ellipsis-action-color | _var(--van-blue)_ | -           |
