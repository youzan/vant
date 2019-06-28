# Grid

### Install

``` javascript
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);
```

## Usage

### Basic Usage

```html
<van-grid>
  <van-grid-item
    v-for="value in 4"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</van-grid>
```

### Column Num

```html
<van-grid :column-num="3">
  <van-grid-item
    v-for="value in 6"
    :key="value"
    icon="photo-o"
    text="Text"
  />
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
  <van-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</van-grid>
```

### Gutter

```html
<van-grid :gutter="10">
  <van-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</van-grid>
```

### Route

```html
<van-grid clickable :column-num="2">
  <van-grid-item
    icon="home-o"
    text="Vue Router"
    to="/"
  />
  <van-grid-item
    icon="search"
    text="URL"
    url="https://www.baidu.com"
  />
</van-grid>
```

## API

### Grid Props

| Attribute | Description | Type | Default |
|------|------|------|------|------|
| column-num | Column Num | `Number` | `4` |
| gutter | Gutter | `String | Number` | `0` |
| border | Whether to show border | `Boolean` | `true` |
| center | Whether to center content | `Boolean` | `true` |
| square | Whether to be square shape | `Boolean` | `false` |
| clickable | Whether to show click feedback when clicked | `Boolean` | `false` |

### GridItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|------|
| text | Text | `String` | - |
| icon | Icon name or URL | `String` | - |
| url | Link URL | `String` | - |
| to | Target route of the link, same as to of vue-router | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |

### GridItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |

### GridItem Slots

| Name | Description |
|------|------|
| default | Custom content |
| icon | Custom icon |
| text | Custom text |
