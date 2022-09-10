# Empty

### Intro

Occupation reminder when empty.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

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

### Custom Size

Using `image-size` prop to custom the size of image.

```html
<!-- The default unit is px -->
<van-empty image-size="100" description="Description" />
<!-- Support other units, such as rem, vh, vw -->
<van-empty image-size="10rem" description="Description" />
```

You can set the width and height separately.

```html
<van-empty :image-size="[60, 40]" description="Description" />
```

### Custom Image

```html
<van-empty
  image="https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg"
  image-size="80"
  description="Description"
/>
```

### Bottom Content

```html
<van-empty description="Description">
  <van-button round type="primary" class="bottom-button">Button</van-button>
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
| image | Image type, can be set to `error` `network` `search` or image URL | _string_ | `default` |
| image-size | Image size | _number \| string \| Array_ | - |
| description | Description | _string_ | - |

### Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |

### Types

The component exports the following type definitions:

```ts
import type { EmptyProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-empty-padding | _var(--van-padding-xl) 0_ | - |
| --van-empty-image-size | _160px_ | - |
| --van-empty-description-margin-top | _var(--van-padding-md)_ | - |
| --van-empty-description-padding | _0 60px_ | - |
| --van-empty-description-color | _var(--van-text-color-2)_ | - |
| --van-empty-description-font-size | _var(--van-font-size-md)_ | - |
| --van-empty-description-line-height | _var(--van-line-height-md)_ | - |
| --van-empty-bottom-margin-top | _24px_ | - |
