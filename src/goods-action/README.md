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
  <van-goods-action-icon icon="shop-o" text="Icon3" @click="onClickIcon" />
  <van-goods-action-button type="danger" text="Button" @click="onClickButton" />
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
    },
  },
};
```

### Icon Badge

Use `badge` prop to show badge in icon.

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" dot />
  <van-goods-action-icon icon="cart-o" text="Icon2" badge="5" />
  <van-goods-action-icon icon="shop-o" text="Icon3" badge="12" />
  <van-goods-action-button type="warning" text="Button" />
  <van-goods-action-button type="danger" text="Button" />
</van-goods-action>
```

### Custom Icon Color

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" color="#ee0a24" />
  <van-goods-action-icon icon="cart-o" text="Icon2" />
  <van-goods-action-icon icon="star" text="Collected" color="#ff5000" />
  <van-goods-action-button type="warning" text="Button" />
  <van-goods-action-button type="danger" text="Button" />
</van-goods-action>
```

### Custom Button Color

```html
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="Icon1" />
  <van-goods-action-icon icon="shop-o" text="Icon2" />
  <van-goods-action-button color="#be99ff" type="warning" text="Button" />
  <van-goods-action-button color="#7232dd" type="danger" text="Button" />
</van-goods-action>
```

## API

### GoodsAction Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |

### GoodsActionIcon Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| text | Button text | _string_ | - |
| icon | Icon | _string_ | - |
| color | Icon color | _string_ | `#323233` |
| icon-class | Icon class name | _any_ | `''` |
| dot `2.5.5` | Whether to show red dot | _boolean_ | - |
| badge `2.5.6` | Content of the badge | _number \| string_ | - |
| url | Link | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### GoodsActionButton Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| text | Button text | _string_ | - |
| type | Button type, Can be set to `primary` `info` `warning` `danger` | _string_ | `default` |
| color | Button color, support linear-gradient | _string_ | - |
| icon | Left Icon | _string_ | - |
| primary | Is primary button (red color) | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether show loading status | _boolean_ | `false` |
| url | Link | _string_ | - |
| to | Target route of the link, same as to of vue-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |

### GoodsActionIcon Slots

| Name    | Description |
| ------- | ----------- |
| default | Text        |
| icon    | Custom icon |

### GoodsActionButton Slots

| Name    | Description    |
| ------- | -------------- |
| default | Button content |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                               | Default Value      | Description |
| ---------------------------------- | ------------------ | ----------- |
| @goods-action-background-color     | `@white`           | -           |
| @goods-action-height               | `50px`             | -           |
| @goods-action-icon-width           | `48px`             | -           |
| @goods-action-icon-height          | `100%`             | -           |
| @goods-action-icon-color           | `@text-color`      | -           |
| @goods-action-icon-size            | `18px`             | -           |
| @goods-action-icon-font-size       | `@font-size-xs`    | -           |
| @goods-action-icon-active-color    | `@active-color`    | -           |
| @goods-action-icon-text-color      | `@gray-7`          | -           |
| @goods-action-button-height        | `40px`             | -           |
| @goods-action-button-warning-color | `@gradient-orange` | -           |
| @goods-action-button-danger-color  | `@gradient-red`    | -           |
