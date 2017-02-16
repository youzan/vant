<script>
import { Dialog } from 'src/index';

export default {
  methods: {
    handleAlertClick() {
      Dialog.alert({
        title: 'alert',
        message: 'alert message'
      });
    },

    handleConfirmClick() {
      Dialog.confirm({
        title: 'confirm',
        message: 'confirm message'
      });
    }
  }
};
</script>

## Dialog组件

### 基础用法

:::demo
```html
<o2-button @click="handleAlertClick">alert</o2-button>

<o2-button @click="handleConfirmClick">confirm</o2-button>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | String  | '' |   |
| message | 内容 | String  | '' |   |
