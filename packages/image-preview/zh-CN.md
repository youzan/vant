## ImagePreview 图片预览

### 使用指南

`ImagePreview`和其他组件不同，不是通过HTML结构的方式来使用，而是通过函数调用的方式。使用前需要先引入它。

```js
import { ImagePreview } from 'vant';
```

### 代码演示

#### 基础用法

```javascript
ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
]);
```

#### 指定初始位置

```javascript
ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
], 1);
```

#### 手动关闭

```javascript
const instance = ImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
]);

setTimeout(() => {
  instance.close();
}, 1000);
```

### 方法参数

| 参数名 | 说明 | 类型 |
|-----------|-----------|-----------|
| imageUrls | 需要预览的图片 | `Array` |
| startPosition | 图片预览起始位置索引 | `Number` |
