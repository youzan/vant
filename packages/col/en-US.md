## Layout

Quickly and easily create layouts with `van-row` and `van-col`

### Install
``` javascript
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);
```

### Usage

#### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.


```html
<van-row>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>

<van-row>
  <van-col span="4">span: 4</van-col>
  <van-col span="10" offset="4">offset: 4, span: 10</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<van-row>
  <van-col offset="12" span="12">offset: 12, span: 12</van-col>
</van-row>
```


#### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<van-row gutter="20">
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>
```

#### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<van-row type="flex">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<van-row type="flex" justify="center">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<van-row type="flex" justify="end">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<van-row type="flex" justify="space-between">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>

<van-row type="flex" justify="space-around">
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
  <van-col span="6">span: 6</van-col>
</van-row>
```


### API

#### Row

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Layout type, can be set to `flex` | `String` | - |
| gutter | Grid spacing（px） | `String | Number` | - |
| tag | Custom element tag | `String` | `div` |
| justify | Flex main axis，can be set to  end/center/space-around/space-between | `String` | `start` |
| align | Flex cross axis, be set to  center/bottom | `String` | `top` |

#### Col

| Attribute | Description | Type | Default |
|------|------|------|------|
| span | Number of column the grid spans | `String | Number` | - |
| offset | Number of spacing on the left side of the grid | `String | Number` | - |
| tag | Custom element tag | `String` | `div` |
