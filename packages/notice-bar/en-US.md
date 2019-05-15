# NoticeBar

### Install

``` javascript
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
```

## Usage

### Basic Usage

```html
<van-notice-bar
  text="Notice Content"
  left-icon="volume-o"
/>
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
| mode | Mode, can be set to `closeable` `link` | `String` | `''` |
| text | Notice text content | `String` | `''` | - |
| delay | Animation delay (s) | `Number` | `1` |
| speed | Scroll speed (px/s) | `Number` | `50` |
| scrollable | Whether to scroll content | `Boolean` | `true` |
| wrapable | Whether to enable text wrap | `Boolean` | `false` | - |
| left-icon | Left Icon | `String` | - |
| color | Text color | `String` | `#f60` |
| background | Background color | `String` | `#fff7cc` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click NoticeBar | - |
| close | Triggered when closed | - |

### Slots

| Name | Description |
|------|------|
| default | Notice text content |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
