# Grid

### Intro

Used to divide the page into blocks of equal width in the horizontal direction for displaying content or page navigation.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Grid, GridItem } from 'vant';

const app = createApp();
app.use(Grid);
app.use(GridItem);
```

## Usage

### Basic Usage

```html
<van-grid>
  <van-grid-item icon="photo-o" text="Text" />
  <van-grid-item icon="photo-o" text="Text" />
  <van-grid-item icon="photo-o" text="Text" />
  <van-grid-item icon="photo-o" text="Text" />
</van-grid>
```

### Column Num

```html
<van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="Text" />
</van-grid>
```

### Custom Content

```html
<van-grid :border="false" :column-num="3">
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
</van-grid>
```

### Square

```html
<van-grid square>
  <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="Text" />
</van-grid>
```

### Gutter

```html
<van-grid :gutter="10">
  <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="Text" />
</van-grid>
```

### Horizontal

```html
<van-grid direction="horizontal" :column-num="3">
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
</van-grid>
```

### Route

```html
<van-grid clickable :column-num="2">
  <van-grid-item icon="home-o" text="Vue Router" to="/" />
  <van-grid-item icon="search" text="URL" url="/vant/mobile.html" />
</van-grid>
```

### Show Badge

```html
<van-grid :column-num="2">
  <van-grid-item icon="home-o" text="Text" dot />
  <van-grid-item icon="search" text="Text" badge="99+" />
</van-grid>
```

## API

### Grid Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| column-num | Column Num | _number \| string_ | `4` |
| icon-size | Icon size | _number \| string_ | `28px` |
| gutter | Gutter | _number \| string_ | `0` |
| border | Whether to show border | _boolean_ | `true` |
| center | Whether to center content | _boolean_ | `true` |
| square | Whether to be square shape | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| direction | Content arrangement direction, can be set to `horizontal` | _string_ | `vertical` |

### GridItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text | _string_ | - |
| icon | Icon name or URL | _string_ | - |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| icon-color | Icon color | _string_ | - |
| reverse `v3.1.0` | Whether to reverse the position of icon and text | _boolean_ | `false` |
| dot | Whether to show red dot | _boolean_ | `false` |
| badge | Content of the badge | _number \| string_ | - |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### GridItem Events

| Event | Description                       | Arguments           |
| ----- | --------------------------------- | ------------------- |
| click | Emitted when component is clicked | _event: MouseEvent_ |

### GridItem Slots

| Name    | Description    |
| ------- | -------------- |
| default | Custom content |
| icon    | Custom icon    |
| text    | Custom text    |

### Types

The component exports the following type definitions:

```ts
import type { GridDirection } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-grid-item-content-padding | _var(--van-padding-md) var(--van-padding-xs)_ | - |
| --van-grid-item-content-background-color | _var(--van-white)_ | - |
| --van-grid-item-content-active-color | _var(--van-active-color)_ | - |
| --van-grid-item-icon-size | _28px_ | - |
| --van-grid-item-text-color | _var(--van-gray-7)_ | - |
| --van-grid-item-text-font-size | _var(--van-font-size-sm)_ | - |
