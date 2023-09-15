# NavBar

### Install

```js
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
```

## Usage

### Basic Usage

```html
<van-nav-bar
  title="Title"
  left-text="Back"
  right-text="Button"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
import { Toast } from 'vant';

export default {
  methods: {
    onClickLeft() {
      Toast('Back');
    },
    onClickRight() {
      Toast('Button');
    },
  },
};
```

### Use Slot

```html
<van-nav-bar title="Title" left-text="Back" left-arrow>
  <template #right>
    <van-icon name="search" />
  </template>
</van-nav-bar>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | `''` |
| left-text | Left Text | _string_ | `''` |
| right-text | Right Text | _string_ | `''` |
| left-arrow | Whether to show left arrow | _boolean_ | `false` |
| border | Whether to show bottom border | _boolean_ | `true` |
| fixed | Whether to fixed top | _boolean_ | `false` |
| placeholder `v2.5.9` | Whether to generate a placeholder element when fixed | _boolean_ | `false` |
| z-index | Z-index | _number \| string_ | `1` |
| safe-area-inset-top `v2.10.13` | Whether to enable top safe area adaptation | _boolean_ | `false` |

### Slots

| Name  | Description               |
| ----- | ------------------------- |
| title | Custom title              |
| left  | Custom left side content  |
| right | Custom right side content |

### Events

| Event       | Description                              | Arguments |
| ----------- | ---------------------------------------- | --------- |
| click-left  | Emitted when the left button is clicked  | -         |
| click-right | Emitted when the right button is clicked | -         |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                      | Default Value   | Description |
| ------------------------- | --------------- | ----------- |
| @nav-bar-height           | `46px`          | -           |
| @nav-bar-background-color | `@white`        | -           |
| @nav-bar-arrow-size       | `16px`          | -           |
| @nav-bar-icon-color       | `@blue`         | -           |
| @nav-bar-text-color       | `@blue`         | -           |
| @nav-bar-title-font-size  | `@font-size-lg` | -           |
| @nav-bar-title-text-color | `@text-color`   | -           |
| @nav-bar-z-index          | `1`             | -           |
