<style>
@component-namespace demo {
  @b toast {
    .zan-button {
      margin: 15px;
    }
  }
}
</style>

<script>
import { Toast } from 'src/index';

export default {
  methods: {
    showSimpleToast() {
      Toast('我是提示文案，建议不超过十五字~');
    },
    showLoadingToast() {
      Toast.loading();
    },
    showSuccessToast() {
      Toast.success('成功文案');
    },
    showFailToast() {
      Toast.fail('失败文案');
    },
    showCustomizedToast(duration) {
      let leftSec = duration / 1000;
      let toast = Toast({
        duration: duration + 1000,
        type: 'success',
        message: leftSec.toString()
      });
      window.setInterval(() => {
        if (leftSec <= 1) {
          window.clearInterval();
          toast.message = '跳转中...'
          return;
        }
        toast.message = (--leftSec).toString();
      }, 1000);
    }
  }
};
</script>

## Toast

### 基础用法

:::demo 基础用法
```html
<zan-button @click="showSimpleToast">普通文字提示</zan-button>
<zan-button @click="showLoadingToast">加载Toast</zan-button>
<zan-button @click="showSuccessToast">成功</zan-button>
<zan-button @click="showFailToast">失败</zan-button>
<zan-button @click="showCustomizedToast(5000)">倒数5秒</zan-button>

<script>
import { Toast } from 'src/index';

export default {
  methods: {
    showSimpleToast() {
      Toast('我是提示文案，建议不超过十五字~');
    },
    showLoadingToast() {
      Toast.loading();
    },
    showSuccessToast() {
      Toast.success('成功文案');
    },
    showFailToast() {
      Toast.fail('失败文案');
    },
    showCustomizedToast(duration) {
      let leftSec = duration / 1000;
      let toast = Toast({
        duration: duration + 1000,
        type: 'success',
        message: leftSec.toString()
      });
      window.setInterval(() => {
        if (leftSec <= 1) {
          window.clearInterval();
          toast.message = '跳转中...'
          return;
        }
        toast.message = (--leftSec).toString();
      }, 1000);
    }
  }
};
</script>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| type | 类型 | String  | 'text' | 'text', 'loading', 'success', 'failure'  |
| message | 内容 | String  | '' | - |
