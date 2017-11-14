<script>
export default {
  methods: {
    logContent(file) {
      console.log(file)
    }
  }
};  
</script>

## Uploader

### Install
``` javascript
import { Uploader } from 'vant';

Vue.component(Uploader.name, Uploader);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<div class="uploader-container">
  <van-uploader :after-read="logContent">
    <van-icon name="photograph"></van-icon>
  </van-uploader>
</div>
```

```javascript
export default {
  methods: {
    logContent(file) {
      console.log(file)
    }
  }
};  
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| resultType | 读取文件的方式，以base64的方式读取；以文本的方式读取 | `String` | `dataUrl` | `text` |
| disable | 是否禁用上传,在图片上传期间设置为true，禁止用户点击此组件上传图片 | `Boolean` | `false` | - |
| beforeRead | 读文件之前的钩子，参数为选择的文件，若返回 false 则停止读取文件 | `Function` | - | - |
| afterRead | 文件读完之后回调此函数，参数为 { file:'选择的文件',content:'读的内容' } | `Function` | - | - |

### Slot

| name | Description |
|-----------|-----------|
| - | 自定义上传显示图标 |
