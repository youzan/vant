## Uploader

### Install
``` javascript
import { Uploader } from 'vant';

Vue.use(Uploader);
```

### Usage

#### Basic Usage

```html
<div class="uploader-container">
  <van-uploader :after-read="onRead">
    <van-icon name="photograph" />
  </van-uploader>
</div>
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

#### Set input attr
You can set native properties such as `accpet`、`multiple` on Uploader, and the input will automatically inherits the attribute.

```html
<van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
  <van-icon name="photograph" />
</van-uploader>
```

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| result-type | Type of file read result | `String` | `dataUrl` | `text` |
| disable | Whether to disable the upload | `Boolean` | `false` | - |
| before-read | Hook before reading the file, return false to stop reading the file | `Function` | - | - |
| after-read | Hook after reading the file | `Function` | - | - |
| max-size | Max size of file | `Number` | - | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| oversize | Triggered when file size over limit | Same as after-read |

### Slot

| Name | Description |
|-----------|-----------|
| - | Custom icon |

### afterRead parematers
| Key | Description | Type |
|-----------|-----------|-----------|
| file | file object | `Object` |
| content | file content | `String` |