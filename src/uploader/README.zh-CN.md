# Uploader 文件上传

### 引入

``` javascript
import Vue from 'vue';
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
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ]
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
| name | 标识符，可以在回调函数的第二项参数中获取 | *string \| number* | - | 2.0.3 |
| accept | 接受的文件类型 | *string* | `image/*` | - |
| preview-size | 预览图和上传区域的尺寸，默认单位为`px` | *string \| number* | `80px` | - |
| preview-image | 是否在上传完成后展示预览图 | *boolean* | `true` | - |
| preview-full-image | 是否在点击预览图后展示全屏图片预览 | *boolean* | `true` | 2.1.5 |
| multiple | 是否开启图片多选，部分安卓机型不支持 | *boolean* | `false` | - |
| disabled | 是否禁用文件上传 | *boolean* | `false` | - |
| deletable | 是否展示删除按钮 | *boolean* | `true` | 2.2.12 |
| capture | 图片选取模式，可选值为`camera`(直接调起摄像头) | *string* | - | - |
| after-read | 文件读取完成后的回调函数 | *Function* | - | - |
| before-read | 文件读取前的回调函数，返回`false`可终止文件读取，支持返回`Promise` | *Function* | - | - |
| before-delete | 文件删除前的回调函数，返回`false`可终止文件读取，支持返回`Promise` | *Function* | - | - |
| max-size | 文件大小限制，单位为`byte` | *number* | - | - |
| max-count | 文件上传数量限制 | *number* | - | - |
| result-type | 文件读取结果类型，可选值为`file` `text` | *string* | `dataUrl` | 2.2.7 |
| upload-text | 上传区域文字提示 | *string* | - | - |
| image-fit | 预览图裁剪模式，可选值见 [Image](#/zh-CN/image) 组件 | *string* | `cover` | 2.1.5 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| oversize | 文件大小超过限制时触发 | 同`after-read` |
| click-preview | 点击预览图时触发 | 同`after-read` | 
| close-preview | 关闭全屏图片预览时触发 | - |
| delete | 删除文件预览时触发 | 同`after-read` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义上传区域 |

### 回调参数

before-read、after-read、before-delete 执行时会传递以下回调参数：

| 参数名 | 说明 | 类型 |
|------|------|------|
| file | 文件解析后的 file 对象 | *object* |
| detail | 额外信息，包含 name 和 index 字段 | *object* |

### ResultType 可选值

`result-type`字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。

| 值 | 描述 |
|------|------|
| file | 结果仅包含 File 对象 |
| text | 结果包含 File 对象，以及文件的文本内容 |
| dataUrl | 结果包含 File 对象，以及文件对应的 base64 编码 |

### 方法

通过 ref 可以获取到 Uploader 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| closeImagePreview | 关闭全屏的图片预览 | - | - |
