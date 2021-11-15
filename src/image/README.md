# Image

### Install

```js
import Vue from 'vue';
import { Image as VanImage } from 'vant';

Vue.use(VanImage);
```

## Usage

### Basic Usage

```html
<van-image
  width="100"
  height="100"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### Fit Mode

```html
<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### Round

Show round image, it may not works at `fit=contain` and `fit=scale-down`.

```html
<van-image
  round
  width="10rem"
  height="10rem"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

### Lazy Load

```html
<van-image
  width="100"
  height="100"
  lazy-load
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
```

```js
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| src | Src | _string_ | - |
| fit | Fit mode | _string_ | `fill` |
| alt | Alt | _string_ | - |
| width | Width | _number \| string_ | - |
| height | Height | _number \| string_ | - |
| radius | Border Radius | _number \| string_ | `0` |
| round | Whether to be round | _boolean_ | `false` |
| lazy-load | Whether to enable lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |
| show-error | Whether to show error placeholder | _boolean_ | `true` |
| show-loading | Whether to show loading placeholder | _boolean_ | `true` |
| error-icon | Error icon | _string_ | `photo-fail` |
| loading-icon | Loading icon | _string_ | `photo` |
| icon-prefix `v2.10.12` | Icon className prefix | _string_ | `van-icon` |

### fit optional value

| name | description |
| --- | --- |
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of `none` or `contain` |

### Events

| Event | Description                    | Arguments      |
| ----- | ------------------------------ | -------------- |
| click | Emitted when image is clicked  | _event: Event_ |
| load  | Emitted when image loaded      | -              |
| error | Emitted when image load failed | -              |

### Slots

| Name             | Description                        |
| ---------------- | ---------------------------------- |
| default `v2.9.0` | Custom the content below the image |
| loading          | Custom loading placeholder         |
| error            | Custom error placeholder           |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                                | Default Value       | Description |
| ----------------------------------- | ------------------- | ----------- |
| @image-placeholder-text-color       | `@gray-6`           | -           |
| @image-placeholder-font-size        | `@font-size-md`     | -           |
| @image-placeholder-background-color | `@background-color` | -           |
| @image-loading-icon-size            | `32px`              | -           |
| @image-loading-icon-color           | `@gray-4`           | -           |
| @image-error-icon-size              | `32px`              | -           |
| @image-error-icon-color             | `@gray-4`           | -           |
