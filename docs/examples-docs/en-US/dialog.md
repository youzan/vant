<script>
import { Dialog } from 'packages';

const message = 'Content';

export default {
  methods: {
    onClickAlert() {
      Dialog.alert({
        message,
        title: 'Title',
        confirmButtonText: 'ok'
      });
    },

    onClickAlert2() {
      Dialog.alert({
        message,
        confirmButtonText: 'ok'
      });
    },

    onClickConfirm() {
      Dialog.confirm({
        title: 'Title',
        message,
        confirmButtonText: 'ok',
        cancelButtonText: 'cancel'
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

#### Alert dialog
Used to prompt for some messages, only including one confirm button

:::demo Alert dialog
```html
<van-button @click="onClickAlert">Alert</van-button>
<van-button @click="onClickAlert2">Alert without title</van-button>
```

```javascript
export default {
  methods: {
    onClickAlert() {
      Dialog.alert({
        title: 'Title',
        message: 'Content'
      }).then(() => {
        // on close
      });
    },

    onClickAlert2() {
      Dialog.alert({
        message: 'Content'
      }).then(() => {
        // on close
      });
    }
  }
};
```
:::

#### Confirm dialog
Used to confirm some messages, including a confirm button and a cancel button

:::demo Confirm dialog
```html
<van-button @click="onClickConfirm">Confirm</van-button>
```

```javascript
export default {
  methods: {
    onClickConfirm() {
      Dialog.confirm({
        title: 'Title',
        message: 'Content'
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

### Methods

| Name | Attribute | Return value | Description |
|-----------|-----------|-----------|-------------|
| Dialog.alert | options | `Promise` | Show alert dialog |
| Dialog.confirm | options | `Promise` | Show confim dialog |
| Dialog.close | - | `void` | Close dialog |

### Options

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| title | Title | `String` | - | - |
| message | Message | `String` | - | - |
| showConfirmButton | Whether to show confirm button | `Boolean` |  `true` | - |
| showCancelButton | Whether to show cancel button | `Boolean` |  `false` | - |
| confirmButtonText | Confirm button text | `String` |  `确认` | - |
| cancelButtonText | Cancel button test | `String` | `取消` | - |
| overlay | Whether to show overlay | `Boolean` | `true` | - |
| closeOnClickOverlay | Whether to close when click overlay | `Boolean` | `false` | - |
| lockOnScroll | Whether to lock body scroll | `Boolean` | `true` | - |
