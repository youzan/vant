# ConfigProvider 全局配置

### 介绍

用于配置 Vant 组件的主题样式，从 3.1.0 版本开始支持。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { ConfigProvider } from 'vant';

const app = createApp();
app.use(ConfigProvider);
```

## 代码演示

### 自定义主题

通过 `theme-vars` 属性来自定义主题变量。

```html
<van-config-provider :theme-vars="themeVars">
  <van-form>
    <van-field name="rate" label="评分">
      <template #input>
        <van-rate v-model="rate" />
      </template>
    </van-field>
    <van-field name="slider" label="滑块">
      <template #input>
        <van-slider v-model="slider" />
      </template>
    </van-field>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</van-config-provider>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const rate = ref(4);
    const slider = ref(50);
    const switchChecked = ref(true);

    const themeVars = {
      rateIconFullColor: '#07c160',
      sliderBarHeight: '4px',
      sliderButtonWidth: '20px',
      sliderButtonHeight: '20px',
      sliderActiveBackgroundColor: '#07c160',
      buttonPrimaryBorderColor: '#07c160',
      buttonPrimaryBackgroundColor: '#07c160',
    };

    return {
      rate,
      slider,
      themeVars,
      switchChecked,
    };
  },
};
```

## API

### Props

| 参数       | 说明           | 类型     | 默认值 |
| ---------- | -------------- | -------- | ------ |
| theme-vars | 自定义主题变量 | _object_ | -      |
