## Uploader 图片上传

### 使用指南
``` javascript
import { Uploader } from 'vant';

Vue.component(Uploader.name, Uploader);
```

### 代码演示

#### 基础用法

```html
<van-uploader :afterRead="logContent">
  <van-icon name="photograph"></van-icon>
</van-uploader>
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

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| resultType | 读取文件的方式，以base64的方式读取；以文本的方式读取 | `String` | `dataUrl` | `text` |
| disable | 是否禁用上传,在图片上传期间设置为true，禁止用户点击此组件上传图片 | `Boolean` | `false` | - |
| beforeRead | 读文件之前的钩子，参数为选择的文件，若返回 false 则停止读取文件 | `Function` | - | - |
| afterRead | 文件读完之后回调此函数，参数为 { file:'选择的文件',content:'读的内容' } | `Function` | - | - |

### Slot

| name | 描述 |
|-----------|-----------|
| - | 自定义上传显示图标 |
