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

### Scrollable

```html
<!-- Enable scroll when text is short -->
<van-notice-bar scrollable text="Notice Content" />

<!-- Disable scroll when text is long -->
<van-notice-bar
  :scrollable="false"
  text="Technology is the common soul of the people who developed it."
/>
```

### Wrapable

```html
<van-notice-bar wrapable :scrollable="false">Notice Content</van-notice-bar>
```

### Mode

```html
<van-notice-bar mode="closeable">Notice Content</van-notice-bar>

<van-notice-bar mode="link">Notice Content</van-notice-bar>
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
| speed | Scroll speed (px/s) | _number \| string_ | `60` |
| scrollable | Whether to scroll content | _boolean_ | - |
| wrapable | Whether to enable text wrap | _boolean_ | `false` | - |

### Events

| Event           | Description                        | Arguments      |
| --------------- | ---------------------------------- | -------------- |
| click           | Emitted when NoticeBar is clicked  | _event: Event_ |
| close           | Emitted when NoticeBar is closed   | _event: Event_ |
| replay `v2.6.2` | Emitted when NoticeBar is replayed | -              |

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| default    | Notice text content |
| left-icon  | Custom left icon    |
| right-icon | Custom right icon   |

### Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Field instance and call instance methods.

| Name             | Description     | Attribute | Return value |
| ---------------- | --------------- | --------- | ------------ |
| reset `v2.12.32` | Reset NoticeBar | -         | -            |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                         | Default Value             | Description |
| ---------------------------- | ------------------------- | ----------- |
| @notice-bar-height           | `40px`                    | -           |
| @notice-bar-padding          | `0 @padding-md`           | -           |
| @notice-bar-wrapable-padding | `@padding-xs @padding-md` | -           |
| @notice-bar-text-color       | `@orange-dark`            | -           |
| @notice-bar-font-size        | `@font-size-md`           | -           |
| @notice-bar-line-height      | `24px`                    | -           |
| @notice-bar-background-color | `@orange-light`           | -           |
| @notice-bar-icon-size        | `16px`                    | -           |
| @notice-bar-icon-min-width   | `24px`                    | -           |
