# Uploader 图片上传

### 引入

``` javascript
import { Uploader } from 'vant';

Vue.use(Uploader);
```

## 代码演示

### 基础用法

```html
<van-uploader :after-read="onRead" />
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

### 自定义上传样式

```html
<van-uploader :after-read="onRead">
  <van-button icon="photo" type="primary">上传图片</van-button>
</van-uploader>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符，可以在回调函数的第二项参数中获取 | `String` | - | 1.6.13 |
| accept | 接受的文件类型 | `String` | `image/*` | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | `Boolean` | `false` | 2.0.0 |
| disabled | 是否禁用图片上传 | `Boolean` | `false` | - |
| capture | 图片选取模式，可选值为`camera`(直接调起摄像头) | `String` | - | 2.0.0 |
| before-read | 文件读取前的回调函数，返回`false`可终止文件读取 | `Function` | - | - |
| after-read | 文件读取完成后的回调函数 | `Function` | - | - |
| max-size | 文件大小限制，单位为`byte` | `Number` | - | - |
| result-type | 文件读取结果类型，可选值为`text` | `String` | `dataUrl` | - |
| upload-text | 上传区域文字提示 | `String` | - | 2.0.0 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| oversize | 文件大小超过限制时触发 | 同 after-read |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义上传区域 |

### before-read、after-read 回调参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| file | 文件解析后的 file 对象 | `Object` |
| detail | 额外信息，包含 name 字段 | `Object` |
