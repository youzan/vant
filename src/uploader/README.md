# Uploader

### Install

``` javascript
import Vue from 'vue';
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
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/cat.jpeg' }
      ]
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

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| name | Input name | *string \| number* | - | 2.0.3 |
| accept | Accepted file type | *string* | `image/*` | - |
| preview-size | Size of preview image | *string \| number* | `80px` | - |
| preview-image | Whether to show image preview | *boolean* | `true` | 2.1.5 |
| preview-full-image | Whethe to show full screen image preview when click image | *boolean* | `true` | - |
| multiple | Whether to enable multiple selection pictures | *boolean* | `false` | - |
| disabled | Whether to disabled the upload | *boolean* | `false` | - |
| capture | Capture，can be set to `camera` | *string* | - | - |
| after-read | Hook after reading the file | *Function* | - | - |
| before-read | Hook before reading the file, return false to stop reading the file, can return Promise | *Function* | - | - |
| before-delete | Hook before delete the file, return false to stop reading the file, can return Promise | *Function* | - | - |
| max-size | Max size of file | *number* | - | - |
| max-count | Max count of image | *number* | - | - |
| result-type | Type of file read result, can be set to `dataUrl` `text` | *string* | `dataUrl` | - |
| upload-text | Upload text | *string* | - | - |
| image-fit | Preview image fit mode | *string* | `cover` | 2.1.5 |

### Events

| Event | Description | Arguments |
|------|------|------|
| oversize | Triggered when file size over limit | Same as after-read |
| click-preview | Triggered when click preview image | Same as after-read |
| close-preview | Triggered when close full screen image preview | - |
| delete | Triggered when delete preview file | file |

### Slots

| Name | Description |
|------|------|
| default | Custom icon |

### Parematers of before-read、after-read、before-delete

| Attribute | Description | Type |
|------|------|------|
| file | File object | *object* |
| detail | Detail info | *object* |
