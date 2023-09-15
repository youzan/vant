# IndexBar

### Install

```js
import Vue from 'vue';
import { IndexBar } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
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
  data() {
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
| highlight-color | Index character highlight color | _string_ | `#ee0a24` | - |

### IndexAnchor Props

| Attribute | Description | Type               | Default |
| --------- | ----------- | ------------------ | ------- |
| index     | Index       | _number \| string_ | -       |

### IndexBar Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Emitted when an index is selected | _index: number \| string_ |
| change `v2.10.10` | Emitted when active index changed | _index: number \| string_ |

### IndexAnchor Slots

| Name    | Description                           |
| ------- | ------------------------------------- |
| default | Anchor content, show index by default |

### IndexBar Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get IndexBar instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| scrollTo `v2.12.2` | scroll to target element | _index: number \| string_ | - |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                                  | Default Value       | Description |
| ------------------------------------- | ------------------- | ----------- |
| @index-bar-sidebar-z-index            | `2`                 | -           |
| @index-bar-index-font-size            | `@font-size-xs`     | -           |
| @index-bar-index-line-height          | `@line-height-xs`   | -           |
| @index-bar-index-active-color         | `@red`              | -           |
| @index-anchor-z-index                 | `1`                 | -           |
| @index-anchor-padding                 | `0 @padding-md`     | -           |
| @index-anchor-text-color              | `@text-color`       | -           |
| @index-anchor-font-weight             | `@font-weight-bold` | -           |
| @index-anchor-font-size               | `@font-size-md`     | -           |
| @index-anchor-line-height             | `32px`              | -           |
| @index-anchor-background-color        | `transparent`       | -           |
| @index-anchor-sticky-text-color       | `@red`              | -           |
| @index-anchor-sticky-background-color | `@white`            | -           |
