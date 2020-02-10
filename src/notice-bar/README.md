# NoticeBar

### Install

```js
import Vue from 'vue';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
```

## Usage

### Basic Usage

```html
<van-notice-bar text="Notice Content" left-icon="volume-o" />
```

### Disable scroll

```html
<van-notice-bar :scrollable="false">
  Notice Content
</van-notice-bar>
```

### Wrapable

```html
<van-notice-bar wrapable :scrollable="false">
  Notice Content
</van-notice-bar>
```

### Mode

```html
<van-notice-bar mode="closeable">
  Notice Content
</van-notice-bar>

<van-notice-bar mode="link">
  Notice Content
</van-notice-bar>
```

### Custom Style

```html
<van-notice-bar
  color="#1989fa"
  background="#ecf9ff"
  left-icon="info-o"
>
  Notice Content
</van-notice-bar>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| mode | Mode, can be set to `closeable` `link` | *string* | `''` |
| text | Notice text content | *string* | `''` | - |
| color | Text color | *string* | `#f60` |
| background | Background color | *string* | `#fff7cc` |
| left-icon | Left Icon | *string* | - |
| delay | Animation delay (s) | *number \| string* | `1` |
| speed | Scroll speed (px/s) | *number \| string* | `50` |
| scrollable | Whether to scroll content | *boolean* | `true` |
| wrapable | Whether to enable text wrap | *boolean* | `false` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click NoticeBar | *event: Event* |
| close | Triggered when closed | *event: Event* |

### Slots

| Name | Description |
|------|------|
| default | Notice text content |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
