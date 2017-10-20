<script>
import { Toast } from 'packages';

export default {
  methods: {
    onClickMiniBtn() {
      Toast('点击图标');
    },
    onClickBigBtn() {
      Toast('点击按钮');
    }
  }
}
</script>

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

:::demo 
```html
<van-goods-action>
  <van-goods-action-mini-btn icon="chat" @click="onClickMiniBtn">
    客服
  </van-goods-action-mini-btn>
  <van-goods-action-mini-btn icon="cart" @click="onClickMiniBtn">
    购物车
  </van-goods-action-mini-btn>
  <van-goods-action-big-btn @click="onClickBigBtn">
    加入购物车
  </van-goods-action-big-btn>
  <van-goods-action-big-btn @click="onClickBigBtn" primary>
    立即购买
  </van-goods-action-big-btn>
</van-goods-action>
```

```javascript
export default {
  methods: {
    onClickMiniBtn() {
      Toast('点击图标');
    },
    onClickBigBtn() {
      Toast('点击按钮');
    }
  }
}
```
:::

### API

#### GoodsActionMiniBtn

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| icon | 图标 | `String` | - | Icon 组件支持的所有图标 |
| iconClass | 图标额外类名 | `String` | `''` | - |
| url | 跳转链接 | `String` | `javascript:;` | - |

#### GoodsActionBigBtn

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| url | 跳转链接 | `String` | `javascript:;` | - |
| primary | 是否主行动按钮，主行动按钮默认为红色 | `Boolean` | `false` | - |
