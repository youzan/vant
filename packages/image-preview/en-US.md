## ImagePreview

### Install

```js
import { ImagePreview } from 'vant';
```

### Usage

#### Basic Usage

```javascript
ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
]);
```

#### Custom config

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

#### Async Close

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

### Arguments

| Attribute | Description | Type | Default |
|------|------|------|------|
| images | Images URL list | `Array` | `[]` |
| startPosition | Start position | `Number` | `0` |
| showIndex | Whether to show index | `Boolean` | `true` |
| showIndicators | Whether to show indicators | `Boolean` | `false` |
| loop | Whether to enable loop | `Boolean` | `true` |
| onClose | Close callback | `Function` | - |
| asyncClose | Whether to enable async close | `Boolean` | `false` |
| className | Custom className | `String | Array | Object` | - |
| lazyLoad | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | `Boolean` | `false` |

### onClose Parematers

| Attribute | Description | Type |
|------|------|------|
| url | Url of current image | `Number` |
| index | Index of current image | `String` |
