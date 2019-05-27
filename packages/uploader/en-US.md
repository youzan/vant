# Uploader

### Install

``` javascript
import { Uploader } from 'vant';

Vue.use(Uploader);
```

## Usage

### Basic Usage

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

### Upload Style

```html
<van-uploader :after-read="onRead">
  <van-button icon="photo" type="primary">Upload Image</van-button>
</van-uploader>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Input name | `String` | - |
| accept | Accepted file type | `String` | `image/*` |
| multiple | Whether to enable multiple selection pictures | `Boolean` | `false` |
| disabled | Whether to disabled the upload | `Boolean` | `false` |
| capture | Capture，can be set to `camera` | `String` | - |
| before-read | Hook before reading the file, return false to stop reading the file | `Function` | - |
| after-read | Hook after reading the file | `Function` | - |
| max-size | Max size of file | `Number` | - |
| result-type | Type of file read result, can be set to `dataUrl` `text` | `String` | `dataUrl` |
| upload-text | Upload text | `String` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| oversize | Triggered when file size over limit | Same as after-read |

### Slots

| Name | Description |
|------|------|
| default | Custom icon |

### Parematers of before-read、after-read

| Attribute | Description | Type |
|------|------|------|
| file | File object | `Object` |
| detail | Detail info | `Object` |
