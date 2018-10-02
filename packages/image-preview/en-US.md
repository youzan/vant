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

#### Close Manually

```javascript
const instance = ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
]);

setTimeout(() => {
  instance.close();
}, 1000);
```

### Arguments

| Attribute | Description | Type | Default |
|-----------|-----------|-----------|-----------|
| images | Images URL list | `Array` | `[]` |
| startPosition | Start position | `Number` | `0` |
| showIndex | Whether to show index | `Boolean` | `true` |
| onClose | Close callback | `Function` | - |
