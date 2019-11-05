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
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
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
| deletable | Whether to show delete icon | *boolean* | `true` | 2.2.12 |
| capture | Capture，can be set to `camera` | *string* | - | - |
| after-read | Hook after reading the file | *Function* | - | - |
| before-read | Hook before reading the file, return false to stop reading the file, can return Promise | *Function* | - | - |
| before-delete | Hook before delete the file, return false to stop reading the file, can return Promise | *Function* | - | - |
| max-size | Max size of file | *number* | - | - |
| max-count | Max count of image | *number* | - | - |
| result-type | Type of file read result, can be set to `file` `text` | *string* | `dataUrl` | 2.2.7 |
| upload-text | Upload text | *string* | - | - |
| image-fit | Preview image fit mode | *string* | `cover` | 2.1.5 |

### Events

| Event | Description | Arguments |
|------|------|------|
| oversize | Triggered when file size over limit | Same as after-read |
| click-preview | Triggered when click preview image | Same as after-read |
| close-preview | Triggered when close full screen image preview | - |
| delete | Triggered when delete preview file | Same as after-read |

### Slots

| Name | Description |
|------|------|
| default | Custom icon |

### Parematers of before-read、after-read、before-delete

| Attribute | Description | Type |
|------|------|------|
| file | File object | *object* |
| detail | Detail info, contains name and index | *object* |

### ResultType

| Value | Description |
|------|------|
| file | Result contains File object |
| text | Result contains File object and text content |
| dataUrl | Result contains File object and base64 content |

### Methods

Use ref to get Uploader instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| closeImagePreview | Close full screen image preview | - | - |
