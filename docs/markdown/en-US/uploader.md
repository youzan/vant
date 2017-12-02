## Uploader

### Install
``` javascript
import { Uploader } from 'vant';

Vue.component(Uploader.name, Uploader);
```

### Usage

#### Basic Usage

```html
<div class="uploader-container">
  <van-uploader :afterRead="logContent">
    <van-icon name="photograph" />
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

#### Set input attr
You can set native properties such as `accpet` on Uploader, and the input will automatically inherits the attribute.

```html
<van-uploader :afterRead="logContent" accept="image/gif, image/jpeg">
  <van-icon name="photograph" />
</van-uploader>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| resultType | The way to read the file, read as base64; read as text | `String` | `dataUrl` | `text` |
| disable | Whether to disable the upload, set to true during the image upload to prevent users from clicking this component to upload pictures | `Boolean` | `false` | - |
| beforeRead | Hook before reading the file, the first parameter is the selected file, return false to stop reading the file | `Function` | - | - |
| afterRead | Hook after reading the file, parameter format: { file ,content } | `Function` | - | - |

### Slot

| name | Description |
|-----------|-----------|
| - | Custom icon |
