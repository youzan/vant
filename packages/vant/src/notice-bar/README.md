# NoticeBar

### Intro

Used to display a group of message notifications in a continuons loop.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { NoticeBar } from 'vant';

const app = createApp();
app.use(NoticeBar);
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
| text | Notice text content | _string_ | `''` |
| color | Text color | _string_ | `#f60` |
| background | Background color | _string_ | `#fff7cc` |
| left-icon | Left Icon | _string_ | - |
| delay | Animation delay (s) | _number \| string_ | `1` |
| speed | Scroll speed (px/s) | _number \| string_ | `60` |
| scrollable | Whether to scroll content | _boolean_ | - |
| wrapable | Whether to enable text wrap | _boolean_ | `false` |

### Events

| Event  | Description                        | Arguments           |
| ------ | ---------------------------------- | ------------------- |
| click  | Emitted when NoticeBar is clicked  | _event: MouseEvent_ |
| close  | Emitted when NoticeBar is closed   | _event: MouseEvent_ |
| replay | Emitted when NoticeBar is replayed | -                   |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get NoticeBar instance and call instance methods.

| Name           | Description     | Attribute | Return value |
| -------------- | --------------- | --------- | ------------ |
| reset `v3.1.1` | Reset NoticeBar | -         | -            |

### Types

The component exports the following type definitions:

```ts
import type { NoticeBarMode, NoticeBarProps, NoticeBarInstance } from 'vant';
```

`NoticeBarInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { NoticeBarInstance } from 'vant';

const noticeBarRef = ref<NoticeBarInstance>();

noticeBarRef.value?.reset();
```

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| default    | Notice text content |
| left-icon  | Custom left icon    |
| right-icon | Custom right icon   |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-notice-bar-height | _40px_ | - |
| --van-notice-bar-padding | _0 var(--van-padding-md)_ | - |
| --van-notice-bar-wrapable-padding | _var(--van-padding-xs) var(--van-padding-md)_ | - |
| --van-notice-bar-text-color | _var(--van-orange-dark)_ | - |
| --van-notice-bar-font-size | _var(--van-font-size-md)_ | - |
| --van-notice-bar-line-height | _24px_ | - |
| --van-notice-bar-background-color | _var(--van-orange-light)_ | - |
| --van-notice-bar-icon-size | _16px_ | - |
| --van-notice-bar-icon-min-width | _24px_ | - |
