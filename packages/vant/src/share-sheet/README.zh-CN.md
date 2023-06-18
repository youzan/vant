# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

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
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const showShare = ref(false);
    const options = [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ];

    const onSelect = (option) => {
      showToast(option.name);
      showShare.value = false;
    };

    return {
      options,
      onSelect,
      showShare,
    };
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
import { ref } from 'vue';

export default {
  setup() {
    const showShare = ref(false);
    const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ],
    ];

    return {
      options,
      showShare,
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
import { ref } from 'vue';

export default {
  setup() {
    const showShare = ref(false);
    const options = [
      {
        name: '名称',
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-fire.png',
      },
      {
        name: '名称',
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-light.png',
      },
      {
        name: '名称',
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/custom-icon-water.png',
      },
    ];

    return {
      options,
      showShare,
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
import { ref } from 'vue';

export default {
  setup() {
    const showShare = ref(false);
    const options = [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link', description: '描述信息' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ];

    return {
      options,
      showShare,
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
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| z-index | 将面板的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |
| round | 是否显示圆角 | _boolean_ | `true` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| overlay-class | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
| lazy-render | 是否在显示弹层时才渲染内容 | _boolean_ | `true` |
| close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | - |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |

### Option 数据结构

`options` 属性为一个对象数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| name | 分享渠道名称 | _string_ |
| description | 分享选项描述 | _string_ |
| icon | 图标，可选值为 `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments`，支持传入图片 URL | _string_ |
| className | 分享选项类名 | _string_ |

### Events

| 事件名        | 说明                     | 回调参数                        |
| ------------- | ------------------------ | ------------------------------- |
| select        | 点击分享选项时触发       | _option: Option, index: number_ |
| cancel        | 点击取消按钮时触发       | -                               |
| open          | 打开面板时触发           | -                               |
| close         | 关闭面板时触发           | -                               |
| opened        | 打开面板且动画结束后触发 | -                               |
| closed        | 关闭面板且动画结束后触发 | -                               |
| click-overlay | 点击遮罩层时触发         | _event: MouseEvent_             |

### Slots

| 名称        | 说明               |
| ----------- | ------------------ |
| title       | 自定义顶部标题     |
| description | 自定义描述文字     |
| cancel      | 自定义取消按钮内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  ShareSheetProps,
  ShareSheetOption,
  ShareSheetOptions,
} from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-share-sheet-header-padding | _var(--van-padding-sm) var(--van-padding-md) var(--van-padding-base)_ | - |
| --van-share-sheet-title-color | _var(--van-text-color)_ | - |
| --van-share-sheet-title-font-size | _var(--van-font-size-md)_ | - |
| --van-share-sheet-title-line-height | _var(--van-line-height-md)_ | - |
| --van-share-sheet-description-color | _var(--van-text-color-2)_ | - |
| --van-share-sheet-description-font-size | _var(--van-font-size-sm)_ | - |
| --van-share-sheet-description-line-height | _16px_ | - |
| --van-share-sheet-icon-size | _48px_ | - |
| --van-share-sheet-option-name-color | _var(--van-gray-7)_ | - |
| --van-share-sheet-option-name-font-size | _var(--van-font-size-sm)_ | - |
| --van-share-sheet-option-description-color | _var(--van-text-color-3)_ | - |
| --van-share-sheet-option-description-font-size | _var(--van-font-size-sm)_ | - |
| --van-share-sheet-cancel-button-font-size | _var(--van-font-size-lg)_ | - |
| --van-share-sheet-cancel-button-height | _48px_ | - |
| --van-share-sheet-cancel-button-background | _var(--van-background-2)_ | - |

## 常见问题

### 如何实现分享逻辑？

在不同的 App 或浏览器中，存在各式各样的分享接口或分享方式，因此 ShareSheet 组件不提供具体的分享逻辑，需要开发者根据业务场景自行实现。

#### 微信内分享

由于微信未提供分享相关的 API，需要引导用户点击右上角进行分享。

#### App 内分享

可以通过 JSBridge 调用原生应用的 SDK 进行分享。

#### 分享海报或二维码

可以通过 [Popup](#/zh-CN/popup) 组件以弹层的形式展示图片，然后引导用户保存图片进行分享。
