## GoodsAction

### Install
``` javascript
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';

Vue.component(GoodsAction.name, GoodsAction);
Vue.component(GoodsActionBigBtn.name, GoodsActionBigBtn);
Vue.component(GoodsActionMiniBtn.name, GoodsActionMiniBtn);
```

### Usage


```html
<van-goods-action>
  <van-goods-action-mini-btn icon="chat" @click="onClickMiniBtn">
    Icon1
  </van-goods-action-mini-btn>
  <van-goods-action-mini-btn icon="cart" @click="onClickMiniBtn">
    Icon2
  </van-goods-action-mini-btn>
  <van-goods-action-big-btn @click="onClickBigBtn">
    Button1
  </van-goods-action-big-btn>
  <van-goods-action-big-btn @click="onClickBigBtn" primary>
    Button2
  </van-goods-action-big-btn>
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

### API

#### GoodsActionMiniBtn

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| icon | Icon | `String` | - | Icon 组件支持的所有图标 |
| iconClass | Icon class name | `String` | `''` | - |
| url | Link URL | `String` | `javascript:;` | - |

#### GoodsActionBigBtn

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| url | Link URL | `String` | `javascript:;` | - |
| primary | Is primary button (red color) | `Boolean` | `false` | - |
