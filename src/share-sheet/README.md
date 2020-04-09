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
  }
};
```

### Multi Line

```html
<van-share-sheet
  v-model="showShare"
  title="Share"
  :options="options"
/>
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
  v-model="showShare"
  :options="options"
  title="Share"
  description="Description"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| options | Share options | *Option[]* | `[]` |
| title | Title | *string* | - |
| cancel-text | Cancel button text | *string* | `'Cancel'` |
| description | Description | *string* | - |

### Data Structure of Option

| Key | Description | Type |
|------|------|------|
| name | Option name | *string* |
| icon | Option icon，can be set to `wechat` `weibo` `qq` `link` `qrcode` `poster` or image URL | *string* |

### Events

| Event | Description | Arguments |
|------|------|------|
| select | Triggered when click option | *option: Option, index: number* |
| cancel | Triggered when click cancel button | - |

### Slots

| Name | Description |
|------|------|
| title | Custom title |
| description | Custom description |
