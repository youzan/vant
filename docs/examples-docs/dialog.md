<style>
@component-namespace demo {
  @b dialog {
    .zan-button {
      margin: 15px;
    }
  }
}
</style>

<script>
import { Dialog } from 'src/index';
import MobileComputed from 'components/mobile-computed';

export default {
  mixins: [MobileComputed],

  methods: {
    handleAlertClick() {
      Dialog.alert({
        title: 'alert标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
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
import { Dialog } from '@youzan/zanui-vue';
```

### 代码演示

#### 基础用法

:::demo 基础用法
```html
<zan-button @click="handleAlertClick">alert</zan-button>

<zan-button @click="handleConfirmClick">confirm</zan-button>

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

点击以下按钮查看手机端效果：

<zan-button @click="mobileShow = true">点击查看手机端效果</zan-button>
<mobile-popup v-model="mobileShow" :url="mobileUrl"></mobile-popup>


### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `string`  |  |   |
| message | 内容 | `string`  |  |   |
