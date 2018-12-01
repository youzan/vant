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

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| result-type | 文件读取结果类型，可选值为 `text` | `String` | `dataUrl` | - |
| accept | 接受的文件类型 | `String` | `image/*` | - |
| disabled | 是否禁用图片上传 | `Boolean` | `false` | - |
| before-read | 读取前的回调函数，返回 false 可终止文件读取 | `Function` | - | - |
| after-read | 读取完成后的回调函数 | `Function` | - | - |
| max-size | 文件大小限制，单位为 byte | `Number` | - | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| oversize | 文件大小超过限制时触发 | 同 after-read |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义 uploader 内容 |

### after-read 回调参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| file | 文件解析后的 file 对象 | `Object` |
| content | 文件内容 | `String` |
