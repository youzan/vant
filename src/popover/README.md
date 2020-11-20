# Popover

### Install

```js
import Vue from 'vue';
import { Popover } from 'vant';

Vue.use(Popover);
```

## Usage

### Basic Usage

```html
<van-popover v-model="showPopover" :actions="actions" @select="onSelect">
  <template #reference>
    <van-button type="primary" @click="showPopover = true">
      Light Theme
    </van-button>
  </template>
</van-popover>
```

```js
import { Toast } from 'vant';

export default {
  data() {
    return {
      showPopover: false,
      actions: [
        { text: 'Option 1' },
        { text: 'Option 2' },
        { text: 'Option 3' },
      ],
    };
  },
  methods: {
    onSelect(action) {
      Toast(action.text);
    },
  },
};
```

### Dark theme

Using the `theme` prop to change the style of Popover.

```html
<van-popover v-model="showPopover" theme="dark" :actions="actions">
  <template #reference>
    <van-button type="primary" @click="showPopover = true">
      Dark Theme
    </van-button>
  </template>
</van-popover>
```

```js
export default {
  data() {
    return {
      showPopover: false,
      actions: [
        { text: 'Option 1' },
        { text: 'Option 2' },
        { text: 'Option 3' },
      ],
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
<van-popover v-model="showPopover" :actions="actions">
  <template #reference>
    <van-button type="primary" @click="showPopover = true">
      Show Icon
    </van-button>
  </template>
</van-popover>
```

```js
export default {
  data() {
    return {
      showPopover: false,
      actions: [
        { text: 'Option 1', icon: 'add-o' },
        { text: 'Option 2', icon: 'music-o' },
        { text: 'Option 3', icon: 'more-o' },
      ],
    };
  },
};
```

### Disable Action

Using the `disabled` option to disable an action.

```html
<van-popover v-model="showPopover" :actions="actions">
  <template #reference>
    <van-button type="primary" @click="showPopover = true">
      Disable Action
    </van-button>
  </template>
</van-popover>
```

```js
export default {
  data() {
    return {
      showPopover: false,
      actions: [
        { text: 'Option 1', disabled: true },
        { text: 'Option 2', disabled: true },
        { text: 'Option 3' },
      ],
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Whether to show Popover | _boolean_ | `false` |
| actions | Actions | _Action[]_ | `[]` |
| placement | Placement | _string_ | `bottom` |
| theme | Theme，can be set to `dark` | _string_ | `light` |
| overlay | Whether to show overlay | _boolean_ | `false` |
| close-on-click-action | Whether to close when clicking action | _boolean_ | `true` |
| close-on-click-outside | Whether to close when clicking outside | _boolean_ | `true` |
| get-container | Return the mount node for Popover | _string \| () => Element_ | `body` |

### Data Structure of Action

| Key       | Description             | Type      |
| --------- | ----------------------- | --------- |
| text      | Action Text             | _string_  |
| icon      | Icon                    | _string_  |
| disabled  | Whether to be disabled  | _boolean_ |
| className | className of the option | _any_     |

### Events

| Event  | Description                      | Arguments                       |
| ------ | -------------------------------- | ------------------------------- |
| select | Triggered when clicking action   | _action: Action, index: number_ |
| open   | Triggered when opening Popover   | -                               |
| close  | Triggered when closing Popover   | -                               |
| opened | Triggered when Popover is opened | -                               |
| closed | Triggered when Popover is closed | -                               |

### Slots

| Name      | Description       |
| --------- | ----------------- |
| default   | Custom content    |
| reference | Reference Element |
