<style>
@component-namespace demo {
  @b image-preview {
    .van-button {
      margin-left: 15px;
    }
  }
}
</style>

<script>
import { ImagePreview } from 'src/index';
import MobileComputed from 'components/mobile-computed';

export default {
  mixins: [MobileComputed],

  methods: {
    handleImagePreview() {
      ImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]);
    }
  }
};
</script>

## ImagePreview 图片预览

### 使用指南

`ImagePreview`和其他组件不同，不是通过HTML结构的方式来使用，而是通过函数调用的方式。使用前需要先引入它。

```js
import { ImagePreview } from 'vant';
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<van-button @click="handleImagePreview">预览图片</van-button>

<script>
import { ImagePreview } from 'src/index';

export default {
  methods: {
    handleImagePreview() {
      ImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ]);
    }
  }
};
</script>
```
:::

点击以下按钮查看手机端效果：

<van-button @click="mobileShow = true">点击查看手机端效果</van-button>
<mobile-popup v-model="mobileShow" :url="mobileUrl"></mobile-popup>

### 方法参数

| 参数名       | 说明      | 类型 |
|-----------|-----------|-----------|
| imageUrls | 需要预览的图片 | `Array` |
