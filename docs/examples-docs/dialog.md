<style>
.demo-dialog {
  .van-button {
    margin: 15px;
  }
}
</style>

<script>
import { Dialog } from 'src/index';

export default {
  methods: {
    handleAlertClick() {
      Dialog.alert({
        title: 'alert标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then((action) => {
        console.log(action);
      });
    },

    handleAlert2Click() {
      Dialog.alert({
        message: '无标题alert'
      }).then((action) => {
        console.log(action);
      });
    },

    handleConfirmClick() {
      Dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then((action) => {
        console.log(action);
      }, (error) => {
        console.log(error);
      });
    }
  }
};
</script>

## Dialog 弹出框

### 使用指南

`Dialog`和其他组件不同，不是通过HTML结构的方式来使用，而是通过函数调用的方式。使用前需要先引入它，它接受一个数组作为参数，数组中的每一项对应了图片链接。

```js
import { Dialog } from 'vant';
```

### 代码演示

#### 消息提示

用于提示一些消息，只包含一个确认按钮。

:::demo 消息提示
```html
<van-button @click="handleAlertClick">alert</van-button>
<van-button @click="handleAlert2Click">无标题alert</van-button>

<script>
export default {
  methods: {
    handleAlertClick() {
      Dialog.alert({
        title: 'alert标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then((action) => {
        console.log(action);
      });
    },

    handleAlert2Click() {
      Dialog.alert({
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then((action) => {
        console.log(action);
      });
    }
  }
};
</script>
```
:::

#### 消息确认

用于确认消息，包含取消和确认按钮。

:::demo 消息确认
```html
<van-button @click="handleConfirmClick">confirm</van-button>

<script>
export default {
  methods: {
    handleConfirmClick() {
      Dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      }).then((action) => {
        console.log(action);
      }, (error) => {
        console.log(error);
      });
    }
  }
};
</script>
```
:::

### 方法

#### Dialog.alert(options)

消息提示时使用该方法。

#### Dialog.confirm(options)

消息确认时使用该方法。

### Options

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `string`  |  |   |
| message | 内容 | `string`  |  |   |
| confirmButtonText | 确认按钮的文案 | `string`  |  `确认` |   |
| cancelButtonText | 取消按钮的文案 | `string`  | `取消` |   |
