# Uploader

### Install

```js
import Vue from 'vue';
import { Uploader } from 'vant';

Vue.use(Uploader);
```

## Usage

### Basic Usage

```html
<van-uploader :after-read="afterRead" />
```

```js
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

```js
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
### Disabled

```html
<van-uploader disabled />
```

### Upload Status

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
          message: 'Uploading...'
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: 'Failed'
        }
      ]
    }
  },
  methods: {
    afterRead(file) {
      file.status = 'uploading';
      file.message = 'Uploading...';

      setTimeout(() => {
        file.status = 'failed';
        file.message = 'Failed';
      }, 1000);
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

```js
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
import { Toast } from 'vant';

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

| Attribute | Description | Type | Default |
|------|------|------|------|
| accept | Accepted [file type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers) | *string* | `image/*` |
| name `v2.0.3` | Input name | *number \| string* | - |
| preview-size | Size of preview image | *number \| string* | `80px` |
| preview-image `v2.1.5` | Whether to show image preview | *boolean* | `true` |
| preview-full-image | Whethe to show full screen image preview when click image | *boolean* | `true` |
| multiple | Whether to enable multiple selection pictures | *boolean* | `false` |
| disabled | Whether to disabled the upload | *boolean* | `false` |
| deletable `v2.2.12` | Whether to show delete icon | *boolean* | `true` |
| show-upload `v2.5.6` | Whether to show upload area | *boolean* | `true` |
| capture | Capture，can be set to `camera` | *string* | - |
| after-read | Hook after reading the file | *Function* | - |
| before-read | Hook before reading the file, return false to stop reading the file, can return Promise | *Function* | - |
| before-delete | Hook before delete the file, return false to stop reading the file, can return Promise | *Function* | - |
| max-size | Max size of file | *number \| string* | - |
| max-count | Max count of image | *number \| string* | - |
| result-type `v2.2.7` | Type of file read result, can be set to `file` `text` | *string* | `dataUrl` |
| upload-text | Upload text | *string* | - |
| image-fit `v2.1.5` | Preview image fit mode | *string* | `cover` |
| upload-icon `v2.5.4` | Upload icon | *string* | `photograph` |

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

Use [ref](https://vuejs.org/v2/api/#ref) to get Uploader instance and call instance methods

| Name | Description | Attribute | Return value |
|------|------|------|------|
| closeImagePreview | Close full screen image preview | - | - |
| chooseFile `v2.5.6` | Trigger choosing files, works with the user action context only because of browser security | - | - |
