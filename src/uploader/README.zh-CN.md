# Uploader 文件上传

### 引入

```js
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

```js
export default {
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
```

### 文件预览

通过`v-model`可以绑定已经上传的文件列表，并展示文件列表的预览图

```html
<van-uploader v-model="fileList" multiple />
```

```js
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

### 禁用

通过`disabled`属性禁用文件上传

```html
<van-uploader disabled />
```

### 上传状态

通过`status`属性可以标识上传状态，`uploading`表示上传中，`failed`表示上传失败，`done`表示上传完成（从 2.4.7 版本开始支持）

```html
<van-uploader v-model="fileList" :after-read="afterRead" />
```

```js
export default {
  data() {
    return {
      fileList: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...'
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败'
        }
      ]
    }
  },
  methods: {
    afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';

      setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
      }, 1000);
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

```js
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
  <van-button icon="photo" type="primary">上传文件</van-button>
</van-uploader>
```

### 上传前自定义处理

通过传入`beforeRead`函数可以在上传前进行校验，返回`true`表示校验通过，返回`false`表示校验失败。支持返回`Promise`对 file 对象进行自定义处理，例如压缩图片。

```html
<van-uploader :before-read="beforeRead" />
```

```js
import { Toast } from 'vant';

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
          let img = new File(["foo"], "bar.jpg", {
            type: "image/jpeg",
          });
          resolve(img);
        }
      });
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| accept | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | *string* | `image/*` |
| name `v2.0.3` | 标识符，可以在回调函数的第二项参数中获取 | *number \| string* | - |
| preview-size | 预览图和上传区域的尺寸，默认单位为`px` | *number \| string* | `80px` |
| preview-image | 是否在上传完成后展示预览图 | *boolean* | `true` |
| preview-full-image `v2.1.5` | 是否在点击预览图后展示全屏图片预览 | *boolean* | `true` |
| multiple | 是否开启图片多选，部分安卓机型不支持 | *boolean* | `false` |
| disabled | 是否禁用文件上传 | *boolean* | `false` |
| deletable `v2.2.12` | 是否展示删除按钮 | *boolean* | `true` |
| show-upload `v2.5.6` | 是否展示上传区域 | *boolean* | `true` |
| capture | 图片选取模式，可选值为`camera`(直接调起摄像头) | *string* | - |
| after-read | 文件读取完成后的回调函数 | *Function* | - |
| before-read | 文件读取前的回调函数，返回`false`可终止文件读取，<br>支持返回`Promise` | *Function* | - |
| before-delete | 文件删除前的回调函数，返回`false`可终止文件读取，<br>支持返回`Promise` | *Function* | - |
| max-size | 文件大小限制，单位为`byte` | *number \| string* | - |
| max-count | 文件上传数量限制 | *number \| string* | - |
| result-type `v2.2.7` | 文件读取结果类型，可选值为`file` `text` | *string* | `dataUrl` |
| upload-text | 上传区域文字提示 | *string* | - |
| image-fit `v2.1.5` | 预览图裁剪模式，可选值见 [Image](#/zh-CN/image) 组件 | *string* | `cover` |
| upload-icon `v2.5.4` | 上传区域[图标名称](#/zh-CN/icon)或图片链接 | *string* | `photograph` |

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

通过 ref 可以获取到 Uploader 实例并调用实例方法，详见[组件实例方法](#/zh-CN/quickstart#zu-jian-shi-li-fang-fa)

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| closeImagePreview | 关闭全屏的图片预览 | - | - |
| chooseFile `v2.5.6` | 主动调起文件选择，由于浏览器安全限制，只有在用户触发操作的上下文中调用才有效 | - | - |
