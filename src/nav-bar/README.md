# NavBar

### Install

```js
import { createApp } from 'vue';
import { NavBar } from 'vant';

const app = createApp();
app.use(NavBar);
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
| placeholder `v2.5.9` | Whether to generage a placeholder element when fixed | _boolean_ | `false` |
| z-index | Z-index | _number \| string_ | `1` |

### Slots

| Name  | Description               |
| ----- | ------------------------- |
| title | Custom title              |
| left  | Custom left side content  |
| right | Custom right side content |

### Events

| Event       | Description                       | Arguments |
| ----------- | --------------------------------- | --------- |
| click-left  | Triggered when click left button  | -         |
| click-right | Triggered when click right button | -         |
