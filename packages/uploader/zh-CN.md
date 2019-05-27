# Uploader 图片上传

### 引入

``` javascript
import { Uploader } from 'vant';

Vue.use(Uploader);
```

## 代码演示

### 基础用法

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

### 标识名称

```html
<van-uploader name="uploader" :after-read="onRead">
  <van-icon name="photograph" />
</van-uploader>
```

```javascript
export default {
  methods: {
    onRead(file, detail) {
      this.$toast(detail.name);
    }
  }
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符，可以在回调函数的第二项参数中获取 | `String` | - | 1.6.13 |
| result-type | 文件读取结果类型，可选值为 `text` | `String` | `dataUrl` | - |
| accept | 接受的文件类型 | `String` | `image/*` | - |
| disabled | 是否禁用图片上传 | `Boolean` | `false` | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | `Boolean` | `false` | 2.0.0 |
| capture | 捕获模式，可选值为`camera`(直接调起摄像头) | `String` | - | 2.0.0 |
| before-read | 读取前的回调函数，返回 false 可终止文件读取 | `Function` | - | - |
| after-read | 读取完成后的回调函数 | `Function` | - | - |
| max-size | 文件大小限制，单位为 byte | `Number` | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| oversize | 文件大小超过限制时触发 | 同 after-read |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义 uploader 内容 |

### before-read、after-read 回调参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| file | 文件解析后的 file 对象 | `Object` |
| detail | 额外信息，包含 name 字段 | `Object` |
