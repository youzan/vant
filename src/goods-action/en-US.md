# GoodsAction

### Install

``` javascript
import {
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon);
```

## Usage

### Basic Usage

```html
<van-goods-action>
  <van-goods-action-icon
    icon="chat-o"
    text="Icon1"
    @click="onClickIcon"
  />
  <van-goods-action-icon
    icon="cart-o"
    text="Icon2"
    @click="onClickIcon"
  />
  <van-goods-action-button
    type="warning"
    text="Button1"
    @click="onClickButton"
  />
  <van-goods-action-button
    type="danger"
    text="Button2"
    @click="onClickButton"
  />
</van-goods-action>
```

```javascript
export default {
  methods: {
    onClickIcon() {
      Toast('Click Icon');
    },
    onClickButton() {
      Toast('Click Button');
    }
  }
}
```

### Icon info

Use `info` prop to show messages in upper right corner of icon

```html
<van-goods-action>
  <van-goods-action-icon
    icon="chat-o"
    text="Icon1"
  />
  <van-goods-action-icon
    info="5"
    icon="cart-o"
    text="Icon2"
  />
  <van-goods-action-icon
    icon="shop-o"
    text="Icon3"
  />
  <van-goods-action-button
    type="warning"
    text="Button1"
  />
  <van-goods-action-button
    type="danger"
    text="Button2"
  />
</van-goods-action>
```

## API

### GoodsAction Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation, to enable those features use `viewport-fit=cover` in the `viewport` meta tag | `Boolean` | `false` |

### GoodsActionIcon Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | `String` | - |
| icon | Icon | `String` | - |
| icon-class | Icon class name | `any` | `''` |
| info | Info message | `String | Number` | - |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |

### GoodsActionButton Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Button type, Can be set to `primary` `info` `warning` `danger` | `String` | `default` |
| text | Button text | `String` | - |
| primary | Is primary button (red color) | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |
