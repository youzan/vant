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

### Customizations

```html
<van-cell v-for="item in list" :key="item" :title="item" />
<van-back-top>
  <div class="custom" style="">Customizations</div>
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

### Target to be listened to.

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | Can be a `selector` or `HTMLElement` | _string \| HTMLElement_ | - |
| right | Right distance of the page | _number \| string_ | `30` |
| bottom | Bottom distance of the page | _number \| string_ | `40` |
| visibility-height | The button will not show until the scroll height reaches this value | _number_ | `200` |
| teleport | Specifies a target element where BackTop will be mounted | _string \| Element_ | `body` |

### Slots

| 名称    | 说明                      |
| ------- | ------------------------- |
| default | customize default content |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                      | 默认值            | 描述 |
| ------------------------- | ----------------- | ---- |
| --van-back-top-size       | _40px_            | -    |
| --van-back-top-icon-size  | _20px_            | -    |
| --van-back-top-text-color | _#fff_            | -    |
| --van-back-top-background | _var(--van-blue)_ | -    |
