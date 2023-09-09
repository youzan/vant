# NavBar

### Intro

Provide navigation function for the page, often used at the top of the page.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { NavBar } from 'vant';

const app = createApp();
app.use(NavBar);
```

## Usage

### Basic Usage

```html
<van-nav-bar title="Title" />
```

### Back

```html
<van-nav-bar
  title="Title"
  left-text="Back"
  left-arrow
  @click-left="onClickLeft"
/>
```

```js
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
```

### Right Button

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
import { showToast } from 'vant';

export default {
  setup() {
    const onClickLeft = () => history.back();
    const onClickRight = () => showToast('Button');
    return {
      onClickLeft,
      onClickRight,
    };
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

### Disable Button

Use the `left-disabled` or `right-disabled` props to disable the buttons on either side. The prop reduces the opacity of the button and makes it unclickable.

```html
<van-nav-bar
  title="Title"
  left-text="Back"
  right-text="Button"
  left-arrow
  left-disabled
  right-disabled
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | `''` |
| left-text | Left Text | _string_ | `''` |
| right-text | Right Text | _string_ | `''` |
| left-disabled `v4.6.8` | Whether to disable the left button, decrease opacity and make it unclickable | _boolean_ | `false` |
| right-disabled `v4.6.8` | Whether to disable the right button, decrease opacity and make it unclickable | _boolean_ | `false` |
| left-arrow | Whether to show left arrow | _boolean_ | `false` |
| border | Whether to show bottom border | _boolean_ | `true` |
| fixed | Whether to fixed top | _boolean_ | `false` |
| placeholder | Whether to generate a placeholder element when fixed | _boolean_ | `false` |
| z-index | Z-index | _number \| string_ | `1` |
| safe-area-inset-top | Whether to enable top safe area adaptation | _boolean_ | `false` |
| clickable | Whether to show click feedback when the left or right content is clicked | _boolean_ | `true` |

### Slots

| Name  | Description               |
| ----- | ------------------------- |
| title | Custom title              |
| left  | Custom left side content  |
| right | Custom right side content |

### Events

| Event       | Description                              | Arguments           |
| ----------- | ---------------------------------------- | ------------------- |
| click-left  | Emitted when the left button is clicked  | _event: MouseEvent_ |
| click-right | Emitted when the right button is clicked | _event: MouseEvent_ |

### Types

The component exports the following type definitions:

```ts
import type { NavBarProps } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                           | Default Value              | Description |
| ------------------------------ | -------------------------- | ----------- |
| --van-nav-bar-height           | _46px_                     | -           |
| --van-nav-bar-background       | _var(--van-background-2)_  | -           |
| --van-nav-bar-arrow-size       | _16px_                     | -           |
| --van-nav-bar-icon-color       | _var(--van-primary-color)_ | -           |
| --van-nav-bar-text-color       | _var(--van-primary-color)_ | -           |
| --van-nav-bar-title-font-size  | _var(--van-font-size-lg)_  | -           |
| --van-nav-bar-title-text-color | _var(--van-text-color)_    | -           |
| --van-nav-bar-z-index          | _1_                        | -           |
