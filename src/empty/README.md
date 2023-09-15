# Empty

### Install

```js
import Vue from 'vue';
import { Empty } from 'vant';

Vue.use(Empty);
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
  image="https://img01.yzcdn.cn/vant/leaf.jpg"
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
  <van-button round type="danger" class="bottom-button">Button</van-button>
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
| description | Description | _string_ | - |

### Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                           | Default Value     | Description |
| ------------------------------ | ----------------- | ----------- |
| @empty-padding                 | `@padding-xl 0`   | -           |
| @empty-image-size              | `160px`           | -           |
| @empty-description-margin-top  | `@padding-md`     | -           |
| @empty-description-padding     | `0 60px`          | -           |
| @empty-description-color       | `@gray-6`         | -           |
| @empty-description-font-size   | `@font-size-md`   | -           |
| @empty-description-line-height | `@line-height-md` | -           |
| @empty-bottom-margin-top       | `24px`            | -           |
