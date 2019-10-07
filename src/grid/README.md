# Grid

### Install

``` javascript
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);
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
  <van-grid-item icon="home-o" text="Vue Router" to="/" />
  <van-grid-item icon="search" text="URL" url="/vant/mobile.html" />
</van-grid>
```

### Show Info

```html
<van-grid :column-num="2">
  <van-grid-item icon="home-o" text="Text" dot />
  <van-grid-item icon="search" text="Text" info="99+" />
</van-grid>
```

## API

### Grid Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| column-num | Column Num | *number* | `4` | 2.0.4 |
| gutter | Gutter | *string \| number* | `0` | - |
| border | Whether to show border | *boolean* | `true` | - |
| center | Whether to center content | *boolean* | `true` | - |
| square | Whether to be square shape | *boolean* | `false` | - |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` | - |
| icon-size | Icon size | *string \| number* | `28px` | 2.2.6 |

### GridItem Props

| Attribute | Description | Type | Default | Version |
|------|------|------|------|------|
| text | Text | *string* | - | - |
| icon | Icon name or URL | *string* | - | - |
| dot | Whether to show red dot | *boolean* | `false` | 2.2.1 |
| info | Content of the badge | *string \| number* | `''` | 2.2.1 |
| url | Link URL | *string* | - | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` | - |

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
