## Uploader 图片上传

### 使用指南
``` javascript
import { Uploader } from 'vant';

Vue.use(Uploader);
```

### 代码演示

#### 基础用法

```html
<van-uploader :after-read="onRead">
  <van-icon name="photograph" />
</van-uploader>
```

```javascript
export default {
  methods: {
    onRead(file) {
      console.log(file)
    }
  }
};
```

#### 设置 Input 属性
可以直接在 Uploader 上设置 accpet、multiple 等原生属性，input 会自动继承该属性

```html
<van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
  <van-icon name="photograph" />
</van-uploader>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| result-type | 读取文件的方式，以base64的方式读取；以文本的方式读取 | `String` | `dataUrl` | `text` |
| disable | 是否禁用上传,在图片上传期间设置为true，禁止用户点击此组件上传图片 | `Boolean` | `false` | - |
| before-read | 读文件之前的钩子，参数为选择的文件，若返回 false 则停止读取文件 | `Function` | - | - |
| after-read | 文件读完之后回调此函数，参数为 { file:'选择的文件',content:'读的内容' } | `Function` | - | - |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义上传显示图标 |
