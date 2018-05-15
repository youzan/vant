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

#### Custom Start Position
```javascript
ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
], 1);
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

| Attribute | Description | Type |
|-----------|-----------|-----------|
| imageUrls | Image URL list | `Array` |
