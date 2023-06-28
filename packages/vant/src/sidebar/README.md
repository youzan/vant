# Sidebar

### Intro

The vertically displayed navigation bar is used to switch between different content areas.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Sidebar, SidebarItem } from 'vant';

const app = createApp();
app.use(Sidebar);
app.use(SidebarItem);
```

## Usage

### Basic Usage

```html
<van-sidebar v-model="active">
  <van-sidebar-item title="Title" />
  <van-sidebar-item title="Title" />
  <van-sidebar-item title="Title" />
</van-sidebar>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
```

### Show Badge

```html
<van-sidebar v-model="active">
  <van-sidebar-item title="Title" dot />
  <van-sidebar-item title="Title" badge="5" />
  <van-sidebar-item title="Title" />
</van-sidebar>
```

### Disabled

```html
<van-sidebar v-model="active">
  <van-sidebar-item title="Title" />
  <van-sidebar-item title="Title" disabled />
  <van-sidebar-item title="Title" />
</van-sidebar>
```

### Change Event

```html
<van-sidebar v-model="active" @change="onChange">
  <van-sidebar-item title="Title 1" />
  <van-sidebar-item title="Title 2" />
  <van-sidebar-item title="Title 3" />
</van-sidebar>
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const active = ref(0);
    const onChange = (index) => showToast(`Title ${index + 1}`);
    return {
      active,
      onChange,
    };
  },
};
```

## API

### Sidebar Props

| Attribute | Description          | Type               | Default |
| --------- | -------------------- | ------------------ | ------- |
| v-model   | Index of chosen item | _number \| string_ | `0`     |

### Sidebar Events

| Event  | Description                      | Arguments       |
| ------ | -------------------------------- | --------------- |
| change | Emitted when chosen item changed | _index: number_ |

### SidebarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Content | _string_ | `''` |
| dot | Whether to show red dot | _boolean_ | `false` |
| badge | Content of the badge | _number \| string_ | `''` |
| badge-props | Props of Badge, see [Badge - props](#/en-US/badge#props) | _BadgeProps_ | - |
| disabled | Whether to be disabled | _boolean_ | `false` |
| url | Link | _string_ | - |
| to | The target route should navigate to when clicked on, same as the [to prop](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-to) of Vue Router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### SidebarItem Events

| Event | Description                     | Arguments       |
| ----- | ------------------------------- | --------------- |
| click | Emitted when an item is clicked | _index: number_ |

### SidebarItem Slots

| Name  | Description       |
| ----- | ----------------- |
| title | Custom item title |

### Types

The component exports the following type definitions:

```ts
import type { SidebarProps, SidebarItemProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-sidebar-width | _80px_ | - |
| --van-sidebar-font-size | _var(--van-font-size-md)_ | - |
| --van-sidebar-line-height | _var(--van-line-height-md)_ | - |
| --van-sidebar-text-color | _var(--van-text-color)_ | - |
| --van-sidebar-disabled-text-color | _var(--van-text-color-3)_ | - |
| --van-sidebar-padding | _20px var(--van-padding-sm)_ | - |
| --van-sidebar-active-color | _var(--van-active-color)_ | - |
| --van-sidebar-background | _var(--van-background)_ | - |
| --van-sidebar-selected-font-weight | _var(--van-font-bold)_ | - |
| --van-sidebar-selected-text-color | _var(--van-text-color)_ | - |
| --van-sidebar-selected-border-width | _4px_ | - |
| --van-sidebar-selected-border-height | _16px_ | - |
| --van-sidebar-selected-border-color | _var(--van-primary-color)_ | - |
| --van-sidebar-selected-background | _var(--van-background-2)_ | - |
