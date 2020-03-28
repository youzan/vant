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
    }
  }
}
```

### Use Slot

```html
<van-nav-bar title="Title" left-text="Back" left-arrow>
  <template #right>
    <van-icon name="search"/> 
  </template>
</van-nav-bar>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Title | *string* | `''` |
| left-text | Left Text | *string* | `''` |
| right-text | Right Text | *string* | `''` |
| left-arrow | Whether to show left arrow | *boolean* | `false` |
| border | Whether to show bottom border | *boolean* | `true` |
| fixed | Whether to fixed top | *boolean* | `false` |
| placeholder `v2.5.9` | Whether to generage a placeholder element when fixed | *boolean* | `false` |
| z-index | Z-index | *number \| string* | `1` |

### Slots

| Name | Description |
|------|------|
| title | Custom title |
| left | Custom left side content |
| right | Custom right side content |

### Events

| Event | Description | Arguments |
|------|------|------|
| click-left | Triggered when click left button | - |
| click-right | Triggered when click right button | - |
