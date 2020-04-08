# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。2.6 版本开始支持此组件。

### 引入

```js
import Vue from 'vue';
import { ShareSheet } from 'vant';

Vue.use(ShareSheet);
```

## 代码演示

### 基础用法

分享面板通过`options`属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```html
<van-cell @click="showShare = true" />
<van-share-sheet
  v-model="showShare"
  :options="options"
  @select="onSelect"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  }
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
