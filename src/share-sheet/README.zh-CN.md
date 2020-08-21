# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。2.6 版本开始支持此组件。

### 引入

```js
import { createApp } from 'vue';
import { ShareSheet } from 'vant';

const app = createApp();
app.use(ShareSheet);
```

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```html
<van-cell title="显示分享面板" @click="showShare = true" />
<van-share-sheet
  v-model:show="showShare"
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
  },
};
```

### 展示多行选项

当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。

```html
<van-share-sheet
  v-model:show="showShare"
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

除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标。

```html
<van-share-sheet v-model:show="showShare" :options="options" />
```

```js
export default {
  data() {
    return {
      showShare: false,
      options: [
        {
          name: '名称',
          icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
        },
        {
          name: '名称',
          icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
        },
        {
          name: '名称',
          icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
        },
      ],
    };
  },
};
```

### 展示描述信息

通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。

```html
<van-share-sheet
  v-model:show="showShare"
  :options="options"
  title="立即分享给好友"
  description="描述信息"
/>
```

```js
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link', description: '描述信息' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否显示分享面板 | _boolean_ | `false` |
| options | 分享选项 | _Option[]_ | `[]` |
| title | 顶部标题 | _string_ | - |
| cancel-text | 取消按钮文字，传入空字符串可以隐藏按钮 | _string_ | `'取消'` |
| description | 标题下方的辅助描述文字 | _string_ | - |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
| lazy-render | 是否在显示弹层时才渲染内容 | _boolean_ | `true` |
| close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| teleport | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| Element_ | - |

### Option 数据结构

`options`属性为一个对象数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| name | 分享渠道名称 | _string_ |
| description `v2.8.5` | 分享选项描述 | _string_ |
| icon | 图标，可选值为 `wechat` `weibo` `qq` `link` `qrcode` `poster`，支持传入图片 URL | _string_ |
| className | 分享选项类名 | _string_ |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 点击分享选项时触发 | _option: Option, index: number_ |
| cancel | 点击取消按钮时触发 | - |
| click-overlay `v2.9.1` | 点击遮罩层时触发 | - |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| title       | 自定义顶部标题 |
| description | 自定义描述文字 |

## 常见问题

### 如何实现分享逻辑？

在不同的 App 或浏览器中，存在各式各样的分享接口或分享方式，因此 ShareSheet 组件不提供具体的分享逻辑，需要开发者根据业务场景自行实现。

#### 微信内分享

由于微信未提供分享相关的 API，需要引导用户点击右上角进行分享。

#### App 内分享

可以通过 JSBridge 调用原生应用的 SDK 进行分享。

#### 分享海报或二维码

可以通过 [Popup](#/zh-CN/popup) 组件以弹层的形式展示图片，然后引导用户保存图片进行分享。
