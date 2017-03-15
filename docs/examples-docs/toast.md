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
    showToast(type) {
      Toast({
        type: type,
        message: '文案信息'
      })
    }
  }
};
</script>

## Toast

### 基础用法

:::demo 基础用法
```html
<zan-button @click="showSimpleToast()">普通文字提示</zan-button>

<zan-button @click="showToast('loading')">加载Toast</zan-button>
<zan-button @click="showToast('success')">成功</zan-button>
<zan-button @click="showToast('failure')">失败</zan-button>

<script>
import { Toast } from 'src/index';

export default {
  methods: {
    showSimpleToast() {
      Toast('我是提示文案，建议不超过十五字~');
    },
    showToast(type) {
      Toast({
        type: type,
        message: '文案信息'
      })
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
