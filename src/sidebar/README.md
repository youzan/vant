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
  <van-sidebar-item title="Title" badge="20" />
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
import { Toast } from 'vant';

export default {
  setup() {
    const active = ref(0);
    const onChange = (index) => Toast(`Title ${index + 1}`);
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
| disabled | Whether to be disabled | _boolean_ | `false` |
| url | Link | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### SidebarItem Events

| Event | Description                     | Arguments       |
| ----- | ------------------------------- | --------------- |
| click | Emitted when an item is clicked | _index: number_ |

### SidebarItem Slots

| Name  | Description       |
| ----- | ----------------- |
| title | Custom item title |

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                                    | Default Value       | Description |
| --------------------------------------- | ------------------- | ----------- |
| --van-sidebar-width                     | `80px`              | -           |
| --van-sidebar-font-size                 | `@font-size-md`     | -           |
| --van-sidebar-line-height               | `@line-height-md`   | -           |
| --van-sidebar-text-color                | `@text-color`       | -           |
| --van-sidebar-disabled-text-color       | `@gray-5`           | -           |
| --van-sidebar-padding                   | `20px @padding-sm`  | -           |
| --van-sidebar-active-color              | `@active-color`     | -           |
| --van-sidebar-background-color          | `@background-color` | -           |
| --van-sidebar-selected-font-weight      | `@font-weight-bold` | -           |
| --van-sidebar-selected-text-color       | `@text-color`       | -           |
| --van-sidebar-selected-border-width     | `4px`               | -           |
| --van-sidebar-selected-border-height    | `16px`              | -           |
| --van-sidebar-selected-border-color     | `@red`              | -           |
| --van-sidebar-selected-background-color | `@white`            | -           |
