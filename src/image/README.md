# Image

### Install

```js
import { createApp } from 'vue';
import { Image as VanImage } from 'vant';

const app = createApp();
app.use(VanImage);
```

## Usage

### Basic Usage

```html
<van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### Fit Mode

```html
<van-image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Round

Show round image, it may not works at `fit=contain` and `fit=scale-down`.

```html
<van-image
  round
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Lazy Load

```html
<van-image
  width="100"
  height="100"
  lazy-load
  src="https://img.yzcdn.cn/vant/cat.jpeg"
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
| fit | Fit mode | _string_ | `fill` |
| alt | Alt | _string_ | - |
| width | Width | _number \| string_ | - |
| height | Height | _number \| string_ | - |
| radius | Border Radius | _number \| string_ | `0` |
| round | Whether to be round | _boolean_ | `false` |
| lazy-load | Whether to enable lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |
| show-error | Whether to show error placeholder | _boolean_ | `true` |
| show-loading | Whether to show loading placeholder | _boolean_ | `true` |
| error-icon `v2.4.2` | Error icon | _string_ | `photo-fail` |
| loading-icon `v2.4.2` | Loading icon | _string_ | `photo` |

### fit optional value

| name | desctription |
| --- | --- |
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of `none` or `contain` |

### Events

| Event | Description                      | Arguments      |
| ----- | -------------------------------- | -------------- |
| click | Triggered when click image       | _event: Event_ |
| load  | Triggered when image loaded      | -              |
| error | Triggered when image load failed | -              |

### Slots

| Name             | Description                        |
| ---------------- | ---------------------------------- |
| default `v2.9.0` | Custom the content below the image |
| loading          | Custom loading placeholder         |
| error            | Custom error placeholder           |
