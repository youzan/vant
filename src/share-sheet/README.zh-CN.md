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
<van-cell title="显示分享面板" @click="showShare = true" />
<van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
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
        { name: '微博', icon: 'weibo' },
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

### 展示多行选项

当分享选项的数量较多时，可以将`options`定义为数组嵌套的格式，每个子数组会作为一行选项展示

```html
<van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
/>
```

```js
export default {
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],
    };
  },
};
```

### 自定义图标

除了使用内置的几种图标外，可以直接在`icon`中传入图片 URL 来使用自定义的图标

```html
<van-share-sheet v-model="showShare" :options="options" />
```

```js
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: '名称', icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png' },
        { name: '名称', icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png' },
        { name: '名称', icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png' },
      ],
    };
  },
};
```

### 展示描述信息

通过`description`属性可以设置标题下方的描述文字

```html
<van-share-sheet
  v-model="showShare"
  :options="options"
  title="立即分享给好友"
  description="描述信息"
/>
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
| icon | 图标，可选值为 `wechat` `weibo` `qq` `link` `qrcode` `poster`，支持传入图片 URL | *string* |

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
