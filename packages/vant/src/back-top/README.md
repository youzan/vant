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

```html
<van-cell v-for="item in list" :key="item" :title="item" />

<van-back-top />
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
  },
};
```

### Custom Content

```html
<van-cell v-for="item in list" :key="item" :title="item" />
<van-back-top>
  <div class="custom">Custom Content</div>
</van-back-top>
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
  },
};
```

```css
.custom {
  width: 200px;
  line-height: 40px;
  text-align: center;
}
```

### Set Scroll Target

```html
<div class="container">
  <van-cell v-for="item in list" :key="item" :title="item" />
  <van-back-top target=".container" bottom="100" right="30" />
</div>
```

```js
export default {
  setup() {
    const list = [...Array(50).keys()];
  },
};
```

```css
.container {
  height: 300px;
  overflow: auto;
}
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| target | Can be a `selector` or `HTMLElement` | _string \| HTMLElement_ | - |
| right | Right distance of the page, the default unit is px | _number \| string_ | `30` |
| bottom | Bottom distance of the page, the default unit is px | _number \| string_ | `40` |
| visibility-height | The button will not show until the scroll height reaches this value | _number_ | `200` |
| teleport | Specifies a target element where BackTop will be mounted | _string \| Element_ | `body` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                      | Default Value     | Description |
| ------------------------- | ----------------- | ----------- |
| --van-back-top-size       | _40px_            | -           |
| --van-back-top-icon-size  | _20px_            | -           |
| --van-back-top-text-color | _#fff_            | -           |
| --van-back-top-background | _var(--van-blue)_ | -           |
