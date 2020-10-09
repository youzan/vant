# IndexBar 索引栏

### 引入

```js
import { createApp } from 'vue';
import { IndexBar, IndexAnchor } from 'vant';

const app = createApp();
app.use(IndexBar);
app.use(IndexAnchor);
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的 `IndexAnchor` 锚点位置。

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

可以通过 `index-list` 属性自定义展示的索引字符列表。

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
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
```

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| index-list | 索引字符列表 | _string[] \| number[]_ | `A-Z` |
| z-index | z-index 层级 | _number \| string_ | `1` |
| sticky | 是否开启锚点自动吸顶 | _boolean_ | `true` |
| sticky-offset-top | 锚点自动吸顶时与顶部的距离 | _number_ | `0` |
| highlight-color | 索引字符高亮颜色 | _string_ | `#07c160` |

### IndexAnchor Props

| 参数  | 说明     | 类型               | 默认值 |
| ----- | -------- | ------------------ | ------ |
| index | 索引字符 | _number \| string_ | -      |

### IndexBar Events

| 事件名            | 说明                         | 回调参数                  |
| ----------------- | ---------------------------- | ------------------------- |
| select            | 点击索引栏的字符时触发       | _index: number \| string_ |
| change `v2.10.10` | 当前高亮的索引字符变化时触发 | _index: number \| string_ |

### IndexAnchor Slots

| 名称    | 说明                             |
| ------- | -------------------------------- |
| default | 锚点位置显示内容，默认为索引字符 |
