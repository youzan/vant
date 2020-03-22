# ImagePreview 图片预览

### 引入

`ImagePreview`和其他组件不同，不是通过HTML结构的方式来使用，而是通过函数调用的方式。使用前需要先引入它。

```js
import Vue from 'vue';
import { ImagePreview } from 'vant';

Vue.use(ImagePreview);
```

## 代码演示

### 基础用法

直接传入图片数组，即可展示图片预览

```js
ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
]);
```

### 传入配置项

通过传入配置对象，可以指定初始图片的位置、监听关闭事件

```js
ImagePreview({
  images: [
    'https://img.yzcdn.cn/1.jpg',
    'https://img.yzcdn.cn/2.jpg'
  ],
  startPosition: 1,
  onClose() {
    // do something
  }
});
```

### 展示关闭按钮

设置`closeable`属性后，会在弹出层的右上角显示关闭图标，并且可以通过`close-icon`属性自定义图标，使用`close-icon-position`属性可以自定义图标位置

```js
ImagePreview({
  images: [
    'https://img.yzcdn.cn/1.jpg',
    'https://img.yzcdn.cn/2.jpg'
  ],
  closeable: true
});
```

### 异步关闭

通过`asyncClose`属性可以开启异步关闭，开启后异步关闭后，只能通过实例上的 close 方法关闭图片预览

```js
const instance = ImagePreview({
  images: [
    'https://img.yzcdn.cn/1.jpg',
    'https://img.yzcdn.cn/2.jpg'
  ],
  asyncClose: true
});

setTimeout(() => {
  instance.close();
}, 1000);
```

### 组件调用

如果需要在图片预览内嵌入组件或其他自定义内容，可以使用组件调用的方式，调用前需要通过 `Vue.use` 注册组件

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
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    };
  },

  methods: {
    onChange(index) {
      this.index = index;
    }
  }
}
```

## API

### Options

通过函数调用 `ImagePreview` 时，支持传入以下选项：

| 参数名 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| images | 需要预览的图片 URL 数组 | *string[]* | `[]` |
| startPosition | 图片预览起始位置索引 | *number \| string* | `0` |
| swipeDuration | 动画时长，单位为`ms` | *number \| string* | `500` |
| showIndex | 是否显示页码 | *boolean* | `true` |
| showIndicators | 是否显示轮播指示器 | *boolean* | `false` |
| loop | 是否开启循环播放 | *boolean* | `true` |
| onClose | 关闭时的回调函数 | *Function* | - |
| onChange `v2.0.3` | 切换图片时的回调函数，回调参数为当前索引 | *Function* | - |
| onScale | 缩放图片时的回调函数，回调参数为当前索引和当前缩放值组成的对象 | *Function* | - |
| asyncClose | 是否开启异步关闭 | *boolean* | `false` |
| closeOnPopstate | 是否在页面回退时自动关闭 | *boolean* | `false` |
| className | 自定义类名 | *any* | - |
| maxZoom | 手势缩放时，最大缩放比例 | *number \| string* | `3` |
| minZoom | 手势缩放时，最小缩放比例 | *number \| string* | `1/3` |
| closeable | 是否显示关闭图标 | *boolean* | `false` |
| closeIcon | 关闭图标名称或图片链接 | *string* | `clear` |
| closeIconPosition | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | *string* | `top-right` |

### Props

通过组件调用 `ImagePreview` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| images | 需要预览的图片 URL 数组 | *string[]* | `[]` |
| start-position | 图片预览起始位置索引 | *number \| string* | `0` |
| swipe-duration | 动画时长，单位为 ms | *number \| string* | `500` |
| show-index | 是否显示页码 | *boolean* | `true` |
| show-indicators | 是否显示轮播指示器 | *boolean* | `false` |
| loop | 是否开启循环播放 | *boolean* | `true` |
| async-close | 是否开启异步关闭 | *boolean* | `false` |
| close-on-popstate | 是否在页面回退时自动关闭 | *boolean* | `false` |
| class-name | 自定义类名 | *any* | - |
| max-zoom | 手势缩放时，最大缩放比例 | *number \| string* | `3` |
| min-zoom | 手势缩放时，最小缩放比例 | *number \| string* | `1/3` |
| closeable `v2.5.0` | 是否显示关闭图标 | *boolean* | `false` |
| close-icon `v2.5.0` | 关闭图标名称或图片链接 | *string* | `clear` |
| close-icon-position `v2.5.0` | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | *string* | `top-right` |

### Events

通过组件调用 `ImagePreview` 时，支持以下事件：

| 事件 | 说明 | 回调参数 |
|------|------|------|
| close | 关闭时触发 | { index: 索引, url: 图片链接 } |
| closed `v2.5.6` | 关闭且且动画结束后触发 | - |
| change | 切换当前图片时触发 | index: 当前图片的索引 |
| scale `v2.5.0` | 缩放当前图片时触发 | { index: 当前图片的索引, scale: 当前缩放的值 } |

### Slots

通过组件调用 `ImagePreview` 时，支持以下插槽：

| 名称 | 说明 |
|------|------|
| index | 自定义页码内容 |
| cover | 自定义覆盖在图片预览上方的内容 |

### onClose 回调参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| url | 当前图片 URL | *string* |
| index | 当前图片的索引值 | *number* |

### onScale 回调参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| index | 当前图片的索引值 | *number* |
| scale | 当前图片的缩放值 | *number* |

## 常见问题

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。
