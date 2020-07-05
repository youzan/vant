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
<van-cell value="内容" is-link>
  <!-- Use the title slot to customize the title -->
  <template #title>
    <span class="custom-title">单元格</span>
    <van-tag type="danger">标签</van-tag>
  </template>
</van-cell>

<van-cell title="单元格" icon="shop-o">
  <!-- Use the right-icon slot to customize the right icon -->
  <template #right-icon>
    <van-icon name="search" style="line-height: inherit;" />
  </template>
</van-cell>
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
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| is-link | Whether to show link icon | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| arrow-direction | Can be set to `left` `up` `down` | _string_ | `right` |
| title-style | Title style | _any_ | - |
| title-class | Title className | _any_ | - |
| value-class | Value className | _any_ | - |
| label-class | Label className | _any_ | - |

### Cell Events

| Event | Description               | Arguments      |
| ----- | ------------------------- | -------------- |
| click | Triggered when click cell | _event: Event_ |

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
