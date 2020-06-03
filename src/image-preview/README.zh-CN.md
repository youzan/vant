# ImagePreview 图片预览

### 介绍

图片放大预览，支持函数调用和组件调用两种方式。

### 函数调用

ImagePreview 是一个函数，调用函数后会直接在页面中展示图片预览界面。

```js
import { ImagePreview } from 'vant';

ImagePreview(['https://img.yzcdn.cn/vant/apple-1.jpg']);
```

### 组件调用

通过组件调用 ImagePreview 时，可以通过下面的方式进行注册。

```js
import Vue from 'vue';
import { ImagePreview } from 'vant';

// 全局注册
Vue.use(ImagePreview);

// 局部注册
export default {
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
};
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

### 传入配置项

通过传入配置对象，可以指定初始图片的位置、监听关闭事件。

```js
ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  startPosition: 1,
  onClose() {
    // do something
  },
});
```

### 展示关闭按钮

设置`closeable`属性后，会在弹出层的右上角显示关闭图标，并且可以通过`close-icon`属性自定义图标，使用`close-icon-position`属性可以自定义图标位置。

```js
ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  closeable: true,
});
```

### 异步关闭

通过`asyncClose`属性可以开启异步关闭，开启后异步关闭后，只能通过实例上的 close 方法关闭图片预览。

```js
const instance = ImagePreview({
  images: [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
  ],
  asyncClose: true,
});

setTimeout(() => {
  instance.close();
}, 1000);
```

### 组件调用

如果需要在图片预览内嵌入组件或其他自定义内容，可以使用组件调用的方式，调用前需要通过 `Vue.use` 注册组件。

```html
<van-image-preview v-model="show" :images="images" @change="onChange">
  <template v-slot:index>第{{ index }}页</template>
</van-image-preview>
```

```js
export default {
  data() {
    return {
      show: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },

  methods: {
    onChange(index) {
      this.index = index;
    },
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
| swipeDuration | 动画时长，单位为`ms` | _number \| string_ | `500` |
| showIndex | 是否显示页码 | _boolean_ | `true` |
| showIndicators | 是否显示轮播指示器 | _boolean_ | `false` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| onClose | 关闭时的回调函数 | _Function_ | - |
| onChange `v2.0.3` | 切换图片时的回调函数，回调参数为当前索引 | _Function_ | - |
| onScale | 缩放图片时的回调函数，回调参数为当前索引和当前缩放值组成的对象 | _Function_ | - |
| asyncClose | 是否开启异步关闭 | _boolean_ | `false` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `false` |
| className | 自定义类名 | _any_ | - |
| maxZoom | 手势缩放时，最大缩放比例 | _number \| string_ | `3` |
| minZoom | 手势缩放时，最小缩放比例 | _number \| string_ | `1/3` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| closeIcon | 关闭图标名称或图片链接 | _string_ | `clear` |
| closeIconPosition | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |

### Props

通过组件调用 `ImagePreview` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| images | 需要预览的图片 URL 数组 | _string[]_ | `[]` |
| start-position | 图片预览起始位置索引 | _number \| string_ | `0` |
| swipe-duration | 动画时长，单位为 ms | _number \| string_ | `500` |
| show-index | 是否显示页码 | _boolean_ | `true` |
| show-indicators | 是否显示轮播指示器 | _boolean_ | `false` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| async-close | 是否开启异步关闭 | _boolean_ | `false` |
| close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `false` |
| class-name | 自定义类名 | _any_ | - |
| max-zoom | 手势缩放时，最大缩放比例 | _number \| string_ | `3` |
| min-zoom | 手势缩放时，最小缩放比例 | _number \| string_ | `1/3` |
| closeable `v2.5.0` | 是否显示关闭图标 | _boolean_ | `false` |
| close-icon `v2.5.0` | 关闭图标名称或图片链接 | _string_ | `clear` |
| close-icon-position `v2.5.0` | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |

### Events

通过组件调用 `ImagePreview` 时，支持以下事件：

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时触发 | { index: 索引, url: 图片链接 } |
| closed `v2.5.6` | 关闭且且动画结束后触发 | - |
| change | 切换当前图片时触发 | index: 当前图片的索引 |
| scale `v2.5.0` | 缩放当前图片时触发 | { index: 当前图片的索引, scale: 当前缩放的值 } |

### Slots

通过组件调用 `ImagePreview` 时，支持以下插槽：

| 名称  | 说明                           |
| ----- | ------------------------------ |
| index | 自定义页码内容                 |
| cover | 自定义覆盖在图片预览上方的内容 |

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

## 常见问题

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。
