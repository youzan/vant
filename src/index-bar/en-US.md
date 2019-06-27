# IndexBar

### Install

``` javascript
import { IndexBar } from 'vant';

Vue.use(IndexBar);
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
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
```

## API

### IndexBar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| index-list | Index List | `Array` | `A-Z` |
| z-index | z-index | `Number` | `1` |
| sticky | Whether to enable anchor sticky top | `Boolean` | `true` |
| highlight-color | Index character highlight color | `String` | `#07c160` | - |

### IndexAnchor Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| index | Index | `String | Number` | - |

### IndexBar Events

| Event | Description | Arguments |
|------|------|------|
| select | Triggered when select index | index |

### IndexAnchor Slots

| Name | Description |
|------|------|
| default | Anchor content, show index by default |
