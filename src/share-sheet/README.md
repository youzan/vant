# ShareSheet

### Intro

A pop-up sharing panel at the bottom for displaying the action buttons corresponding to each sharing channel, without specific sharing logic.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { ShareSheet } from 'vant';

const app = createApp();
app.use(ShareSheet);
```

## Usage

### Basic Usage

```html
<van-cell title="Show ShareSheet" @click="showShare = true" />
<van-share-sheet
  v-model:show="showShare"
  title="Share"
  :options="options"
  @select="onSelect"
/>
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const showShare = ref(false);
    const options = [
      { name: 'Wechat', icon: 'wechat' },
      { name: 'Weibo', icon: 'weibo' },
      { name: 'Link', icon: 'link' },
      { name: 'Poster', icon: 'poster' },
      { name: 'Qrcode', icon: 'qrcode' },
    ];

    const onSelect = (option) => {
      Toast(option.name);
      showShare.value = false;
    };

    return {
      options,
      onSelect,
      showShare,
    };
  },
};
```

### Multi Line

```html
<van-share-sheet v-model:show="showShare" title="Share" :options="options" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showShare = ref(false);
    const options = [
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
    ];

    return {
      options,
      showShare,
    };
  },
};
```

### Custom Icon

```html
<van-share-sheet v-model:show="showShare" :options="options" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showShare = ref(false);
    const options = [
      {
        name: 'Name',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
      },
      {
        name: 'Name',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
      },
      {
        name: 'Name',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
      },
    ];

    return {
      options,
      showShare,
    };
  },
};
```

### Show Description

```html
<van-share-sheet
  v-model:show="showShare"
  :options="options"
  title="Share"
  description="Description"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showShare = ref(false);
    const options = [
      { name: 'Wechat', icon: 'wechat' },
      { name: 'Weibo', icon: 'weibo' },
      { name: 'Link', icon: 'link', description: 'Description' },
      { name: 'Poster', icon: 'poster' },
      { name: 'Qrcode', icon: 'qrcode' },
    ];

    return {
      options,
      showShare,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:show | Whether to show ShareSheet | _boolean_ | `false` |
| options | Share options | _Option[]_ | `[]` |
| title | Title | _string_ | - |
| cancel-text | Cancel button text | _string_ | `'Cancel'` |
| description | Description | _string_ | - |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlay-class | Custom overlay class | _string \| Array \| object_ | - |
| overlay-style | Custom overlay style | _object_ | - |
| lock-scroll | Whether to lock background scroll | _boolean_ | `true` |
| lazy-render | Whether to lazy render util appeared | _boolean_ | `true` |
| close-on-popstate | Whether to close when popstate | _boolean_ | `true` |
| close-on-click-overlay | Whether to close when overlay is clicked | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| teleport | Return the mount node for ShareSheet | _string \| Element_ | - |

### Data Structure of Option

| Key | Description | Type |
| --- | --- | --- |
| name | Option name | _string_ |
| description | Option description | _string_ |
| icon | Option icon，can be set to `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments` or image URL | _string_ |
| className | Option className is used to set the class props to the share item | _string_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Emitted when an option is clicked | _option: Option, index: number_ |
| cancel | Emitted when the cancel button is clicked | - |
| open | Emitted when opening ShareSheet | - |
| close | Emitted when closing ShareSheet | - |
| opened | Emitted when ShareSheet is opened | - |
| closed | Emitted when ShareSheet is closed | - |
| click-overlay | Emitted when overlay is clicked | _event: MouseEvent_ |

### Slots

| Name             | Description                         |
| ---------------- | ----------------------------------- |
| title            | Custom title                        |
| description      | Custom description                  |
| cancel `v3.0.10` | Custom the content of cancel button |

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
