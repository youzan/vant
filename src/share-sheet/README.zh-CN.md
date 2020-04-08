# ShareSheet 分享面板

### 介绍

底部弹起的模态面板，用于展示各分享渠道对应的操作按钮，不包含具体的分享逻辑。2.6 版本开始支持此组件。

### 引入

```js
import Vue from 'vue';
import { ShareSheet } from 'vant';

Vue.use(ShareSheet);
```

## 代码演示

### 基础用法

```html
<van-share-sheet :options="options" />
```

```js
export default {
  data() {
    return {
      options: [],
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| options | 分享选项 | *Option[]* | `[]` |
| title | 顶部标题 | *string* | - |
| cancel-text | 取消按钮文字 | *string* | `'取消'` |
| description | 标题下方的辅助描述文字 | *string* | - |

### Option 数据结构

`options`属性为一个对象数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 |
|------|------|------|
| name | 分享渠道名称 | *string* |
| icon | 图标，可选值为 `wechat` `link` `qrcode` `poster`，支持传入图片 URL | *string* |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 点击分享选项时触发 | *option: Option, index: number* |
| cancel | 点击取消按钮时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义顶部标题 |
| description | 自定义描述文字 |
