# ShareSheet

### Install

```js
import Vue from 'vue';
import { ShareSheet } from 'vant';

Vue.use(ShareSheet);
```

## Usage

### Basic Usage

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
| icon | Option icon，can be set to `wechat` `link` `qrcode` `poster` or image URL | *string* |

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
