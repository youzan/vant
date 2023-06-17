# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Popup } from 'vant';

const app = createApp();
app.use(Popup);
```

## 代码演示

### 基础用法

通过 `v-model:show` 控制弹出层是否展示。

```html
<van-cell title="展示弹出层" is-link @click="showPopup" />
<van-popup v-model:show="show" :style="{ padding: '64px' }">内容</van-popup>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
};
```

### 弹出位置

通过 `position` 属性设置弹窗的弹出位置，默认为居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

- 当弹窗从顶部或底部弹出时，默认宽度与屏幕宽度保持一致，弹窗高度取决于内容的高度。
- 当弹窗从左侧或右侧弹出时，默认不设置宽度和高度，弹窗的宽高取决于内容的宽高。

```html
<!-- 顶部弹出 -->
<van-popup v-model:show="showTop" position="top" :style="{ height: '30%' }" />

<!-- 底部弹出 -->
<van-popup
  v-model:show="showBottom"
  position="bottom"
  :style="{ height: '30%' }"
/>

<!-- 左侧弹出 -->
<van-popup
  v-model:show="showLeft"
  position="left"
  :style="{ width: '30%', height: '100%' }"
/>

<!-- 右侧弹出 -->
<van-popup
  v-model:show="showRight"
  position="right"
  :style="{ width: '30%', height: '100%' }"
/>
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `close-icon` 属性自定义图标，使用 `close-icon-position` 属性可以自定义图标位置。

```html
<van-popup
  v-model:show="show"
  closeable
  position="bottom"
  :style="{ height: '30%' }"
/>
<!-- 自定义图标 -->
<van-popup
  v-model:show="show"
  closeable
  close-icon="close"
  position="bottom"
  :style="{ height: '30%' }"
/>
<!-- 图标位置 -->
<van-popup
  v-model:show="show"
  closeable
  close-icon-position="top-left"
  position="bottom"
  :style="{ height: '30%' }"
/>
```

### 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```html
<!-- 圆角弹窗（居中） -->
<van-popup v-model:show="showCenter" round :style="{ padding: '64px' }" />

<!-- 圆角弹窗（底部） -->
<van-popup
  v-model:show="showBottom"
  round
  position="bottom"
  :style="{ height: '30%' }"
/>
```

### 监听点击事件

Popup 支持以下点击事件：

- `click`: 点击弹出层时触发。
- `click-overlay`: 点击遮罩层时触发。
- `click-close-icon`: 点击关闭图标时触发。

```html
<van-cell title="监听点击事件" is-link @click="show = true" />
<van-popup
  v-model:show="show"
  position="bottom"
  :style="{ height: '30%' }"
  closeable
  @click-overlay="onClickOverlay"
  @click-close-icon="onClickCloseIcon"
/>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const show = ref(false);
    const onClickOverlay = () => {
      showToast('click-overlay');
    };
    const onClickCloseIcon = () => {
      showToast('click-close-icon');
    };
    return {
      show,
      onClickOverlay,
      onClickCloseIcon,
    };
  },
};
```

### 监听显示事件

当 Popup 被打开或关闭时，会触发以下事件：

- `open`: 打开弹出层时立即触发。
- `opened`: 打开弹出层且动画结束后触发。
- `close`: 关闭弹出层时立即触发。
- `closed`: 关闭弹出层且动画结束后触发。

```html
<van-cell title="监听显示事件" is-link @click="show = true" />
<van-popup
  v-model:show="show"
  position="bottom"
  :style="{ height: '30%' }"
  @open="showToast('open')"
  @opened="showToast('opened')"
  @close="showToast('close')"
  @closed="showToast('closed')"
/>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const show = ref(false);
    return {
      show,
      showToast,
    };
  },
};
```

### 指定挂载位置

弹出层默认挂载到组件标签所在位置，可以通过 `teleport` 属性指定挂载位置。

```html
<!-- 挂载到 body 节点下 -->
<van-popup v-model:show="show" teleport="body" />

<!-- 挂载到 #app 节点下 -->
<van-popup v-model:show="show" teleport="#app" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否显示弹出层 | _boolean_ | `false` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
| overlay-class | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| z-index | 将弹窗的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |
| round | 是否显示圆角 | _boolean_ | `false` |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
| lazy-render | 是否在显示弹层时才渲染节点 | _boolean_ | `true` |
| close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| close-icon | 关闭图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | `cross` |
| close-icon-position | 关闭图标位置，可选值为 `top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| transition | 动画类名，等价于 [transition](https://cn.vuejs.org/api/built-in-components.html#transition) 的 `name` 属性 | _string_ | - |
| transition-appear | 是否在初始渲染时启用过渡动画 | _boolean_ | `false` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | - |
| safe-area-inset-top | 是否开启[顶部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

### Events

| 事件名           | 说明                       | 回调参数            |
| ---------------- | -------------------------- | ------------------- |
| click            | 点击弹出层时触发           | _event: MouseEvent_ |
| click-overlay    | 点击遮罩层时触发           | _event: MouseEvent_ |
| click-close-icon | 点击关闭图标时触发         | _event: MouseEvent_ |
| open             | 打开弹出层时立即触发       | -                   |
| close            | 关闭弹出层时立即触发       | -                   |
| opened           | 打开弹出层且动画结束后触发 | -                   |
| closed           | 关闭弹出层且动画结束后触发 | -                   |

### Slots

| 名称            | 说明         |
| --------------- | ------------ |
| default         | 弹窗内容     |
| overlay-content | 遮罩层的内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  PopupProps,
  PopupPosition,
  PopupInstance,
  PopupCloseIconPosition,
} from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                           | 默认值                               | 描述 |
| ------------------------------ | ------------------------------------ | ---- |
| --van-popup-background         | _var(--van-background-2)_            | -    |
| --van-popup-transition         | _transform var(--van-duration-base)_ | -    |
| --van-popup-round-radius       | _16px_                               | -    |
| --van-popup-close-icon-size    | _22px_                               | -    |
| --van-popup-close-icon-color   | _var(--van-gray-5)_                  | -    |
| --van-popup-close-icon-margin  | _16px_                               | -    |
| --van-popup-close-icon-z-index | _1_                                  | -    |
