## Cell

### Install
``` javascript
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);
```

### Usage

#### Basic Usage

```html
<van-cell-group>
  <van-cell title="Cell title" value="Content" />
  <van-cell title="Cell title" value="Content" label="Description" />
</van-cell-group>
```

#### Size

```html
<van-cell-group>
  <van-cell title="Cell title" value="Content" size="large" />
  <van-cell title="Cell title" value="Content" size="large" label="Description" />
</van-cell-group>
```

#### Left Icon

```html
<van-cell-group>
  <van-cell title="Cell title" icon="location-o" />
</van-cell-group>
```

#### Value only

```html
<van-cell-group>
  <van-cell value="Content" />
</van-cell-group>
```

#### Link

```html
<van-cell-group>
  <van-cell title="Cell title" is-link />
  <van-cell title="Cell title" is-link value="Content" />
  <van-cell title="Cell title" is-link arrow-direction="down" value="Content" />
</van-cell-group>
```

#### Router

```html
<van-cell-group>
  <van-cell title="Cell title" is-link url="//youzan.github.io/vant/mobile.html" />
  <van-cell title="Cell title" is-link to="index" />
</van-cell-group>
```

#### Group Title

```html
<van-cell-group title="Group 1">
  <van-cell title="Cell title" value="Content" />
</van-cell-group>
<van-cell-group title="Group 2">
  <van-cell title="Cell title" value="Content" />
</van-cell-group>
```

#### Advanced Usage

```html
<van-cell-group>
  <van-cell value="Content" icon="shop-o" is-link>
    <template slot="title">
      <span class="custom-text">Cell title</span>
      <van-tag type="danger">Tag</van-tag>
    </template>
  </van-cell>
  <van-cell title="Cell title" icon="location-o" is-link />
  <van-cell title="Cell title">
    <van-icon slot="right-icon" name="search" class="custom-icon" />
  </van-cell>
</van-cell-group>
```

### CellGroup API

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Group title | `String` | - |
| border | Whether to show outer border | `Boolean` | `true` |

### Cell API

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Left Icon | `String` | - |
| title | Title | `String | Number` | - |
| value | Right text | `String | Number` | - |
| label | Description below the title | `String` | - |
| size | Size，can be set to `large` | `String` | - |
| border | Whether to show inner border | `Boolean` | `true` |
| center | Whether to center content vertically | `Boolean` | `true` |
| url | Link URL | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |
| clickable | Whether to show click feedback when clicked | `Boolean` | `false` |
| is-link | Whether to show link icon | `Boolean` | `false` |
| required | Whether to show required mark | `Boolean` | `false` |
| arrow-direction | Can be set to `left` `up` `down` | `String` | - |
| title-class | Title className | `any` | - |
| value-class | Value className | `any` | - |
| label-class | Label className | `any` | - |

### Cell Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click cell | - |

### Cell Slot

| name | Description |
|------|------|
| - | Default slot |
| icon | Custom icon |
| title | Custom title |
| label | Custom label |
| right-icon | Custom right icon |
