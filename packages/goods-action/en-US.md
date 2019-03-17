## GoodsAction

### Install
``` javascript
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);
```

### Usage
#### Basic Usage

```html
<van-goods-action>
  <van-goods-action-mini-btn
    icon="chat-o"
    text="Icon1"
    @click="onClickMiniBtn"
  />
  <van-goods-action-mini-btn
    icon="cart-o"
    text="Icon2"
    @click="onClickMiniBtn"
  />
  <van-goods-action-big-btn
    text="Button1"
    @click="onClickBigBtn"
  />
  <van-goods-action-big-btn
    primary
    text="Button2"
    @click="onClickBigBtn"
  />
</van-goods-action>
```

```javascript
export default {
  methods: {
    onClickMiniBtn() {
      Toast('Click Icon');
    },
    onClickBigBtn() {
      Toast('Click Button');
    }
  }
}
```

#### Icon info

Use `info` prop to show messages in upper right corner of icon

```html
<van-goods-action>
  <van-goods-action-mini-btn
    icon="chat-o"
    text="Icon1"
  />
  <van-goods-action-mini-btn
    info="5"
    icon="cart-o"
    text="Icon2"
  />
  <van-goods-action-mini-btn
    icon="shop-o"
    text="Icon3"
  />
  <van-goods-action-big-btn text="Button1" />
  <van-goods-action-big-btn
    primary
    text="Button2"
  />
</van-goods-action>
```

### API

#### GoodsActionMiniBtn

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | `String` | - |
| icon | Icon | `String` | - |
| icon-class | Icon class name | `any` | `''` |
| info | Info message | `String | Number` | - |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |

#### GoodsActionBigBtn

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | `String` | - |
| primary | Is primary button (red color) | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `Boolean` | `false` |
