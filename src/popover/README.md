# Popover

### Install

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
import { Toast } from 'vant';

export default {
  setup() {
    const showPopover = ref(false);
    const actions = [
      { text: 'Option 1' },
      { text: 'Option 2' },
      { text: 'Option 3' },
    ];

    const onSelect = (action) => {
      Toast(action.text);
    };

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

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:show | Whether to show Popover | _boolean_ | `false` |
| actions | Actions | _Action[]_ | `[]` |
| placement | Placement | _string_ | `bottom` |
| theme | Theme，can be set to `dark` | _string_ | `light` |
| trigger `v2.11.1` | Trigger mode，can be set to `manual` | `click` |
| offset | Distance to reference | _[number, number]_ | `[0, 8]` |
| overlay | Whether to show overlay | _boolean_ | `false` |
| close-on-click-action | Whether to close when clicking action | _boolean_ | `true` |
| close-on-click-outside | Whether to close when clicking outside | _boolean_ | `true` |
| teleport | Return the mount node for Popover | _string \| Element_ | `body` |

### Data Structure of Action

| Key       | Description             | Type      |
| --------- | ----------------------- | --------- |
| text      | Action Text             | _string_  |
| icon      | Icon                    | _string_  |
| disabled  | Whether to be disabled  | _boolean_ |
| className | className of the option | _any_     |

### Events

| Event  | Description                       | Arguments                       |
| ------ | --------------------------------- | ------------------------------- |
| select | Emitted when an action is clicked | _action: Action, index: number_ |
| open   | Emitted when opening Popover      | -                               |
| close  | Emitted when closing Popover      | -                               |
| opened | Emitted when Popover is opened    | -                               |
| closed | Emitted when Popover is closed    | -                               |

### Slots

| Name      | Description       |
| --------- | ----------------- |
| default   | Custom content    |
| reference | Reference Element |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @popover-arrow-size | `6px` | - |
| @popover-border-radius | `@border-radius-lg` | - |
| @popover-action-width | `128px` | - |
| @popover-action-height | `44px` | - |
| @popover-action-font-size | `@font-size-md` | - |
| @popover-action-line-height | `@line-height-md` | - |
| @popover-action-icon-size | `20px` | - |
| @popover-light-text-color | `@text-color` | - |
| @popover-light-background-color | `@white` | - |
| @popover-light-action-disabled-text-color | `@gray-5` | - |
| @popover-dark-text-color | `@white` | - |
| @popover-dark-background-color | `#4a4a4a` | - |
| @popover-dark-action-disabled-text-color | `@gray-6` | - |
