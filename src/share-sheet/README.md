# ShareSheet

### Install

```js
import Vue from 'vue';
import { ShareSheet } from 'vant';

Vue.use(ShareSheet);
```

## Usage

### Basic Usage

```html
<van-cell title="Show ShareSheet" @click="showShare = true" />
<van-share-sheet
  v-model="showShare"
  title="Share"
  :options="options"
  @select="onSelect"
/>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: 'Wechat', icon: 'wechat' },
        { name: 'Weibo', icon: 'weibo' },
        { name: 'Link', icon: 'link' },
        { name: 'Poster', icon: 'poster' },
        { name: 'Qrcode', icon: 'qrcode' },
      ],
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
};
```

### Multi Line

```html
<van-share-sheet v-model="showShare" title="Share" :options="options" />
```

```js
export default {
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: 'Wechat', icon: 'wechat' },
          { name: 'Wechat Moments', icon: 'wechat-moments' },
          { name: 'Weibo', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: 'Link', icon: 'link' },
          { name: 'Poster', icon: 'poster' },
          { name: 'Qrcode', icon: 'qrcode' },
          { name: 'Weapp Qrcode', icon: 'weapp-qrcode' },
        ],
      ],
    };
  },
};
```

### Show Description

```html
<van-share-sheet
  v-model="showShare"
  :options="options"
  title="Share"
  description="Description"
/>
```

```js
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: 'Wechat', icon: 'wechat' },
        { name: 'Weibo', icon: 'weibo' },
        { name: 'Link', icon: 'link', description: 'Description' },
        { name: 'Poster', icon: 'poster' },
        { name: 'Qrcode', icon: 'qrcode' },
      ],
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| options | Share options | _Option[]_ | `[]` |
| title | Title | _string_ | - |
| cancel-text | Cancel button text | _string_ | `'Cancel'` |
| description | Description | _string_ | - |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| lock-scroll | Whether to lock background scroll | _boolean_ | `true` |
| lazy-render | Whether to lazy render util appeared | _boolean_ | `true` |
| close-on-popstate | Whether to close when popstate | _boolean_ | `true` |
| close-on-click-overlay | Whether to close when overlay is clicked | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| get-container | Return the mount node for ShareSheet | _string \| () => Element_ | - |

### Data Structure of Option

| Key | Description | Type |
| --- | --- | --- |
| name | Option name | _string_ |
| description `v2.8.5` | Option description | _string_ |
| icon | Option icon，can be set to `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments` or image URL | _string_ |
| className | Option className is used to set the class props to the share item | _string_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Emitted when an option is clicked | _option: Option, index: number_ |
| cancel | Emitted when the cancel button is clicked | - |
| click-overlay `v2.9.1` | Emitted when overlay is clicked | - |

### Slots

| Name        | Description        |
| ----------- | ------------------ |
| title       | Custom title       |
| description | Custom description |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @share-sheet-header-padding | `@padding-sm @padding-md @padding-base` | - |
| @share-sheet-title-color | `@text-color` | - |
| @share-sheet-title-font-size | `@font-size-md` | - |
| @share-sheet-title-line-height | `@line-height-md` | - |
| @share-sheet-description-color | `@gray-6` | - |
| @share-sheet-description-font-size | `@font-size-sm` | - |
| @share-sheet-description-line-height | `16px` | - |
| @share-sheet-icon-size | `48px` | - |
| @share-sheet-option-name-color | `@gray-7` | - |
| @share-sheet-option-name-font-size | `@font-size-sm` | - |
| @share-sheet-option-description-color | `@gray-5` | - |
| @share-sheet-option-description-font-size | `@font-size-sm` | - |
| @share-sheet-cancel-button-font-size | `@font-size-lg` | - |
| @share-sheet-cancel-button-height | `48px` | - |
| @share-sheet-cancel-button-background | `@white` | - |
