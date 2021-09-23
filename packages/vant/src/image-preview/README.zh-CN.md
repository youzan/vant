# ImagePreview 图片预览

### 介绍

图片放大预览，支持函数调用和组件调用两种方式。

### 函数调用

`ImagePreview` 是一个函数，调用函数后会直接在页面中展示图片预览界面。

```js
import { ImagePreview } from 'vant';

ImagePreview(['https://img.yzcdn.cn/vant/apple-1.jpg']);
```

### 组件调用

通过组件调用 `ImagePreview` 时，可以通过下面的方式进行注册。

```js
import { createApp } from 'vue';
import { ImagePreview } from 'vant';

// 全局注册
const app = createApp();
app.use(ImagePreview);

// 局部注册
export default {
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
};
```

在 `script setup` 中，可以通过以下方式使用：

```html
<script setup>
  const VanImagePreview = ImagePreview.Component;
</script>

<template>
  <!-- 中划线命名 -->
  <van-image-preview />
  <!-- 也支持大驼峰命名 -->
  <VanImagePreview>
</template>
```

## 代码演示

### 基础用法

直接传入图片数组，即可展示图片预览。

```js
ImagePreview([
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
]);
```

### 指定初始位置

`ImagePreview` 支持传入配置对象，并通过 `startPosition` 选项指定图片的初始位置（索引值）。

```js
ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  startPosition: 1,
});
```

### 展示关闭按钮

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `close-icon` 属性自定义图标，使用`close-icon-position` 属性可以自定义图标位置。

```js
ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  closeable: true,
});
```

### 监听关闭事件

通过 `onClose` 选项监听图片预览的关闭事件。

```js
import { Toast } from 'vant';

ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  onClose() {
    Toast('关闭');
  },
});
```

### 异步关闭

通过 `beforeClose` 属性可以拦截关闭行为。

```js
const instance = ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  beforeClose: () => false,
});

setTimeout(() => {
  // 调用实例上的 close 方法手动关闭图片预览
  instance.close();
}, 2000);
```

### 组件调用

如果需要在图片预览内嵌入组件或其他自定义内容，可以使用组件调用的方式，调用前需要通过 `app.use` 注册组件。

```html
<van-image-preview v-model:show="show" :images="images" @change="onChange">
  <template v-slot:index>第{{ index }}页</template>
</van-image-preview>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const index = ref(0);
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ];
    const onChange = (newIndex) => {
      index.value = newIndex;
    };

    return {
      show,
      index,
      images,
      onChange,
    };
  },
};
```

## API

### Options

通过函数调用 `ImagePreview` 时，支持传入以下选项：

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| images | 需要预览的图片 URL 数组 | _string[]_ | `[]` |
| startPosition | 图片预览起始位置索引 | _number \| string_ | `0` |
| swipeDuration | 动画时长，单位为 `ms` | _number \| string_ | `300` |
| showIndex | 是否显示页码 | _boolean_ | `true` |
| showIndicators | 是否显示轮播指示器 | _boolean_ | `false` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| onClose | 关闭时的回调函数 | _Function_ | - |
| onChange | 切换图片时的回调函数，回调参数为当前索引 | _Function_ | - |
| onScale | 缩放图片时的回调函数，回调参数为当前索引和当前缩放值组成的对象 | _Function_ | - |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(active: number) => boolean \| Promise\<boolean\>_ | - |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| className | 自定义类名 | _string \| Array \| object_ | - |
| maxZoom | 手势缩放时，最大缩放比例 | _number \| string_ | `3` |
| minZoom | 手势缩放时，最小缩放比例 | _number \| string_ | `1/3` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| closeIcon | 关闭图标名称或图片链接 | _string_ | `clear` |
| closeIconPosition | 关闭图标位置，可选值为 `top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| transition `v3.0.8` | 动画类名，等价于 [transition](https://v3.cn.vuejs.org/api/built-in-components.html#transition) 的 `name` 属性 | _string_ | `van-fade` |
| overlay-style `v3.0.8` | 自定义遮罩层样式 | _object_ | - |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | - |

### Props

通过组件调用 `ImagePreview` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:show | 是否展示图片预览 | _boolean_ | `false` |
| images | 需要预览的图片 URL 数组 | _string[]_ | `[]` |
| start-position | 图片预览起始位置索引 | _number \| string_ | `0` |
| swipe-duration | 动画时长，单位为 ms | _number \| string_ | `300` |
| show-index | 是否显示页码 | _boolean_ | `true` |
| show-indicators | 是否显示轮播指示器 | _boolean_ | `false` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| before-close | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(active: number) => boolean \| Promise\<boolean\>_ | - |
| close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| class-name | 自定义类名 | _string \| Array \| object_ | - |
| max-zoom | 手势缩放时，最大缩放比例 | _number \| string_ | `3` |
| min-zoom | 手势缩放时，最小缩放比例 | _number \| string_ | `1/3` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| close-icon | 关闭图标名称或图片链接 | _string_ | `clear` |
| close-icon-position | 关闭图标位置，可选值为 `top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| transition `v3.0.8` | 动画类名，等价于 [transition](https://v3.cn.vuejs.org/api/built-in-components.html#transition) 的 `name` 属性 | _string_ | `van-fade` |
| overlay-style `v3.0.8` | 自定义遮罩层样式 | _object_ | - |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://v3.cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | - |

### Events

通过组件调用 `ImagePreview` 时，支持以下事件：

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时触发 | { index: 索引, url: 图片链接 } |
| closed | 关闭且且动画结束后触发 | - |
| change | 切换当前图片时触发 | index: 当前图片的索引 |
| scale | 缩放当前图片时触发 | { index: 当前图片的索引, scale: 当前缩放的值 } |

### 方法

通过组件调用 `ImagePreview` 时，通过 ref 可以获取到 ImagePreview 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| swipeTo `2.9.0` | 切换到指定位置 | _index: number, options?: SwipeToOptions_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  ImagePreviewProps,
  ImagePreviewOptions,
  ImagePreviewInstance,
  ImagePreviewScaleEventParams,
} from 'vant';
```

`ImagePreviewInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { ImagePreviewInstance } from 'vant';

const imagePreviewRef = ref<ImagePreviewInstance>();

imagePreviewRef.value?.swipeTo(1);
```

### Slots

通过组件调用 `ImagePreview` 时，支持以下插槽：

| 名称  | 说明                           | 参数                      |
| ----- | ------------------------------ | ------------------------- |
| index | 自定义页码内容                 | { index: 当前图片的索引 } |
| cover | 自定义覆盖在图片预览上方的内容 | -                         |

### onClose 回调参数

| 参数名 | 说明             | 类型     |
| ------ | ---------------- | -------- |
| url    | 当前图片 URL     | _string_ |
| index  | 当前图片的索引值 | _number_ |

### onScale 回调参数

| 参数名 | 说明             | 类型     |
| ------ | ---------------- | -------- |
| index  | 当前图片的索引值 | _number_ |
| scale  | 当前图片的缩放值 | _number_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-image-preview-index-text-color | _var(--van-white)_ | - |
| --van-image-preview-index-font-size | _var(--van-font-size-md)_ | - |
| --van-image-preview-index-line-height | _var(--van-line-height-md)_ | - |
| --van-image-preview-index-text-shadow | _0 1px 1px var(--van-gray-8)_ | - |
| --van-image-preview-overlay-background-color | _rgba(0, 0, 0, 0.9)_ | - |
| --van-image-preview-close-icon-size | _22px_ | - |
| --van-image-preview-close-icon-color | _var(--van-gray-5)_ | - |
| --van-image-preview-close-icon-active-color | _var(--van-gray-6)_ | - |
| --van-image-preview-close-icon-margin | _var(--van-padding-md)_ | - |
| --van-image-preview-close-icon-z-index | _1_ | - |

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。

### 在 JSX 中渲染 ImagePreview 组件无法展示？

请注意 `ImagePreview` 是一个函数，`ImagePreview.Component` 才是 ImagePreview 对应的组件。JSX 调用图片预览的正确姿势如下：

```jsx
export default {
  setup() {
    const show = ref(false);
    return () => <ImagePreview.Component v-model={[show, 'show']} />;
  },
};
```
