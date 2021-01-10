# Uploader

### Install

```js
import { createApp } from 'vue';
import { Uploader } from 'vant';

const app = createApp();
app.use(Uploader);
```

## Usage

### Basic Usage

```html
<van-uploader :after-read="afterRead" />
```

```js
export default {
  setup() {
    const afterRead = (file) => {
      console.log(file);
    };

    return {
      afterRead,
    };
  },
};
```

### Preview File

```html
<van-uploader v-model="fileList" multiple />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const fileList = ref([
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      { url: 'https://cloud-image', isImage: true },
    ]);

    return {
      fileList,
    };
  },
};
```

### Upload Status

```html
<van-uploader v-model="fileList" :after-read="afterRead" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const fileList = ref([
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        status: 'uploading',
        message: 'Uploading...',
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        status: 'failed',
        message: 'Failed',
      },
    ]);

    const afterRead = (file) => {
      file.status = 'uploading';
      file.message = 'Uploading...';

      setTimeout(() => {
        file.status = 'failed';
        file.message = 'Failed';
      }, 1000);
    };

    return {
      fileList,
      afterRead,
    };
  },
};
```

### Max Count

```html
<van-uploader v-model="fileList" multiple :max-count="2" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const fileList = ref([]);

    return {
      fileList,
    };
  },
};
```

### Max Size

```html
<van-uploader multiple :max-size="500 * 1024" @oversize="onOversize" />
```

```js
import { Toast } from 'vant';

export default {
  setup() {
    const onOversize = (file) => {
      console.log(file);
      Toast('File size cannot exceed 500kb');
    };

    return {
      onOversize,
    };
  },
};
```

### Custom Upload Area

```html
<van-uploader>
  <van-button icon="plus" type="primary">Upload Image</van-button>
</van-uploader>
```

### Preview Cover

```html
<van-uploader v-model="fileList">
  <template #preview-cover="{ file }">
    <div class="preview-cover van-ellipsis">{{ file.name }}</div>
  </template>
</van-uploader>

<style>
  .preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
```

### Before Read

```html
<van-uploader :before-read="beforeRead" />
```

```js
import { Toast } from 'vant';

export default {
  setup() {
    // 返回布尔值
    const beforeRead = (file) => {
      if (file.type !== 'image/jpeg') {
        Toast('Please upload an image in jpg format');
        return false;
      }
      return true;
    };

    // 返回 Promise
    const asyncBeforeRead = (file) => {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('Please upload an image in jpg format');
          reject();
        } else {
          let img = new File(['foo'], 'bar.jpg', {
            type: 'image/jpeg',
          });
          resolve(img);
        }
      });
    };

    return {
      beforeRead,
      asyncBeforeRead,
    };
  },
};
```

### Disable Uploader

Use `disabled` prop to disable uploader.

```html
<van-uploader disabled />
```

### Customize Single Preview Image Style

```html
<van-uploader v-model="fileList" :deletable="false" />
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const fileList = ref([
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      {
        url: 'https://img.yzcdn.cn/vant/sand.jpg',
        deletable: true,
        beforeDelete: () => {
          Toast('Customize the events and styles of a single preview image');
        },
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        deletable: true,
        imageFit: 'contain',
        previewSize: 120,
      },
    ]);
    return {
      fileList:
    };
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | List of uploaded files | _FileListItem[]_ | - |
| accept | Accepted [file type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers) | _string_ | `image/*` |
| name | Input name | _number \| string_ | - |
| preview-size | Size of preview image | _number \| string_ | `80px` |
| preview-image | Whether to show image preview | _boolean_ | `true` |
| preview-full-image | Whethe to show full screen image preview when image is clicked | _boolean_ | `true` |
| preview-options | Options of full screen image preview，see [ImagePreview](#/en-US/image-preview) | _object_ | - |
| multiple | Whether to enable multiple selection pictures | _boolean_ | `false` |
| disabled | Whether to disabled the upload | _boolean_ | `false` |
| deletable | Whether to show delete icon | _boolean_ | `true` |
| show-upload | Whether to show upload area | _boolean_ | `true` |
| lazy-load | Whether to enable lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |
| capture | Capture，can be set to `camera` | _string_ | - |
| after-read | Hook after reading the file | _Function_ | - |
| before-read | Hook before reading the file, return false to stop reading the file, can return Promise | _Function_ | - |
| before-delete | Hook before delete the file, return false to stop reading the file, can return Promise | _Function_ | - |
| max-size | Max size of file | _number \| string_ | - |
| max-count | Max count of image | _number \| string_ | - |
| result-type | Type of file read result, can be set to `file` `text` | _string_ | `dataUrl` |
| upload-text | Upload text | _string_ | - |
| image-fit | Preview image fit mode | _string_ | `cover` |
| upload-icon | Upload icon | _string_ | `photograph` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| oversize | Emitted when file size over limit | Same as after-read |
| click-preview | Emitted when preview image is clicked | Same as after-read |
| close-preview | Emitted when the full screen image preview is closed | - |
| delete | Emitted when preview file is deleted | Same as after-read |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| default | Custom icon | - |
| preview-cover | Custom content that covers the image preview | `item: FileListItem` |

### Parematers of before-read、after-read、before-delete

| Attribute | Description                          | Type     |
| --------- | ------------------------------------ | -------- |
| file      | File object                          | _object_ |
| detail    | Detail info, contains name and index | _object_ |

### ResultType

| Value   | Description                                    |
| ------- | ---------------------------------------------- |
| file    | Result contains File object                    |
| text    | Result contains File object and text content   |
| dataUrl | Result contains File object and base64 content |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get Uploader instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| closeImagePreview | Close full screen image preview | - | - |
| chooseFile | Trigger choosing files, works with the user action context only because of browser security | - | - |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                               | Default Value        | Description |
| ---------------------------------- | -------------------- | ----------- |
| @uploader-size                     | `80px`               | -           |
| @uploader-icon-size                | `24px`               | -           |
| @uploader-icon-color               | `@gray-4`            | -           |
| @uploader-text-color               | `@gray-6`            | -           |
| @uploader-text-font-size           | `@font-size-sm`      | -           |
| @uploader-upload-background-color  | `@gray-1`            | -           |
| @uploader-upload-active-color      | `@active-color`      | -           |
| @uploader-delete-color             | `@white`             | -           |
| @uploader-delete-icon-size         | `14px`               | -           |
| @uploader-delete-background-color  | `rgba(0, 0, 0, 0.7)` | -           |
| @uploader-file-background-color    | `@background-color`  | -           |
| @uploader-file-icon-size           | `20px`               | -           |
| @uploader-file-icon-color          | `@gray-7`            | -           |
| @uploader-file-name-padding        | `0 @padding-base`    | -           |
| @uploader-file-name-margin-top     | `@padding-xs`        | -           |
| @uploader-file-name-font-size      | `@font-size-sm`      | -           |
| @uploader-file-name-text-color     | `@gray-7`            | -           |
| @uploader-mask-background-color    | `fade(@gray-8, 88%)` | -           |
| @uploader-mask-icon-size           | `22px`               | -           |
| @uploader-mask-message-font-size   | `@font-size-sm`      | -           |
| @uploader-mask-message-line-height | `@line-height-xs`    | -           |
| @uploader-loading-icon-size        | `22px`               | -           |
| @uploader-loading-icon-color       | `@white`             | -           |
| @uploader-disabled-opacity         | `@disabled-opacity`  | -           |
