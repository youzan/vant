# IndexBar

### Intro

Used for indexed sorting display and quick positioning of lists.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { IndexBar } from 'vant';

const app = createApp();
app.use(IndexBar);
app.use(IndexAnchor);
```

## Usage

### Basic Usage

```html
<van-index-bar>
  <van-index-anchor index="A" />
  <van-cell title="Text" />
  <van-cell title="Text" />
  <van-cell title="Text" />

  <van-index-anchor index="B" />
  <van-cell title="Text" />
  <van-cell title="Text" />
  <van-cell title="Text" />

  ...
</van-index-bar>
```

### Custom Index List

```html
<van-index-bar :index-list="indexList">
  <van-index-anchor index="1">Title 1</van-index-anchor>
  <van-cell title="Text" />
  <van-cell title="Text" />
  <van-cell title="Text" />

  <van-index-anchor index="2">Title 2</van-index-anchor>
  <van-cell title="Text" />
  <van-cell title="Text" />
  <van-cell title="Text" />

  ...
</van-index-bar>
```

```js
export default {
  setup() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
```

## API

### IndexBar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| index-list | Index List | _string[] \| number[]_ | `A-Z` |
| z-index | z-index | _number \| string_ | `1` |
| sticky | Whether to enable anchor sticky top | _boolean_ | `true` |
| sticky-offset-top | Anchor offset top when sticky | _number_ | `0` |
| highlight-color | Index character highlight color | _string_ | `#ee0a24` |
| teleport `v3.0.19` | Specifies a target element where IndexBar will be mounted | _string \| Element_ | - |

### IndexAnchor Props

| Attribute | Description | Type               | Default |
| --------- | ----------- | ------------------ | ------- |
| index     | Index       | _number \| string_ | -       |

### IndexBar Events

| Event  | Description                       | Arguments                 |
| ------ | --------------------------------- | ------------------------- |
| select | Emitted when an index is selected | _index: number \| string_ |
| change | Emitted when active index changed | _index: number \| string_ |

### IndexBar Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get IndexBar instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| scrollTo | scroll to target element | _index: number \| string_ | - |

### Types

The component exports the following type definitions:

```ts
import type { IndexBarProps, IndexBarInstance } from 'vant';
```

`IndexBarInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { IndexBarInstance } from 'vant';

const indexBarRef = ref<IndexBarInstance>();

indexBarRef.value?.scrollTo('B');
```

### IndexAnchor Slots

| Name    | Description                           |
| ------- | ------------------------------------- |
| default | Anchor content, show index by default |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-index-bar-sidebar-z-index | _2_ | - |
| --van-index-bar-index-font-size | _var(--van-font-size-xs)_ | - |
| --van-index-bar-index-line-height | _var(--van-line-height-xs)_ | - |
| --van-index-bar-index-active-color | _var(--van-danger-color)_ | - |
| --van-index-anchor-z-index | _1_ | - |
| --van-index-anchor-padding | _0 var(--van-padding-md)_ | - |
| --van-index-anchor-text-color | _var(--van-text-color)_ | - |
| --van-index-anchor-font-weight | _var(--van-font-weight-bold)_ | - |
| --van-index-anchor-font-size | _var(--van-font-size-md)_ | - |
| --van-index-anchor-line-height | _32px_ | - |
| --van-index-anchor-background-color | _transparent_ | - |
| --van-index-anchor-sticky-text-color | _var(--van-danger-color)_ | - |
| --van-index-anchor-sticky-background-color | _var(--van-white)_ | - |
