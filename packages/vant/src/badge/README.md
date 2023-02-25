# Badge

### Intro

Display a small badge or a red dot to the top-right of its child.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Badge } from 'vant';

const app = createApp();
app.use(Badge);
```

## Usage

### Basic Usage

```html
<van-badge :content="5">
  <div class="child" />
</van-badge>
<van-badge :content="10">
  <div class="child" />
</van-badge>
<van-badge content="Hot">
  <div class="child" />
</van-badge>
<van-badge dot>
  <div class="child" />
</van-badge>

<style>
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

### Max

```html
<van-badge :content="20" max="9">
  <div class="child" />
</van-badge>
<van-badge :content="50" max="20">
  <div class="child" />
</van-badge>
<van-badge :content="200" max="99">
  <div class="child" />
</van-badge>
```

### Custom Color

```html
<van-badge :content="5" color="#1989fa">
  <div class="child" />
</van-badge>
<van-badge :content="10" color="#1989fa">
  <div class="child" />
</van-badge>
<van-badge dot color="#1989fa">
  <div class="child" />
</van-badge>
```

### Custom Content

Use `content` slot to custom the content of badge.

```html
<van-badge>
  <div class="child" />
  <template #content>
    <van-icon name="success" class="badge-icon" />
  </template>
</van-badge>
<van-badge>
  <div class="child" />
  <template #content>
    <van-icon name="cross" class="badge-icon" />
  </template>
</van-badge>
<van-badge>
  <div class="child" />
  <template #content>
    <van-icon name="down" class="badge-icon" />
  </template>
</van-badge>
```

```css
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
```

### Custom Position

Use `position` prop to set the position of badge.

```html
<van-badge :content="10" position="top-left">
  <div class="child" />
</van-badge>
<van-badge :content="10" position="bottom-left">
  <div class="child" />
</van-badge>
<van-badge :content="10" position="bottom-right">
  <div class="child" />
</van-badge>
```

### Standalone

```html
<van-badge :content="20" />

<van-badge :content="200" max="99" />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| content | Badge content | _number \| string_ | - |
| color | Background color | _string_ | `#ee0a24` |
| dot | Whether to show dot | _boolean_ | `false` |
| max | Max value, show `{max}+` when exceed, only works when content is number | _number \| string_ | - |
| offset | Offset of badge dot, the two items of the array correspond to the horizontal and vertical offsets | _[number \| string, number \| string]_ | - |
| show-zero | Whether to show badge when content is zero | _boolean_ | `true` |
| position | Badge position, can be set to `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |

### Slots

| Name    | Description          |
| ------- | -------------------- |
| default | Default slot         |
| content | Custom badge content |

### Types

The component exports the following type definitions:

```ts
import type { BadgeProps, BadgePosition } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-badge-size | _16px_ | - |
| --van-badge-color | _var(--van-white)_ | - |
| --van-badge-padding | _0 3px_ | - |
| --van-badge-font-size | _var(--van-font-size-sm)_ | - |
| --van-badge-font-weight | _var(--van-font-bold)_ | - |
| --van-badge-border-width | _var(--van-border-width)_ | - |
| --van-badge-background | _var(--van-danger-color)_ | - |
| --van-badge-dot-color | _var(--van-danger-color)_ | - |
| --van-badge-dot-size | _8px_ | - |
| --van-badge-font | _-apple-system-font, Helvetica Neue, Arial, sans-serif_ | - |
