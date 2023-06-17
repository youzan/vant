# Popup

### Intro

Used to display pop-up windows, information prompts, etc., and supports multiple pop-up layers to display.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Popup } from 'vant';

const app = createApp();
app.use(Popup);
```

## Usage

### Basic Usage

```html
<van-cell title="Show Popup" is-link @click="showPopup" />
<van-popup v-model:show="show" :style="{ padding: '64px' }">Content</van-popup>
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

Use `position` prop to set Popup display position.

The default position is `center`, it can be set to `top`, `bottom`, `left`, `right`.

- When the position is `top` or `bottom`, the default width is consistent with the screen width, and the height of the Popup depends on the height of the content.
- When the position is `left` or `right` side, the width and height are not set by default, and the width and height of the popup depend on the width and height of the content.

```html
<!-- top popup -->
<van-popup v-model:show="showTop" position="top" :style="{ height: '30%' }" />

<!-- bottom popup -->
<van-popup
  v-model:show="showBottom"
  position="bottom"
  :style="{ height: '30%' }"
/>

<!-- left popup -->
<van-popup
  v-model:show="showLeft"
  position="left"
  :style="{ width: '30%', height: '100%' }"
/>

<!-- Popup on the right -->
<van-popup
  v-model:show="showRight"
  position="right"
  :style="{ width: '30%', height: '100%' }"
/>
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

After setting the `round` prop, the Popup will add different rounded corner styles according to the position.

```html
<!-- Round Popup (center) -->
<van-popup v-model:show="showCenter" round :style="{ padding: '64px' }" />

<!-- Round Popup (bottom) -->
<van-popup
  v-model:show="showBottom"
  round
  position="bottom"
  :style="{ height: '30%' }"
/>
```

### Listen To Click Events

Popup supports following events:

- `click`: Emitted when Popup is clicked.
- `click-overlay`: Emitted when overlay is clicked.
- `click-close-icon`: Emitted when close icon is clicked.

```html
<van-cell title="Listen Click Events" is-link @click="show = true" />
<van-popup
  v-model:show="show"
  position="bottom"
  :style="{ height: '30%' }"
  closeable
  @click-overlay="onClickOverlay"
  @click-close-icon="onClickCloseIcon"
/>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const show = ref(false);
    const onClickOverlay = () => {
      showToast('click-overlay');
    };
    const onClickCloseIcon = () => {
      showToast('click-close-icon');
    };
    return {
      show,
      onClickOverlay,
      onClickCloseIcon,
    };
  },
};
```

### Listen to Display Events

When the Popup is opened or closed, the following events will be emitted:

- `open`: Emitted immediately when the Popup is opened.
- `opened`: Emitted when the Popup is opened and the animation ends.
- `close`: Emitted immediately when the Popup is closed.
- `closed`: Emitted when the Popup is closed and the animation ends.

```html
<van-cell title="Listen to display events" is-link @click="show = true" />
<van-popup
  v-model:show="show"
  position="bottom"
  :style="{ height: '30%' }"
  @open="showToast('open')"
  @opened="showToast('opened')"
  @close="showToast('close')"
  @closed="showToast('closed')"
/>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const show = ref(false);
    return {
      show,
      showToast,
    };
  },
};
```

### Get Container

Use `teleport` prop to specify mount location.

```html
<!-- teleport to body -->
<van-popup v-model:show="show" teleport="body" />

<!-- teleport to #app -->
<van-popup v-model:show="show" teleport="#app" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:show | Whether to show popup | _boolean_ | `false` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| position | Can be set to `top` `bottom` `right` `left` | _string_ | `center` |
| overlay-class | Custom overlay class | _string \| Array \| object_ | - |
| overlay-style | Custom overlay style | _object_ | - |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| z-index | Set the z-index to a fixed value | _number \| string_ | `2000+` |
| round | Whether to show round corner | _boolean_ | `false` |
| lock-scroll | Whether to lock background scroll | _boolean_ | `true` |
| lazy-render | Whether to lazy render util appeared | _boolean_ | `true` |
| close-on-popstate | Whether to close when popstate | _boolean_ | `false` |
| close-on-click-overlay | Whether to close when overlay is clicked | _boolean_ | `true` |
| closeable | Whether to show close icon | _boolean_ | `false` |
| close-icon | Close icon name | _string_ | `cross` |
| close-icon-position | Close Icon Position, can be set to `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |
| before-close | Callback function before close | _(action: string) => boolean \| Promise\<boolean\>_ | - |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| transition | Transition, equivalent to `name` prop of [transition](https://vuejs.org/api/built-in-components.html#transition) | _string_ | - |
| transition-appear | Whether to apply transition on initial render | _boolean_ | `false` |
| teleport | Specifies a target element where Popup will be mounted | _string \| Element_ | - |
| safe-area-inset-top | Whether to enable top safe area adaptation | _boolean_ | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when Popup is clicked | _event: MouseEvent_ |
| click-overlay | Emitted when overlay is clicked | _event: MouseEvent_ |
| click-close-icon | Emitted when close icon is clicked | _event: MouseEvent_ |
| open | Emitted immediately when Popup is opened | - |
| close | Emitted immediately when Popup is closed | - |
| opened | Emitted when Popup is opened and the animation ends | - |
| closed | Emitted when Popup is closed and the animation ends | - |

### Slots

| Name            | Description              |
| --------------- | ------------------------ |
| default         | Content of Popup         |
| overlay-content | Content of Popup overlay |

### Types

The component exports the following type definitions:

```ts
import type {
  PopupProps,
  PopupPosition,
  PopupInstance,
  PopupCloseIconPosition,
} from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-popup-background | _var(--van-background-2)_ | - |
| --van-popup-transition | _transform var(--van-duration-base)_ | - |
| --van-popup-round-radius | _16px_ | - |
| --van-popup-close-icon-size | _22px_ | - |
| --van-popup-close-icon-color | _var(--van-gray-5)_ | - |
| --van-popup-close-icon-margin | _16px_ | - |
| --van-popup-close-icon-z-index | _1_ | - |
