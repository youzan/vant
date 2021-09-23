# Tab

### Intro

Used to switch between different content areas.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Tab, Tabs } from 'vant';

const app = createApp();
app.use(Tab);
app.use(Tabs);
```

## Usage

### Basic Usage

The first tab is active by default, you can set `v-model:active` to active specified tab.

```html
<van-tabs v-model:active="active">
  <van-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(2);
    return { active };
  },
};
```

### Match By Name

```html
<van-tabs v-model:active="activeName">
  <van-tab title="tab 1" name="a">content of tab 1</van-tab>
  <van-tab title="tab 2" name="b">content of tab 2</van-tab>
  <van-tab title="tab 3" name="c">content of tab 3</van-tab>
</van-tabs>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const activeName = ref('a');
    return { activeName };
  },
};
```

### Swipe Tabs

By default more than 5 tabs, you can scroll through the tabs. You can set `swipe-threshold` attribute to customize threshold number.

```html
<van-tabs v-model:active="active">
  <van-tab v-for="index in 8" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

### Disabled Tab

Use `disabled` prop to disable a tab.

```html
<van-tabs v-model:active="active">
  <van-tab v-for="index in 3" :title="'tab' + index" :disabled="index === 2">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

### Card Style

Tabs styled as cards.

```html
<van-tabs v-model:active="active" type="card">
  <van-tab v-for="index in 3" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

### Click Tab Event

```html
<van-tabs v-model:active="active" @click-tab="onClickTab">
  <van-tab v-for="index in 2" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```js
import { Toast } from 'vant';

export default {
  setup() {
    const onClickTab = ({ title }) => Toast(title);
    return {
      onClickTab,
    };
  },
};
```

### Sticky

In sticky mode, the tab will be fixed to top when scroll to top.

```html
<van-tabs v-model:active="active" sticky>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Custom title

Use title slot to custom tab title.

```html
<van-tabs v-model:active="active">
  <van-tab v-for="index in 2">
    <template #title> <van-icon name="more-o" />tab </template>
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Switch Animation

Use `animated` props to change tabs with animation.

```html
<van-tabs v-model:active="active" animated>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Swipeable

In swipeable mode, you can switch tabs with swipe gesture in the content.

```html
<van-tabs v-model:active="active" swipeable>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Scrollspy

In scrollspy mode, the list of content will be tiled.

```html
<van-tabs v-model:active="active" scrollspy sticky>
  <van-tab v-for="index in 8" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Before Change

```html
<van-tabs v-model:active="active" :before-change="beforeChange">
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const beforeChange = (index) => {
      // prevent change
      if (index === 1) {
        return false;
      }

      // async
      return new Promise((resolve) => {
        resolve(index !== 3);
      });
    };

    return {
      active,
      beforeChange,
    };
  },
};
```

## API

### Tabs Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:active | Index of active tab | _number \| string_ | `0` |
| type | Can be set to `line` `card` | _string_ | `line` |
| color | Tab color | _string_ | `#ee0a24` |
| background | Background color | _string_ | `white` |
| duration | Toggle tab's animation time | _number \| string_ | `0.3` |
| line-width | Width of tab line | _number \| string_ | `40px` |
| line-height | Height of tab line | _number \| string_ | `3px` |
| animated | Whether to change tabs with animation | _boolean_ | `false` |
| border | Whether to show border when `type="line"` | _boolean_ | `false` |
| ellipsis | Whether to ellipsis too long title | _boolean_ | `true` |
| sticky | Whether to use sticky mode | _boolean_ | `false` |
| swipeable | Whether to enable gestures to slide left and right | _boolean_ | `false` |
| lazy-render | Whether to enable tab content lazy render | _boolean_ | `true` |
| scrollspy | Whether to use scrollspy mode | _boolean_ | `false` |
| offset-top | Sticky offset top , supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `0` |
| swipe-threshold | Set swipe tabs threshold | _number \| string_ | `5` |
| title-active-color | Title active color | _string_ | - |
| title-inactive-color | Title inactive color | _string_ | - |
| before-change | Callback function before changing tabs，return `false` to prevent change，support return Promise | _(name: number \| string) => boolean \| Promise\<boolean\>_ | - |

### Tab Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| disabled | Whether to disable tab | _boolean_ | `false` |
| dot | Whether to show red dot on the title | _boolean_ | `false` |
| badge | Content of the badge on the title | _number \| string_ | - |
| name | Identifier | _number \| string_ | Index of tab |
| url | Link | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| title-style | Custom title style | _string \| Array \| object_ | - |
| title-class | Custom title class name | _string \| Array \| object_ | - |
| show-zero-badge `v3.2.2` | Whether to show badge when the value is zero | _boolean_ | `true` |

### Tabs Events

| Event | Description | Arguments |
| --- | --- | --- |
| click-tab `v3.1.4` | Emitted when a tab is clicked | _{ name: string \| number, title: string, event: MouseEvent, disabled: boolean }_ |
| change | Emitted when active tab changed | _name: string \| number, title: string_ |
| rendered | Emitted when content first rendered in lazy-render mode | _name: string \| number, title: string_ |
| scroll | Emitted when tab scrolling in sticky mode | _{ scrollTop: number, isFixed: boolean }_ |

> Tips：click and disabled event is deprecated，place use click-tab event instead.

### Tabs Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get Tabs instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| resize | Resize Tabs when container element resized or visibility changed | - | - |
| scrollTo | Go to specified tab in scrollspy mode | _name: string \| number_ | - |

### Types

The component exports the following type definitions:

```ts
import type { TabsType, TabsProps, TabsInstance } from 'vant';
```

`TabsInstance` is the type of component instance:

```ts
import { ref } from 'vue';
import type { TabsInstance } from 'vant';

const tabsRef = ref<TabsInstance>();

tabsRef.value?.scrollTo(0);
```

### Tabs Slots

| Name                | Description               |
| ------------------- | ------------------------- |
| nav-left            | Custom nav left content   |
| nav-right           | Custom nav right content  |
| nav-bottom `v3.1.1` | Custom nav bottom content |

### Tab Slots

| Name    | Description      |
| ------- | ---------------- |
| default | Content of tab   |
| title   | Custom tab title |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                            | Default Value               | Description |
| ------------------------------- | --------------------------- | ----------- |
| --van-tab-text-color            | _var(--van-gray-7)_         | -           |
| --van-tab-active-text-color     | _var(--van-text-color)_     | -           |
| --van-tab-disabled-text-color   | _var(--van-gray-5)_         | -           |
| --van-tab-font-size             | _var(--van-font-size-md)_   | -           |
| --van-tab-line-height           | _var(--van-line-height-md)_ | -           |
| --van-tabs-default-color        | _var(--van-danger-color)_   | -           |
| --van-tabs-line-height          | _44px_                      | -           |
| --van-tabs-card-height          | _30px_                      | -           |
| --van-tabs-nav-background-color | _var(--van-white)_          | -           |
| --van-tabs-bottom-bar-width     | _40px_                      | -           |
| --van-tabs-bottom-bar-height    | _3px_                       | -           |
| --van-tabs-bottom-bar-color     | _var(--van-danger-color)_   | -           |
