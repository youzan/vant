# Sidebar

### Install

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
    const onChange = (index) => {
      Toast(`Title ${index + 1}`);
    };

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

| Event  | Description                      | Arguments                    |
| ------ | -------------------------------- | ---------------------------- |
| change | Emitted when chosen item changed | index: index of current item |

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

| Event | Description                     | Arguments                    |
| ----- | ------------------------------- | ---------------------------- |
| click | Emitted when an item is clicked | index: index of current item |

### SidebarItem Slots

| Name  | Description       |
| ----- | ----------------- |
| title | Custom item title |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                               | Default Value       | Description |
| ---------------------------------- | ------------------- | ----------- |
| @sidebar-width                     | `80px`              | -           |
| @sidebar-font-size                 | `@font-size-md`     | -           |
| @sidebar-line-height               | `@line-height-md`   | -           |
| @sidebar-text-color                | `@text-color`       | -           |
| @sidebar-disabled-text-color       | `@gray-5`           | -           |
| @sidebar-padding                   | `20px @padding-sm`  | -           |
| @sidebar-active-color              | `@active-color`     | -           |
| @sidebar-background-color          | `@background-color` | -           |
| @sidebar-selected-font-weight      | `@font-weight-bold` | -           |
| @sidebar-selected-text-color       | `@text-color`       | -           |
| @sidebar-selected-border-width     | `4px`               | -           |
| @sidebar-selected-border-height    | `16px`              | -           |
| @sidebar-selected-border-color     | `@red`              | -           |
| @sidebar-selected-background-color | `@white`            | -           |
