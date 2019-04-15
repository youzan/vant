## ImagePreview 图片预览

### 使用指南

`ImagePreview`和其他组件不同，不是通过HTML结构的方式来使用，而是通过函数调用的方式。使用前需要先引入它。

```js
import { ImagePreview } from 'vant';

Vue.use(ImagePreview);
```

### 代码演示

#### 基础用法

直接传入图片数组，即可展示图片预览

```javascript
ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
]);
```

#### 传入配置项

通过传入配置对象，可以指定初始图片的位置、监听关闭事件

```javascript
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

#### 异步关闭

通过`asyncClose`属性可以开启异步关闭，开启后异步关闭后，只能通过实例上的 close 方法关闭图片预览

```javascript
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

#### 组件调用

如果需要在图片预览内嵌入组件或其他自定义内容，可以使用组件调用的方式，调用前需要通过 `Vue.use` 注册组件

```html
<van-image-preview
  v-model="show"
  :images="images"
  @change="onChange"
>
  <template v-slot:index>第{ index }页</template>
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

### Options

通过函数调用 `ImagePreview` 时，支持传入以下选项：

| 参数名 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| images | 需要预览的图片 URL 数组 | `Array` | `[]` | 1.1.16 |
| startPosition | 图片预览起始位置索引 | `Number` | `0` | 1.1.16 |
| showIndex | 是否显示页码 | `Boolean` | `true` | 1.3.4 |
| showIndicators | 是否显示轮播指示器 | `Boolean` | `false` | 1.3.10 |
| loop | 是否开启循环播放 | `Boolean` | `true` | 1.4.4 |
| onClose | 关闭时的回调函数 | `Function` | - | 1.1.16 |
| asyncClose | 是否开启异步关闭 | `Boolean` | `false` | 1.4.8 |
| className | 自定义类名 | `String | Array | Object` | - | 1.5.2 |
| lazyLoad | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | `Boolean` | `false` | 1.5.3 |
| maxZoom | 手势缩放时，最大缩放比例 | `Number` | `3` | 1.6.14 |
| minZoom | 手势缩放时，最小缩放比例 | `Number` | `1/3` | 1.6.14 |

### API

通过组件调用 `ImagePreview` 时，支持以下 API：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| images | 需要预览的图片 URL 数组 | `Array` | `[]` | 1.1.16 |
| start-position | 图片预览起始位置索引 | `Number` | `0` | 1.1.16 |
| show-index | 是否显示页码 | `Boolean` | `true` | 1.3.4 |
| show-indicators | 是否显示轮播指示器 | `Boolean` | `false` | 1.3.10 |
| loop | 是否开启循环播放 | `Boolean` | `true` | 1.4.4 |
| async-close | 是否开启异步关闭 | `Boolean` | `false` | 1.4.8 |
| class-name | 自定义类名 | `String | Array | Object` | - | 1.5.2 |
| lazy-load | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | `Boolean` | `false` | 1.5.3 |
| max-zoom | 手势缩放时，最大缩放比例 | `Number` | `3` | 1.6.14 |
| min-zoom | 手势缩放时，最小缩放比例 | `Number` | `1/3` | 1.6.14 |

### Event

通过组件调用 `ImagePreview` 时，支持以下事件：

| 事件 | 说明 | 回调参数 |
|------|------|------|
| close | 关闭时触发 | { index: 索引, url: 图片链接 } |
| change | 切换当前图片时触发 | index, 当前图片的索引 |

### Slot

通过组件调用 `ImagePreview` 时，支持以下插槽：

| 名称 | 说明 |
|------|------|
| index | 自定义页码内容 |


### onClose 回调参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| url | 当前图片 URL | `String` |
| index | 当前图片的索引值 | `Number` |
