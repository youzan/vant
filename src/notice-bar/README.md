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
<van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
  Notice Content
</van-notice-bar>
```

### Vertical Scroll

```html
<van-notice-bar left-icon="volume-o" :scrollable="false">
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
    <van-swipe-item>Content 1</van-swipe-item>
    <van-swipe-item>Content 2</van-swipe-item>
    <van-swipe-item>Content 3</van-swipe-item>
  </van-swipe>
</van-notice-bar>

<style>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Mode, can be set to `closeable` `link` | _string_ | `''` |
| text | Notice text content | _string_ | `''` | - |
| color | Text color | _string_ | `#f60` |
| background | Background color | _string_ | `#fff7cc` |
| left-icon | Left Icon | _string_ | - |
| delay | Animation delay (s) | _number \| string_ | `1` |
| speed | Scroll speed (px/s) | _number \| string_ | `50` |
| scrollable | Whether to scroll content | _boolean_ | `true` |
| wrapable | Whether to enable text wrap | _boolean_ | `false` | - |

### Events

| Event           | Description                    | Arguments      |
| --------------- | ------------------------------ | -------------- |
| click           | Triggered when click NoticeBar | _event: Event_ |
| close           | Triggered when closed          | _event: Event_ |
| replay `v2.6.2` | Triggered when replay          | -              |

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| default    | Notice text content |
| left-icon  | Custom left icon    |
| right-icon | Custom right icon   |
