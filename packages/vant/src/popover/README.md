# Popover

### Intro

Used to display some content on top of another.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Popover } from 'vant';

const app = createApp();
app.use(Popover);
```

## Usage

### Basic Usage

```html
<van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
  <template #reference>
    <van-button type="primary">Light Theme</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: 'Option 1' },
      { text: 'Option 2' },
      { text: 'Option 3' },
    ];
    const onSelect = (action) => showToast(action.text);

    return {
      actions,
      onSelect,
      showPopover,
    };
  },
};
```

### Dark theme

Using the `theme` prop to change the style of Popover.

```html
<van-popover v-model:show="showPopover" theme="dark" :actions="actions">
  <template #reference>
    <van-button type="primary">Dark Theme</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: 'Option 1' },
      { text: 'Option 2' },
      { text: 'Option 3' },
    ];

    return {
      actions,
      showPopover,
    };
  },
};
```

### Horizontal

After setting the `actions-direction` prop to `horizontal`, the actions will be arranged horizontally.

```html
<van-popover
  v-model:show="showPopover"
  :actions="actions"
  actions-direction="horizontal"
>
  <template #reference>
    <van-button type="primary">Horizontal</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: 'Option 1' },
      { text: 'Option 2' },
      { text: 'Option 3' },
    ];

    return {
      actions,
      showPopover,
    };
  },
};
```

### Placement

```html
<van-popover placement="top" />
```

`placement` supports the following values:

```bash
top           # Top middle
top-start     # Top left
top-end       # Top right
left          # Left middle
left-start    # Left top
left-end      # Left bottom
right         # Right middle
right-start   # Right top
right-end     # Right bottom
bottom        # Bottom middle
bottom-start  # Bottom left
bottom-end    # Bottom right
```

### Show Icon

```html
<van-popover v-model:show="showPopover" :actions="actions">
  <template #reference>
    <van-button type="primary">Show Icon</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: 'Option 1', icon: 'add-o' },
      { text: 'Option 2', icon: 'music-o' },
      { text: 'Option 3', icon: 'more-o' },
    ];

    return {
      actions,
      showPopover,
    };
  },
};
```

### Disable Action

Using the `disabled` option to disable an action.

```html
<van-popover v-model:show="showPopover" :actions="actions">
  <template #reference>
    <van-button type="primary">Disable Action</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: 'Option 1', disabled: true },
      { text: 'Option 2', disabled: true },
      { text: 'Option 3' },
    ];

    return {
      actions,
      showPopover,
    };
  },
};
```

### Custom Content

```html
<van-popover v-model:show="showPopover">
  <van-grid
    square
    clickable
    :border="false"
    column-num="3"
    style="width: 240px;"
  >
    <van-grid-item
      v-for="i in 6"
      :key="i"
      text="Option"
      icon="photo-o"
      @click="showPopover = false"
    />
  </van-grid>
  <template #reference>
    <van-button type="primary">Custom Content</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const showPopover = ref(false);
    return { showPopover };
  },
};
```

### Uncontrolled

You can use Popover as a controlled or uncontrolled component:

- When binding `v-model:show`, Popover is a controlled component, and the display of the component is completely controlled by the value of `v-model:show`.
- When `v-model:show` is not used, Popover is an uncontrolled component. You can pass in a default value through the `show` prop, and the display is controlled by the component itself.

```html
<van-popover :actions="actions" position="top-start" @select="onSelect">
  <template #reference>
    <van-button type="primary">Uncontrolled</van-button>
  </template>
</van-popover>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const actions = [
      { text: 'Option 1' },
      { text: 'Option 2' },
      { text: 'Option 3' },
    ];
    const onSelect = (action) => showToast(action.text);
    return {
      actions,
      onSelect,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:show | Whether to show Popover | _boolean_ | `false` |
| actions | Actions | _PopoverAction[]_ | `[]` |
| actions-direction `v4.4.1` | Direction of actions, can be set to `horizontal` | _PopoverActionsDirection_ | `vertical` |
| placement | Placement | _PopoverPlacement_ | `bottom` |
| theme | Theme, can be set to `dark` | _PopoverTheme_ | `light` |
| trigger | Trigger mode, can be set to `manual` | _PopoverTrigger_ | `click` |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| offset | Distance to reference | _[number, number]_ | `[0, 8]` |
| overlay | Whether to show overlay | _boolean_ | `false` |
| overlay-class | Custom overlay class | _string \| Array \| object_ | - |
| overlay-style | Custom overlay style | _object_ | - |
| show-arrow | Whether to show arrow | _boolean_ | `true` |
| close-on-click-action | Whether to close when clicking action | _boolean_ | `true` |
| close-on-click-outside | Whether to close when clicking outside | _boolean_ | `true` |
| close-on-click-overlay | Whether to close when clicking overlay | _boolean_ | `true` |
| teleport | Specifies a target element where Popover will be mounted | _string \| Element_ | `body` |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |

### Data Structure of PopoverAction

| Key       | Description             | Type                        |
| --------- | ----------------------- | --------------------------- |
| text      | Action Text             | _string_                    |
| icon      | Icon                    | _string_                    |
| color     | Action Color            | _string_                    |
| disabled  | Whether to be disabled  | _boolean_                   |
| className | className of the option | _string \| Array \| object_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Emitted when an action is clicked | _action: PopoverAction, index: number_ |
| open | Emitted when opening Popover | - |
| close | Emitted when closing Popover | - |
| opened | Emitted when Popover is opened | - |
| closed | Emitted when Popover is closed | - |
| click-overlay | Emitted when overlay is clicked | _event: MouseEvent_ |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| default | Custom content | - |
| reference | Reference Element | - |
| action | Custom the content of option | _{ action: PopoverAction, index: number }_ |

### Types

The component exports the following type definitions:

```ts
import type {
  PopoverProps,
  PopoverTheme,
  PopoverAction,
  PopoverActionsDirection,
  PopoverTrigger,
  PopoverPlacement,
} from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-popover-arrow-size | _6px_ | - |
| --van-popover-radius | _var(--van-radius-lg)_ | - |
| --van-popover-action-width | _128px_ | - |
| --van-popover-action-height | _44px_ | - |
| --van-popover-action-font-size | _var(--van-font-size-md)_ | - |
| --van-popover-action-line-height | _var(--van-line-height-md)_ | - |
| --van-popover-action-icon-size | _20px_ | - |
| --van-popover-horizontal-action-height | _34px_ | - |
| --van-popover-horizontal-action-icon-size | _16px_ | - |
| --van-popover-light-text-color | _var(--van-text-color)_ | - |
| --van-popover-light-background | _var(--van-background-2)_ | - |
| --van-popover-light-action-disabled-text-color | _var(--van-text-color-3)_ | - |
| --van-popover-dark-text-color | _var(--van-white)_ | - |
| --van-popover-dark-background | _#4a4a4a_ | - |
| --van-popover-dark-action-disabled-text-color | _var(--van-text-color-2)_ | - |
