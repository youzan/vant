# Popup

### Install

```js
import { createApp } from 'vue';
import { Popup } from 'vant';

const app = createApp();
app.use(Popup);
```

## Usage

### Basic Usage

```html
<van-cell is-link @click="showPopup">Show Popup</van-cell>
<van-popup v-model:show="show">Content</van-popup>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
};
```

### Position

Use `position` prop to set popup display position.

```html
<van-popup v-model:show="show" position="top" :style="{ height: '30%' }" />
```

### Close Icon

```html
<van-popup
  v-model:show="show"
  closeable
  position="bottom"
  :style="{ height: '30%' }"
/>
<!-- Custom Icon -->
<van-popup
  v-model:show="show"
  closeable
  close-icon="close"
  position="bottom"
  :style="{ height: '30%' }"
/>
<!-- Icon Position -->
<van-popup
  v-model:show="show"
  closeable
  close-icon-position="top-left"
  position="bottom"
  :style="{ height: '30%' }"
/>
```

### Round Corner

```html
<van-popup
  v-model:show="show"
  round
  position="bottom"
  :style="{ height: '30%' }"
/>
```

### Get Container

Use `teleport` prop to specify mount location.

```html
<!-- teleport to body -->
<van-popup v-model:show="show" teleport="body" />

<!-- teleport to #app -->
<van-popup v-model:show="show" teleport="#app" />

<!-- teleport to Element -->
<van-popup v-model:show="show" :teleport="myContainer" />
```

```js
export default {
  setup() {
    const myContainer = document.querySelector('.my-container');
    return {
      myContainer,
    };
  },
};
```

> Tips: The teleport prop cannot be used on the root node

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:show | Whether to show popup | _boolean_ | `false` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| position | Can be set to `top` `bottom` `right` `left` | _string_ | `center` |
| overlay-class | Custom overlay class | _string_ | - |
| overlay-style | Custom overlay style | _object_ | - |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| round | Whether to show round corner | _boolean_ | `false` |
| lock-scroll | Whether to lock background scroll | _boolean_ | `true` |
| lazy-render | Whether to lazy render util appeared | _boolean_ | `true` |
| close-on-popstate | Whether to close when popstate | _boolean_ | `false` |
| close-on-click-overlay | Whether to close when overlay is clicked | _boolean_ | `true` |
| closeable | Whether to show close icon | _boolean_ | `false` |
| close-icon | Close icon name | _string_ | `cross` |
| close-icon-position | Close Icon Position，can be set to `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |
| transition | Transition, equivalent to `name` prop of [transtion](https://v3.vuejs.org/api/built-in-components.html#transition) | _string_ | - |
| transition-appear `v2.10.14` | Whether to apply transition on initial render | _boolean_ | `false` |
| teleport | Return the mount node for Popup | _string \| Element_ | - |
| safe-area-inset-bottom `v2.2.1` | Whether to enable bottom safe area adaptation | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when Popup is clicked | _event: Event_ |
| click-overlay | Emitted when overlay is clicked | - |
| click-close-icon `v2.11.0` | Emitted when close icon is clicked | _event: Event_ |
| open | Emitted when opening Popup | - |
| close | Emitted when closing Popup | - |
| opened | Emitted when Popup is opened | - |
| closed | Emitted when Popup is closed | - |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @popup-background-color | `@white` | - |
| @popup-transition | `transform @animation-duration-base` | - |
| @popup-round-border-radius | `16px` | - |
| @popup-close-icon-size | `22px` | - |
| @popup-close-icon-color | `@gray-5` | - |
| @popup-close-icon-active-color | `@gray-6` | - |
| @popup-close-icon-margin | `16px` | - |
| @popup-close-icon-z-index | `1` | - |
