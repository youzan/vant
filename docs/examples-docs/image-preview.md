<script>
import { ImagePreview } from 'src/index';

export default {
  methods: {
    handleImagePreview() {
      ImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg?imageView2/2/w/980/h/980/q/75/format/webp',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg?imageView2/2/w/980/h/980/q/75/format/webp',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png'
      ]);
    }
  }
};
</script>

## ImagePreview 图片预览

### 基础用法

:::demo
```html
<zan-button @click="handleImagePreview">预览图片</zan-button>
```
:::
