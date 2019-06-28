# Uploader 文件上传

### 引入

``` javascript
import { Uploader } from 'vant';

Vue.use(Uploader);
```

## 代码演示

### 基础用法

文件上传完毕后会触发`after-read`回调函数，获取到对应的`file`对象

```html
<van-uploader :after-read="afterRead" />
```

```javascript
export default {
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
```

### 图片预览

通过`v-model`可以绑定已经上传的图片列表，并展示图片列表的预览图

```html
<van-uploader v-model="fileList" multiple />
```

```javascript
export default {
  data() {
    return {
      fileList: []
    }
  }
};
```

### 限制上传数量

通过`max-count`属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域

```html
<van-uploader
  v-model="fileList"
  multiple
  :max-count="2"
/>
```

```javascript
export default {
  data() {
    return {
      fileList: []
    }
  }
};
```

### 自定义上传样式

通过插槽可以自定义上传区域的样式

```html
<van-uploader>
  <van-button icon="photo" type="primary">上传图片</van-button>
</van-uploader>
```

### 上传前校验

通过传入`beforeRead`函数可以在上传前进行校验，返回`true`表示校验通过，返回`false`表示校验失败。支持返回`Promise`进行异步校验

```html
<van-uploader :before-read="beforeRead" />
```

```js
export default {
  methods: {
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }
    
      return true;
    },

    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('请上传 jpg 格式图片');
          reject();
        } else {
          resolve();
        }
      });
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符，可以在回调函数的第二项参数中获取 | `String | Number` | - | 2.0.3 |
| accept | 接受的文件类型 | `String` | `image/*` | - |
| preview-image | 是否在上传完成后展示预览图 | `Boolean` | `true` | 2.0.0 |
| preview-size | 预览图和上传区域的尺寸，默认单位为`px` | `String | Number` | `80px` | 2.0.0 |
| multiple | 是否开启图片多选，部分安卓机型不支持 | `Boolean` | `false` | 2.0.0 |
| disabled | 是否禁用文件上传 | `Boolean` | `false` | - |
| capture | 图片选取模式，可选值为`camera`(直接调起摄像头) | `String` | - | 2.0.0 |
| before-read | 文件读取前的回调函数，返回`false`可终止文件读取，支持返回`Promise` | `Function` | - | - |
| after-read | 文件读取完成后的回调函数 | `Function` | - | - |
| max-size | 文件大小限制，单位为`byte` | `Number` | - | - |
| max-count | 文件上传数量限制 | `Number` | - | 2.0.0 |
| result-type | 文件读取结果类型，可选值为`text` | `String` | `dataUrl` | - |
| upload-text | 上传区域文字提示 | `String` | - | 2.0.0 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| oversize | 文件大小超过限制时触发 | 同`after-read` |
| delete | 删除文件预览时触发 | file: 被删除的文件对象 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义上传区域 |

### before-read、after-read 回调参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| file | 文件解析后的 file 对象 | `Object` |
| detail | 额外信息，包含 name 字段 | `Object` |
