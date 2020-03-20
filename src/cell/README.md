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
  <van-cell title="Cell title" value="Content" size="large" label="Description" />
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
    <van-icon
      name="search"
      style="line-height: inherit;"
    />
  </template>
</van-cell>
```

### Vertical Center

```html
<van-cell center title="Cell title" value="Content" label="Description" />
```

## API

### CellGroup Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Group title | *string* | - |
| border | Whether to show outer border | *boolean* | `true` |

### Cell Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Title | *number \| string* | - |
| value | Right text | *number \| string* | - |
| label | Description below the title | *string* | - |
| size | Size，can be set to `large` | *string* | - |
| icon | Left Icon | *string* | - |
| icon-prefix `v2.5.3` | Icon className prefix | *string* | `van-icon` |
| border | Whether to show inner border | *boolean* | `true` |
| center | Whether to center content vertically | *boolean* | `true` |
| url | Link URL | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` |
| is-link | Whether to show link icon | *boolean* | `false` |
| required | Whether to show required mark | *boolean* | `false` |
| arrow-direction | Can be set to `left` `up` `down` | *string* | `right` |
| title-style | Title style | *any* | - |
| title-class | Title className | *any* | - |
| value-class | Value className | *any* | - |
| label-class | Label className | *any* | - |

### Cell Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click cell | *event: Event* |

### CellGroup Slots

| Name | Description |
|------|------|
| default | Default slot |
| title | Custom title |

### Cell Slots

| Name | Description |
|------|------|
| default | Custom value |
| icon | Custom icon |
| title | Custom title |
| label | Custom label |
| right-icon | Custom right icon |
