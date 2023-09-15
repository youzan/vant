# Tab

### Install

```js
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
```

## Usage

### Basic Usage

The first tab is actived by default, you can set `v-model` to active specified tab.

```html
<van-tabs v-model="active">
  <van-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      active: 2,
    };
  },
};
```

### Match By Name

```html
<van-tabs v-model="activeName">
  <van-tab title="tab 1" name="a">content of tab 1</van-tab>
  <van-tab title="tab 2" name="b">content of tab 2</van-tab>
  <van-tab title="tab 3" name="c">content of tab 3</van-tab>
</van-tabs>
```

```js
export default {
  data() {
    return {
      activeName: 'a',
    };
  },
};
```

### Swipe Tabs

By default more than 5 tabs, you can scroll through the tabs. You can set `swipe-threshold` attribute to customize threshold number.

```html
<van-tabs>
  <van-tab v-for="index in 8" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

### Disabled Tab

You can set `disabled` attribute on the corresponding `van-tab`.

```html
<van-tabs @disabled="onClickDisabled">
  <van-tab v-for="index in 3" :title="'tab' + index" :disabled="index === 2">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    onClickDisabled(name, title) {
      Toast(title + ' is disabled');
    },
  },
};
```

### Card Style

Tabs styled as cards.

```html
<van-tabs type="card">
  <van-tab v-for="index in 3" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

### Click Event

```html
<van-tabs @click="onClick">
  <van-tab v-for="index in 2" :title="'tab' + index">
    content of tab {{ index }}
  </van-tab>
</van-tabs>
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    onClick(name, title) {
      Toast(title);
    },
  },
};
```

### Sticky

In sticky mode, the tab will be fixed to top when scroll to top.

```html
<van-tabs v-model="active" sticky>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Custom title

Use title slot to custom tab title.

```html
<van-tabs v-model="active">
  <van-tab v-for="index in 2" :key="index">
    <template #title> <van-icon name="more-o" />tab </template>
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Switch Animation

Use `animated` props to change tabs with animation.

```html
<van-tabs v-model="active" animated>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Swipeable

In swipeable mode, you can switch tabs with swipe gesture in the content.

```html
<van-tabs v-model="active" swipeable>
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Scrollspy

In scrollspy mode, the list of content will be tiled.

```html
<van-tabs v-model="active" scrollspy sticky>
  <van-tab v-for="index in 8" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

### Before Change

```html
<van-tabs :before-change="beforeChange">
  <van-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </van-tab>
</van-tabs>
```

```js
export default {
  methods: {
    beforeChange(index) {
      // prevent change
      if (index === 1) {
        return false;
      }

      // async
      return new Promise((resolve) => {
        resolve(index !== 3);
      });
    },
  },
};
```

## API

### Tabs Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Index of active tab | _number \| string_ | `0` |
| type | Can be set to `line` `card` | _string_ | `line` |
| color | Tab color | _string_ | `#ee0a24` |
| background | Background color | _string_ | `white` |
| duration | Toggle tab's animation time | _number \| string_ | `0.3` | - |
| line-width | Width of tab line | _number \| string_ | `40px` |
| line-height | Height of tab line | _number \| string_ | `3px` |
| animated | Whether to change tabs with animation | _boolean_ | `false` |
| border | Whether to show border when `type="line"` | _boolean_ | `false` |
| ellipsis | Whether to ellipsis too long title | _boolean_ | `true` |
| sticky | Whether to use sticky mode | _boolean_ | `false` |
| swipeable | Whether to switch tabs with swipe gesture in the content | _boolean_ | `false` |
| lazy-render | Whether to enable tab content lazy render | _boolean_ | `true` |
| scrollspy | Whether to use scrollspy mode | _boolean_ | `false` |
| offset-top `v2.8.7` | Sticky offset top , supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `0` |
| swipe-threshold | Set swipe tabs threshold | _number \| string_ | `5` | - |
| title-active-color | Title active color | _string_ | - |
| title-inactive-color | Title inactive color | _string_ | - |
| before-change `v2.9.3` | Callback function before changing tabs，return `false` to prevent change，support return Promise | _(name) => boolean \| Promise_ | - |

### Tab Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| disabled | Whether to disable tab | _boolean_ | `false` |
| dot | Whether to show red dot on the title | _boolean_ | `false` |
| badge `v2.5.6` | Content of the badge on the title | _number \| string_ | - |
| name | Identifier | _number \| string_ | Index of tab |
| url | Link | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| title-style | Custom title style | _any_ | - |
| title-class | Custom title class name | _any_ | - |

### Tabs Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when a tab is clicked | name，title |
| change | Emitted when active tab changed | name，title |
| disabled | Emitted when a disabled tab is clicked | name，title |
| rendered | Emitted when content first rendered in lazy-render mode | name，title |
| scroll | Emitted when tab scrolling in sticky mode | object: { scrollTop, isFixed } |

### Tabs Methods

Use [ref](https://vuejs.org/v2/api/#ref) to get Tabs instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| resize | Resize Tabs when container element resized or visibility changed | - | - |
| scrollTo `v2.9.3` | Go to specified tab in scrollspy mode | name | - |

### Tabs Slots

| Name      | Description              |
| --------- | ------------------------ |
| nav-left  | Custom nav left content  |
| nav-right | Custom nav right content |

### Tab Slots

| Name    | Description      |
| ------- | ---------------- |
| default | Content of tab   |
| title   | Custom tab title |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                       | Default Value         | Description |
| -------------------------- | --------------------- | ----------- |
| @tab-text-color            | `@gray-7`             | -           |
| @tab-active-text-color     | `@text-color`         | -           |
| @tab-disabled-text-color   | `@gray-5`             | -           |
| @tab-font-size             | `@font-size-md`       | -           |
| @tab-line-height           | `@line-height-md`     | -           |
| @tabs-default-color        | `@red`                | -           |
| @tabs-line-height          | `44px`                | -           |
| @tabs-card-height          | `30px`                | -           |
| @tabs-nav-background-color | `@white`              | -           |
| @tabs-bottom-bar-width     | `40px`                | -           |
| @tabs-bottom-bar-height    | `3px`                 | -           |
| @tabs-bottom-bar-color     | `@tabs-default-color` | -           |
