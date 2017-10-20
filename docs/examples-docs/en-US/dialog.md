<script>
import { Dialog } from 'packages';

const message = '弹窗内容';

export default {
  methods: {
    onClickAlert() {
      Dialog.alert({
        title: '标题',
        message
      });
    },

    onClickAlert2() {
      Dialog.alert({
        message
      });
    },

    onClickConfirm() {
      Dialog.confirm({
        title: '标题',
        message
      }).catch(action => {
        console.log(action);
      });
    }
  }
};
</script>

## Dialog

### Install

```js
import { Dialog } from 'vant';
```

### Usage

#### 消息提示

用于提示一些消息，只包含一个确认按钮

:::demo 消息提示
```html
<van-button @click="onClickAlert">Alert</van-button>
<van-button @click="onClickAlert2">无标题 Alert</van-button>
```

```javascript
export default {
  methods: {
    onClickAlert() {
      Dialog.alert({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on close
      });
    },

    onClickAlert2() {
      Dialog.alert({
        message: '弹窗内容'
      }).then(() => {
        // on close
      });
    }
  }
};
```
:::

#### 消息确认

用于确认消息，包含取消和确认按钮

:::demo 消息确认
```html
<van-button @click="onClickConfirm">Confirm</van-button>
```

```javascript
export default {
  methods: {
    onClickConfirm() {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      });
    }
  }
};
```
:::

### 方法

| 方法名 | Attribute | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Dialog.alert | options | `Promise` | 展示消息提示弹窗 |
| Dialog.confirm | options | `Promise` | 展示消息确认弹窗 |
| Dialog.close | - | `void` | 关闭弹窗 |

### Options

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `String` | - | - |
| message | 内容 | `String` | - | - |
| showConfirmButton | 是否展示确认按钮 | `Boolean` |  `true` | - |
| showCancelButton | 是否展示取消按钮 | `Boolean` |  `false` | - |
| confirmButtonText | 确认按钮的文案 | `String` |  `确认` | - |
| cancelButtonText | 取消按钮的文案 | `String` | `取消` | - |
| overlay | 是否展示蒙层 | `Boolean` | `true` | - |
| closeOnClickOverlay | 点击蒙层时是否关闭弹窗 | `Boolean` | `false` | - |
| lockOnScroll | 是否禁用背景滚动 | `Boolean` | `true` | - |
