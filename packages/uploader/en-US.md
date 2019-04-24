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

#### Name

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

#### Set input attrs

You can set native properties such as `accpet`、`multiple` on Uploader, and the input will automatically inherits the attribute.

```html
<van-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
  <van-icon name="photograph" />
</van-uploader>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Input name | `String` | - |
| result-type | Type of file read result, can be set to `dataUrl` `text` | `String` | `dataUrl` |
| accept | Accepted file type | `String` | `image/*` |
| disabled | Whether to disabled the upload | `Boolean` | `false` |
| before-read | Hook before reading the file, return false to stop reading the file | `Function` | - |
| after-read | Hook after reading the file | `Function` | - |
| max-size | Max size of file | `Number` | - |

### Event

| Event | Description | Arguments |
|------|------|------|
| oversize | Triggered when file size over limit | Same as after-read |

### Slot

| Name | Description |
|------|------|
| - | Custom icon |

### Parematers of before-read、after-read

| Attribute | Description | Type |
|------|------|------|
| file | File object | `Object` |
| detail | Detail info | `Object` |
