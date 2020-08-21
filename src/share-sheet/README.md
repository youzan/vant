# ShareSheet

### Install

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
<van-share-sheet v-model:show="showShare" title="Share" :options="options" />
```

```js
export default {
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: 'Wechat', icon: 'wechat' },
          { name: 'Weibo', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: 'Link', icon: 'link' },
          { name: 'Poster', icon: 'poster' },
          { name: 'Qrcode', icon: 'qrcode' },
        ],
      ],
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
| v-model:show | Whether to show ShareSheet | _boolean_ | `false` |
| options | Share options | _Option[]_ | `[]` |
| title | Title | _string_ | - |
| cancel-text | Cancel button text | _string_ | `'Cancel'` |
| description | Description | _string_ | - |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| lock-scroll | Whether to lock background scroll | _boolean_ | `true` |
| lazy-render | Whether to lazy render util appeared | _boolean_ | `true` |
| close-on-popstate | Whether to close when popstate | _boolean_ | `true` |
| close-on-click-overlay | Whether to close when click overlay | _boolean_ | `true` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| teleport | Return the mount node for ShareSheet | _string \| Element_ | - |

### Data Structure of Option

| Key | Description | Type |
| --- | --- | --- |
| name | Option name | _string_ |
| description `v2.8.5` | Option description | _string_ |
| icon | Option icon，can be set to `wechat` `weibo` `qq` `link` `qrcode` `poster` or image URL | _string_ |
| className | Option className is used to set the class props to the share item | _string_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Triggered when click option | _option: Option, index: number_ |
| cancel | Triggered when click cancel button | - |
| click-overlay `v2.9.1` | Triggered when click overlay | - |

### Slots

| Name        | Description        |
| ----------- | ------------------ |
| title       | Custom title       |
| description | Custom description |
