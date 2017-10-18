<script>
import { ImagePreview } from 'packages';

export default {
  methods: {
    showImagePreview() {
      ImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]);
    }
  }
};
</script>

## ImagePreview

### Install

```js
import { ImagePreview } from 'vant';
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-button @click="showImagePreview">Show</van-button>
```

```javascript
export default {
  methods: {
    showImagePreview() {
      ImagePreview([
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]);
    }
  }
};
```
:::

### 方法参数

| Attribute | Description | Type |
|-----------|-----------|-----------|
| imageUrls | Image URL list | `Array` |
