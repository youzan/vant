# IndexBar

### Install

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
| highlight-color | Index character highlight color | _string_ | `#07c160` | - |

### IndexAnchor Props

| Attribute | Description | Type               | Default |
| --------- | ----------- | ------------------ | ------- |
| index     | Index       | _number \| string_ | -       |

### IndexBar Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Triggered when select index | _index: number \| string_ |
| change `v2.10.10` | Triggered when active index changed | _index: number \| string_ |

### IndexAnchor Slots

| Name    | Description                           |
| ------- | ------------------------------------- |
| default | Anchor content, show index by default |
