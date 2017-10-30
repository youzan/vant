<script>
export default {
  methods: {
    handleClick() {
      console.log('cell click');
    }
  }
};
</script>

## Cell

### Install
``` javascript
import { Cell, CellGroup } from 'vant';

Vue.component(Cell.name, Cell);
Vue.component(CellGroup.name, CellGroup);
```

### Usage

#### Basic Usage

:::demo Basic Usage
```html
<van-cell-group>
  <van-cell title="Title" value="Text"></van-cell>
  <van-cell title="Title" value="Text" label="Description"></van-cell>
</van-cell-group>
```
:::

#### Value only

:::demo Value only
```html
<van-cell-group>
  <van-cell value="Text"></van-cell>
</van-cell-group>
```
:::

#### Left Icon

:::demo Left Icon
```html
<van-cell-group>
  <van-cell title="Title" icon="location"></van-cell>
</van-cell-group>
```
:::

#### Link

:::demo Link
```html
<van-cell-group>
  <van-cell title="Title" is-link></van-cell>
  <van-cell title="Title" is-link value="Text"></van-cell>
</van-cell-group>
```
:::

#### Advanced Usage

:::demo Advanced Usage
```html
<van-cell-group>
  <van-cell value="Text" icon="shop" is-link>
    <template slot="title">
      <span class="van-cell-text">Title</span>
      <van-tag type="danger">Tag</van-tag>
    </template>
  </van-cell>
  <van-cell title="Title" icon="location" is-link></van-cell>
  <van-cell title="Title">
    <template slot="right-icon">
      <van-icon name="search" class="van-cell__right-icon"></van-icon>
    </template>
  </van-cell>
</van-cell-group>
```
:::

### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| icon | Left Icon | `String` | - | - |
| title | Title | `String` | - | - |
| value | Right text | `String` | - | - |
| label | Description below the title | `String` | - | - |
| url | Link | `String` | - | - |
| to | target route of the link, same as to of `vue-router` | `String | Object` | - | - |
| replace | if true, the navigation will not leave a history record | `String` | `false` | - |
| isLink | Whether to show link icon | `Boolean` | `false` | - |
| required | Whether to show required mark | `Boolean` | `false` | - |

### Slot

| name | Description |
|-----------|-----------|
| - | Default slot |
| icon | Custom icon |
| title | Custom title |
| right-icon | Custom right icon |
