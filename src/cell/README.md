# Cell

### Install

```js
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
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

| Attribute | Description                  | Type      | Default |
| --------- | ---------------------------- | --------- | ------- |
| title     | Group title                  | _string_  | -       |
| border    | Whether to show outer border | _boolean_ | `true`  |

### Cell Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _number \| string_ | - |
| value | Right text | _number \| string_ | - |
| label | Description below the title | _string_ | - |
| size | Size，can be set to `large` | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix `v2.5.3` | Icon className prefix | _string_ | `van-icon` |
| border | Whether to show inner border | _boolean_ | `true` |
| center | Whether to center content vertically | _boolean_ | `true` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `null` |
| is-link | Whether to show link icon | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| arrow-direction | Can be set to `left` `up` `down` | _string_ | `right` |
| title-style | Title style | _any_ | - |
| title-class | Title className | _any_ | - |
| value-class | Value className | _any_ | - |
| label-class | Label className | _any_ | - |

### Cell Events

| Event | Description                  | Arguments      |
| ----- | ---------------------------- | -------------- |
| click | Emitted when cell is clicked | _event: Event_ |

### CellGroup Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |
| title   | Custom title |

### Cell Slots

| Name       | Description                       |
| ---------- | --------------------------------- |
| default    | Custom value                      |
| icon       | Custom icon                       |
| title      | Custom title                      |
| label      | Custom label                      |
| right-icon | Custom right icon                 |
| extra      | Custom extra content on the right |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| @cell-font-size | `@font-size-md` | - |
| @cell-line-height | `24px` | - |
| @cell-vertical-padding | `10px` | - |
| @cell-horizontal-padding | `@padding-md` | - |
| @cell-text-color | `@text-color` | - |
| @cell-background-color | `@white` | - |
| @cell-border-color | `@border-color` | - |
| @cell-active-color | `@active-color` | - |
| @cell-required-color | `@red` | - |
| @cell-label-color | `@gray-6` | - |
| @cell-label-font-size | `@font-size-sm` | - |
| @cell-label-line-height | `@line-height-sm` | - |
| @cell-label-margin-top | `@padding-base` | - |
| @cell-value-color | `@gray-6` | - |
| @cell-icon-size | `16px` | - |
| @cell-right-icon-color | `@gray-6` | - |
| @cell-large-vertical-padding | `@padding-sm` | - |
| @cell-large-title-font-size | `@font-size-lg` | - |
| @cell-large-label-font-size | `@font-size-md` | - |
| @cell-group-background-color | `@white` | - |
| @cell-group-title-color | `@gray-6` | - |
| @cell-group-title-padding | `@padding-md @padding-md @padding-xs` | - |
| @cell-group-title-font-size | `@font-size-md` | - |
| @cell-group-title-line-height | `16px` | - |
