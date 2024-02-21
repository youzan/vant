# Image

### Intro

Enhanced img tag with multiple image fill modes, support for image lazy loading, loading hint, loading failure hint.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Image as VanImage } from 'vant';

const app = createApp();
app.use(VanImage);
```

## Usage

### Basic Usage

```html
<van-image
  width="100"
  height="100"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
```

### Fit Mode

Same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).

```html
<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
```

### Position

Same as [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position).

```html
<van-image
  width="10rem"
  height="10rem"
  fit="cover"
  position="left"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
```

### Round

Show round image, it may not works at `fit=contain` and `fit=scale-down`.

```html
<van-image
  round
  width="10rem"
  height="10rem"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
```

### Lazy Load

```html
<van-image
  width="100"
  height="100"
  lazy-load
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
```

```js
import { createApp } from 'vue';
import { Lazyload } from 'vant';

const app = createApp();
app.use(Lazyload);
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| src | Src | _string_ | - |
| fit | Fit mode, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | _string_ | `fill` |
| position | Position, same as [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position), can be set to `top` `right` `bottom` `left` or `string` | _string_ | `center` |
| alt | Alt | _string_ | - |
| width | Width | _number \| string_ | - |
| height | Height | _number \| string_ | - |
| radius | Border Radius | _number \| string_ | `0` |
| round | Whether to be round | _boolean_ | `false` |
| block `3.6.3` | Whether the root node is a block element | _boolean_ | `false` |
| lazy-load | Whether to enable lazy load, should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |
| show-error | Whether to show error placeholder | _boolean_ | `true` |
| show-loading | Whether to show loading placeholder | _boolean_ | `true` |
| error-icon | Error icon | _string_ | `photo-fail` |
| loading-icon | Loading icon | _string_ | `photo` |
| icon-size | Icon size | _number \| string_ | `32px` |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| crossorigin | same as [crossorigin](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin) | _string_ | - |
| referrerpolicy | same as [referrerpolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) | _string_ | - |

### fit optional value

| name | description |
| --- | --- |
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of `none` or `contain` |

### Events

| Event | Description                    | Arguments           |
| ----- | ------------------------------ | ------------------- |
| click | Emitted when image is clicked  | _event: MouseEvent_ |
| load  | Emitted when image loaded      | _event: Event_      |
| error | Emitted when image load failed | -                   |

### Slots

| Name    | Description                        |
| ------- | ---------------------------------- |
| default | Custom the content below the image |
| loading | Custom loading placeholder         |
| error   | Custom error placeholder           |

### Types

The component exports the following type definitions:

```ts
import type { ImageFit, ImagePosition, ImageProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                               | Default Value             | Description |
| ---------------------------------- | ------------------------- | ----------- |
| --van-image-placeholder-text-color | _var(--van-text-color-2)_ | -           |
| --van-image-placeholder-font-size  | _var(--van-font-size-md)_ | -           |
| --van-image-placeholder-background | _var(--van-background)_   | -           |
| --van-image-loading-icon-size      | _32px_                    | -           |
| --van-image-loading-icon-color     | _var(--van-gray-4)_       | -           |
| --van-image-error-icon-size        | _32px_                    | -           |
| --van-image-error-icon-color       | _var(--van-gray-4)_       | -           |
