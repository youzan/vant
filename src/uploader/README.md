# Uploader

### Install

``` javascript
import { Uploader } from 'vant';

Vue.use(Uploader);
```

## Usage

### Basic Usage

```html
<van-uploader :after-read="afterRead" />
```

```javascript
export default {
  methods: {
    afterRead(file) {
      console.log(file)
    }
  }
};
```

### Preview File

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

### Max Count

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

### Upload Style

```html
<van-uploader>
  <van-button icon="photo" type="primary">Upload Image</van-button>
</van-uploader>
```

### Before Read

```html
<van-uploader :before-read="beforeRead" />
```

```js
export default {
  methods: {
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('Please upload an image in jpg format');
        return false;
      }
    
      return true;
    },

    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('Please upload an image in jpg format');
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

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Input name | `string | number` | - |
| accept | Accepted file type | `string` | `image/*` |
| preview-image | Whether to show image preview | `boolean` | `true` |
| preview-size | Size of preview image | `string | number` | `80px` |
| multiple | Whether to enable multiple selection pictures | `boolean` | `false` |
| disabled | Whether to disabled the upload | `boolean` | `false` |
| capture | Capture，can be set to `camera` | `string` | - |
| before-read | Hook before reading the file, return false to stop reading the file, can return Promise | `Function` | - |
| after-read | Hook after reading the file | `Function` | - |
| max-size | Max size of file | `number` | - |
| max-count | Max count of image | `number` | - |
| result-type | Type of file read result, can be set to `dataUrl` `text` | `string` | `dataUrl` |
| upload-text | Upload text | `string` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| oversize | Triggered when file size over limit | Same as after-read |
| delete | Triggered when delete preview file | file |

### Slots

| Name | Description |
|------|------|
| default | Custom icon |

### Parematers of before-read、after-read

| Attribute | Description | Type |
|------|------|------|
| file | File object | `object` |
| detail | Detail info | `object` |
