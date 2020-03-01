# Popup

### Install

```js
import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);
```

## Usage

### Basic Usage

```html
<van-cell is-link @click="showPopup">Show Popup</van-cell>
<van-popup v-model="show">Content</van-popup>
```

```js
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
```

### Position

Use `position` prop to set popup display position

```html
<van-popup
  v-model="show"
  position="top"
  :style="{ height: '30%' }"
/>
```

### Close Icon

```html
<van-popup
  v-model="show"
  closeable
  position="bottom"
  :style="{ height: '30%' }"
/>
<!-- Custom Icon -->
<van-popup
  v-model="show"
  closeable
  close-icon="close"
  position="bottom"
  :style="{ height: '30%' }"
/>
<!-- Icon Position -->
<van-popup
  v-model="show"
  closeable
  close-icon-position="top-left"
  position="bottom"
  :style="{ height: '30%' }"
/>
```

### Round Corner

```html
<van-popup
  v-model="show"
  round
  position="bottom"
  :style="{ height: '30%' }"
/>
```

### Get Container

Use `get-container` prop to specify mount location

```html
<!-- mount to body -->
<van-popup v-model="show" get-container="body" />

<!-- mount to #app -->
<van-popup v-model="show" get-container="#app" />

<!-- Specify the mount location by function -->
<van-popup v-model="show" :get-container="getContainer" />
```

```js
export default {
  methods: {
    getContainer() {
      return document.querySelector('.my-container');
    }
  }
}
```

> Tips: The get-container prop cannot be used on the root node

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show popup | *boolean* | `false` |
| overlay | Whether to show overlay | *boolean* | `true` |
| position | Can be set to `top` `bottom` `right` `left` | *string* | `center` |
| overlay-class | Custom overlay class | *string* | - |
| overlay-style | Custom overlay style | *object* | - |
| duration | Transition duration, unit second | *number \| string* | `0.3` |
| round `v2.0.7` | Whether to show round corner | *boolean* | `false` |
| lock-scroll | Whether to lock background scroll | *boolean* | `true` |
| lazy-render | Whether to lazy render util appeared | *boolean* | `true` |
| close-on-popstate `v2.2.10` | Whether to close when popstate | *boolean* | `false` |
| close-on-click-overlay | Whether to close when click overlay | *boolean* | `true` |
| closeable `v2.2.0` | Whether to show close icon | *boolean* | `false` |
| close-icon `v2.2.0` | Close icon name | *string* | `cross` |
| close-icon-position `v2.2.2` | Close Icon Position，can be set to `top-left` `bottom-left` `bottom-right` | *string* | `top-right` |
| transition | Transition, equivalent to `name` prop of [transtion](https://vuejs.org/v2/api/#transition) | *string* | - |
| get-container | Return the mount node for Popup | *string \| () => Element* | - |
| safe-area-inset-bottom `v2.2.1` | Whether to enable bottom safe area adaptation | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click Popup | *event: Event* |
| open | Triggered when open Popup | - |
| close | Triggered when close Popup | - |
| opened | Triggered when opened Popup | - |
| closed | Triggered when closed Popup | - |
| click-overlay | Triggered when click overlay | - |
