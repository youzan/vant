# Empty

### Install

```js
import { createApp } from 'vue';
import { Empty } from 'vant';

const app = createApp();
app.use(Empty);
```

## Usage

### Basic Usage

```html
<van-empty description="Description" />
```

### Image Type

Use the image prop to display different placeholder images.

```html
<!-- Error -->
<van-empty image="error" description="Description" />
<!-- Network -->
<van-empty image="network" description="Description" />
<!-- Search -->
<van-empty image="search" description="Description" />
```

### Custom Image

```html
<van-empty
  class="custom-image"
  image="https://img.yzcdn.cn/vant/leaf.jpg"
  description="Description"
/>

<style>
  .custom-image img {
    border-radius: 100%;
  }
</style>
```

### Bottom Content

```html
<van-empty description="Description">
  <van-button round type="danger" class="bottom-button">
    Button
  </van-button>
</van-empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image type，can be set to `error` `network` `search` or image URL | _string_ | `default` |
| image-size `v2.10.11` | Image size | _number \| string_ | - |
| description | Desciption | _string_ | - |

### Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |
