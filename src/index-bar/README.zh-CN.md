# IndexBar 索引栏

### 引入

```js
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的`IndexAnchor`锚点位置

```html
<van-index-bar>
  <van-index-anchor index="A" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="B" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  ...
</van-index-bar>
```

### 自定义索引列表

可以通过`index-list`属性自定义展示的索引字符列表，

```html
<van-index-bar :index-list="indexList">
  <van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="2">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

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

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| index-list | 索引字符列表 | *string[] \| number[]* | `A-Z` |
| z-index | z-index 层级 | *number \| string* | `1` |
| sticky | 是否开启锚点自动吸顶 | *boolean* | `true` |
| sticky-offset-top `v2.0.7` | 锚点自动吸顶时与顶部的距离 | *number* | `0` |
| highlight-color | 索引字符高亮颜色 | *string* | `#07c160` |

### IndexAnchor Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| index | 索引字符 | *number \| string* | - |

### IndexBar Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选中字符时触发 | index: 索引字符 |

### IndexAnchor Slots

| 名称 | 说明 |
|------|------|
| default | 锚点位置显示内容，默认为索引字符 |
