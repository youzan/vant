# GoodsAction

### Install

```js
import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
```

## Usage

### Basic Usage

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="Icon2" @click="onClickIcon" />
  <van-goods-action-button type="warning" text="Button1" @click="onClickButton" />
  <van-goods-action-button type="danger" text="Button2" @click="onClickButton" />
</van-goods-action>
```

```js
import { Toast } from 'vant';

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

### Icon Badge

Use `badge` prop to show badge in icon

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" dot />
  <van-goods-action-icon icon="cart-o" text="Icon2" badge="5" />
  <van-goods-action-icon icon="shop-o" text="Icon3" badge="12" />
  <van-goods-action-button type="warning" text="Button1" />
  <van-goods-action-button type="danger" text="Button2" />
</van-goods-action>
```

### Custom Icon Color

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" color="#07c160" />
  <van-goods-action-icon icon="cart-o" text="Icon2" />
  <van-goods-action-icon icon="star" text="Collected" color="#ff5000" />
  <van-goods-action-button type="warning" text="Button1" />
  <van-goods-action-button type="danger" text="Button2" />
</van-goods-action>
```

### Custom Button Color

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" />
  <van-goods-action-icon icon="shop-o" text="Icon2" />
  <van-goods-action-button color="#be99ff" type="warning" text="Button1" />
  <van-goods-action-button color="#7232dd" type="danger" text="Button2" />
</van-goods-action>
```

## API

### GoodsAction Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | *boolean* | `true` |

### GoodsActionIcon Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | *string* | - |
| icon | Icon | *string* | - |
| color `v2.4.2` | Icon color | *string* | `#323233` |
| icon-class | Icon class name | *any* | `''` |
| dot `2.5.5` | Whether to show red dot | *boolean* | - |
| badge `2.5.6` | Content of the badge | *number \| string* | - |
| url | Link | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### GoodsActionButton Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | *string* | - |
| type | Button type, Can be set to `primary` `info` `warning` `danger` | *string* | `default` |
| color `v2.1.8` | Button color, support linear-gradient | *string* | - |
| icon `v2.4.4` | Left Icon | *string* | - |
| primary | Is primary button (red color) | *boolean* | `false` |
| disabled | Whether to disable button | *boolean* | `false` |
| loading | Whether show loading status | *boolean* | `false` |
| url | Link | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### GoodsActionIcon Slots

| Name | Description |
|------|------|
| default | Text |
| icon | Custom icon |

### GoodsActionButton Slots

| Name | Description |
|------|------|
| default | Button content |
