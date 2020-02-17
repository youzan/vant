# Image

### Install

```js
import Vue from 'vue';
import { Image } from 'vant';

Vue.use(Image);
```

## Usage

### Basic Usage

```html
<van-image
  width="100"
  height="100"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
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

Show round image, it may not works at `fit=contain` and `fit=scale-down`

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
import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| src | Src | *string* | - |
| fit | Fit mode | *string* | `fill` |
| alt | Alt | *string* | - |
| width | Width | *number \| string* | - |
| height | Height | *number \| string* | - |
| radius `v2.1.6` | Border Radius | *number \| string* | `0` |
| round | Whether to be round | *boolean* | `false` |
| lazy-load | Whether to enable lazy load，should register [Lazyload](#/en-US/lazyload) component | *boolean* | `false` |
| show-error `v2.0.9` | Whether to show error placeholder | *boolean* | `true` |
| show-loading `v2.0.9` | Whether to show loading placeholder | *boolean* | `true` |
| error-icon `v2.4.2` | Error icon | *string* | `warning-o` |
| loading-icon `v2.4.2` | Loading icon | *string* | `photo-o` |

### fit optional value

| name | desctription |
|------|------|
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of `none` or `contain` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click image | *event: Event* |
| load | Triggered when image loaded | - |
| error | Triggered when image load failed | - |

### Slots

| Name | Description |
|------|------|
| loading | Custom loading placeholder |
| error | Custom error placeholder |
