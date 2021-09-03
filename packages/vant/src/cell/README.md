# Cell

### Intro

The cell is a single display item in the list.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { Cell, CellGroup } from 'vant';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

## Usage

### Basic Usage

```html
<van-cell-group>
  <van-cell title="Cell title" value="Content" />
  <van-cell title="Cell title" value="Content" label="Description" />
</van-cell-group>
```

### Inset Grouped

```html
<van-cell-group inset>
  <van-cell title="Cell title" value="Content" />
  <van-cell title="Cell title" value="Content" label="Description" />
</van-cell-group>
```

### Size

```html
<van-cell-group>
  <van-cell title="Cell title" value="Content" size="large" />
  <van-cell
    title="Cell title"
    value="Content"
    size="large"
    label="Description"
  />
</van-cell-group>
```

### Left Icon

```html
<van-cell-group>
  <van-cell title="Cell title" icon="location-o" />
</van-cell-group>
```

### Value only

```html
<van-cell-group>
  <van-cell value="Content" />
</van-cell-group>
```

### Link

```html
<van-cell-group>
  <van-cell title="Cell title" is-link />
  <van-cell title="Cell title" is-link value="Content" />
  <van-cell title="Cell title" is-link arrow-direction="down" value="Content" />
</van-cell-group>
```

### Router

```html
<van-cell-group>
  <van-cell title="URL" is-link url="/vant/mobile.html" />
  <van-cell title="Vue Router" is-link to="index" />
</van-cell-group>
```

### Group Title

```html
<van-cell-group title="Group 1">
  <van-cell title="Cell title" value="Content" />
</van-cell-group>
<van-cell-group title="Group 2">
  <van-cell title="Cell title" value="Content" />
</van-cell-group>
```

### Use Slots

```html
<van-cell value="Content" is-link>
  <!-- Use the title slot to customize the title -->
  <template #title>
    <span class="custom-title">Title</span>
    <van-tag type="danger">Tag</van-tag>
  </template>
</van-cell>

<van-cell title="Title" icon="shop-o">
  <!-- Use the right-icon slot to customize the right icon -->
  <template #right-icon>
    <van-icon name="search" class="search-icon" />
  </template>
</van-cell>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

### Vertical Center

```html
<van-cell center title="Cell title" value="Content" label="Description" />
```

## API

### CellGroup Props

| Attribute      | Description                  | Type      | Default |
| -------------- | ---------------------------- | --------- | ------- |
| title          | Group title                  | _string_  | -       |
| inset `v3.1.0` | Whether to be inset grouped  | _boolean_ | `false` |
| border         | Whether to show outer border | _boolean_ | `true`  |

### Cell Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _number \| string_ | - |
| value | Right text | _number \| string_ | - |
| label | Description below the title | _string_ | - |
| size | Size，can be set to `large` | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix | Icon className prefix | _string_ | `van-icon` |
| border | Whether to show inner border | _boolean_ | `true` |
| center | Whether to center content vertically | _boolean_ | `true` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `null` |
| is-link | Whether to show link icon | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| arrow-direction | Can be set to `left` `up` `down` | _string_ | `right` |
| title-style | Title style | _string \| Array \| object_ | - |
| title-class | Title className | _string \| Array \| object_ | - |
| value-class | Value className | _string \| Array \| object_ | - |
| label-class | Label className | _string \| Array \| object_ | - |

### Cell Events

| Event | Description                  | Arguments           |
| ----- | ---------------------------- | ------------------- |
| click | Emitted when cell is clicked | _event: MouseEvent_ |

### CellGroup Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |
| title   | Custom title |

### Cell Slots

| Name           | Description                       |
| -------------- | --------------------------------- |
| title          | Custom title                      |
| value `v3.1.1` | Custom value                      |
| label          | Custom label                      |
| icon           | Custom left icon                  |
| right-icon     | Custom right icon                 |
| extra          | Custom extra content on the right |

### Types

The component exports the following type definitions:

```ts
import type { CellArrowDirection } from 'vant';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --- | --- | --- |
| --van-cell-font-size | _var(--van-font-size-md)_ | - |
| --van-cell-line-height | _24px_ | - |
| --van-cell-vertical-padding | _10px_ | - |
| --van-cell-horizontal-padding | _var(--van-padding-md)_ | - |
| --van-cell-text-color | _var(--van-text-color)_ | - |
| --van-cell-background-color | _var(--van-white)_ | - |
| --van-cell-border-color | _var(--van-border-color)_ | - |
| --van-cell-active-color | _var(--van-active-color)_ | - |
| --van-cell-required-color | _var(--van-danger-color)_ | - |
| --van-cell-label-color | _var(--van-gray-6)_ | - |
| --van-cell-label-font-size | _var(--van-font-size-sm)_ | - |
| --van-cell-label-line-height | _var(--van-line-height-sm)_ | - |
| --van-cell-label-margin-top | _var(--van-padding-base)_ | - |
| --van-cell-value-color | _var(--van-gray-6)_ | - |
| --van-cell-icon-size | _16px_ | - |
| --van-cell-right-icon-color | _var(--van-gray-6)_ | - |
| --van-cell-large-vertical-padding | _var(--van-padding-sm)_ | - |
| --van-cell-large-title-font-size | _var(--van-font-size-lg)_ | - |
| --van-cell-large-label-font-size | _var(--van-font-size-md)_ | - |
| --van-cell-group-background-color | _var(--van-white)_ | - |
| --van-cell-group-title-color | _var(--van-gray-6)_ | - |
| --van-cell-group-title-padding | _var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs)_ | - |
| --van-cell-group-title-font-size | _var(--van-font-size-md)_ | - |
| --van-cell-group-title-line-height | _16px_ | - |
| --van-cell-group-inset-padding | _0 var(--van-padding-md)_ | - |
| --van-cell-group-inset-border-radius | _var(--van-border-radius-lg)_ | - |
| --van-cell-group-inset-title-padding | _var(--van-padding-md) var(--van-padding-md) var(--van-padding-xs) var(--van-padding-xl)_ | - |
