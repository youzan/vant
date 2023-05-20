# 画廊

### 引入

```js
import Vue from 'vue';
import { VanGallery } from '@lcap/mobile-ui';

Vue.use(VanGallery);
```

## 代码演示

### 基础用法


```html
<van-gallery
  data-source="https://static-vusion.163yun.com/h5-template/cat.jpeg,https://static-vusion.163yun.com/h5-template/cat.jpeg">
</van-gallery>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data-source | 数据源 | Array, Object, Function, String | `() => []` |

