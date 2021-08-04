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

## 定制主题

### 介绍

Vant 组件通过丰富的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现**定制主题、动态切换主题**等效果。

#### 示例

以 Button 组件为例，查看组件的样式，可以看到 `.van-button--primary` 类名上存在以下变量：

```css
.van-button--primary {
  color: var(--van-button-primary-color);
  background-color: var(--van-button-primary-background-color);
}
```

这些变量的默认值被定义在 `root` 节点上，HTML 文档的任何节点都可以访问到这些变量：

```css
:root {
  --van-white: #fff;
  --van-blue: #1989fa;
  --van-button-primary-color: var(--van-white);
  --van-button-primary-background-color: var(--van-primary-color);
}
```

### 自定义 CSS 变量

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```css
/* 添加这段样式后，Primary Button 会变成红色 */
:root {
  --van-button-primary-background-color: red;
}
```

#### 通过 ConfigProvider 覆盖

`ConfigProvider` 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 `ConfigProvider` 组件，并通过 `theme-vars` 属性来配置一些主题变量。

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

    // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
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
    };
  },
};
```

> 注意：ConfigProvider 仅影响它的子组件的样式，不影响全局 root 节点。

### 基础变量

Vant 中的 CSS 变量分为 **基础变量** 和 **组件变量**。组件变量会继承基础变量，因此在修改基础变量后，会影响所有相关的组件。

#### 修改变量

由于 CSS 变量继承机制的原因， 两者的修改方式有一定差异：

- 基础变量只能通过 `root 选择器` 修改，不能通过 `ConfigProvider 组件` 修改。
- 组件变量可以通过 `root 选择器` 和 `ConfigProvider 组件` 修改。

#### 变量列表

下面是所有的基础变量：

```less
// Color Palette
--van-black: #000;
--van-white: #fff;
--van-gray-1: #f7f8fa;
--van-gray-2: #f2f3f5;
--van-gray-3: #ebedf0;
--van-gray-4: #dcdee0;
--van-gray-5: #c8c9cc;
--van-gray-6: #969799;
--van-gray-7: #646566;
--van-gray-8: #323233;
--van-red: #ee0a24;
--van-blue: #1989fa;
--van-orange: #ff976a;
--van-orange-dark: #ed6a0c;
--van-orange-light: #fffbe8;
--van-green: #07c160;

// Gradient Colors
--van-gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
--van-gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
--van-primary-color: var(--van-blue);
--van-success-color: var(--van-green);
--van-danger-color: var(--van-red);
--van-warning-color: var(--van-orange);
--van-text-color: var(--van-gray-8);
--van-active-color: var(--van-gray-2);
--van-active-opacity: 0.7;
--van-disabled-opacity: 0.5;
--van-background-color: var(--van-gray-1);
--van-background-color-light: #fafafa;
--van-text-link-color: #576b95;

// Padding
--van-padding-base: 4px;
--van-padding-xs: 8px;
--van-padding-sm: 12px;
--van-padding-md: 16px;
--van-padding-lg: 24px;
--van-padding-xl: 32px;

// Font
--van-font-size-xs: 10px;
--van-font-size-sm: 12px;
--van-font-size-md: 14px;
--van-font-size-lg: 16px;
--van-font-weight-bold: 500;
--van-line-height-xs: 14px;
--van-line-height-sm: 18px;
--van-line-height-md: 20px;
--van-line-height-lg: 22px;
--van-base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
  Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB',
  'Microsoft Yahei', sans-serif;
--van-price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue,
  Arial, sans-serif;

// Animation
--van-animation-duration-base: 0.3s;
--van-animation-duration-fast: 0.2s;
--van-animation-timing-function-enter: ease-out;
--van-animation-timing-function-leave: ease-in;

// Border
--van-border-color: var(--van-gray-3);
--van-border-width-base: 1px;
--van-border-radius-sm: 2px;
--van-border-radius-md: 4px;
--van-border-radius-lg: 8px;
--van-border-radius-max: 999px;
```

你可以在各个组件文档底部的表格中查看组件变量。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme-vars | 自定义主题变量 | _object_ | - |
| tag `v3.1.2` | 根节点对应的 HTML 标签名 | _string_ | `div` |
| icon-prefix `v3.1.3` | 所有图标的类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
