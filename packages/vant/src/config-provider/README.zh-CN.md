# ConfigProvider 全局配置

### 介绍

用于全局配置 Vant 组件，提供深色模式、主题定制等能力。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { ConfigProvider } from 'vant';

const app = createApp();
app.use(ConfigProvider);
```

## 深色模式

### 开启深色模式

将 ConfigProvider 组件的 `theme` 属性设置为 `dark`，可以开启深色模式。

深色模式会全局生效，使页面上的所有 Vant 组件变为深色风格。

```html
<van-config-provider theme="dark">...</van-config-provider>
```

值得注意的是，开启 Vant 的深色模式只会影响 Vant 组件的 UI，并不会影响全局的文字颜色或背景颜色，你可以参考以下 CSS 来设置一些全局样式：

```css
.van-theme-dark body {
  color: #f5f5f5;
  background-color: black;
}
```

### 动态切换

通过动态设置 `theme` 属性，可以在浅色风格和深色风格之间进行切换。

```html
<van-config-provider :theme="theme">...</van-config-provider>
```

```js
export default {
  setup() {
    const theme = ref('light');

    setTimeout(() => {
      theme.value = 'dark';
    }, 1000);

    return { theme };
  },
};
```

## 定制主题

### 介绍

Vant 组件通过丰富的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现**定制主题、动态切换主题**等效果。

#### 示例

以 Button 组件为例，查看组件的样式，可以看到 `.van-button--primary` 类名上存在以下变量：

```css
.van-button--primary {
  color: var(--van-button-primary-color);
  background-color: var(--van-button-primary-background);
}
```

这些变量的默认值被定义在 `:root` 节点上，HTML 里的所有子节点都可以访问到这些变量：

```css
:root {
  --van-white: #fff;
  --van-blue: #1989fa;
  --van-button-primary-color: var(--van-white);
  --van-button-primary-background: var(--van-primary-color);
}
```

### 自定义 CSS 变量

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```css
/* 添加这段样式后，Primary Button 会变成红色 */
:root:root {
  --van-button-primary-background: red;
}
```

> 注意：为什么要写两个重复的 `:root`？
>
> 由于 vant 中的主题变量也是在 `:root` 下声明的，所以在有些情况下会由于优先级的问题无法成功覆盖。通过 `:root:root` 可以显式地让你所写内容的优先级更高一些，从而确保主题变量的成功覆盖。

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
import { ref, reactive } from 'vue';

export default {
  setup() {
    const rate = ref(4);
    const slider = ref(50);

    // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
    const themeVars = reactive({
      rateIconFullColor: '#07c160',
      sliderBarHeight: '4px',
      sliderButtonWidth: '20px',
      sliderButtonHeight: '20px',
      sliderActiveBackground: '#07c160',
      buttonPrimaryBackground: '#07c160',
      buttonPrimaryBorderColor: '#07c160',
    });

    return {
      rate,
      slider,
      themeVars,
    };
  },
};
```

#### CSS 变量生效范围

默认情况下，themeVars 产生的 CSS 变量是设置在组件根节点上的，因此只会影响它的子组件的样式，不会影响整个页面。

你可以通过 `theme-vars-scope` 属性来修改 CSS 变量的生效范围。比如将 `theme-vars-scope` 设置为 `global`，此时 themeVars 产生的 CSS 变量会设置到 HTML 的根节点，并对整个页面内的所有组件生效。

```html
<van-config-provider :theme-vars="themeVars" theme-vars-scope="global">
  ...
</van-config-provider>
```

#### 在 TypeScript 中使用

在 TypeScript 中定义 themeVars 时，建议使用 Vant 提供的 `ConfigProviderThemeVars` 类型，可以提供完善的类型提示：

```ts
import type { ConfigProviderThemeVars } from 'vant';

const themeVars: ConfigProviderThemeVars = {
  sliderBarHeight: '4px',
};
```

### 结合深色模式与 CSS 变量

如果需要单独定义深色模式或浅色模式下的 CSS 变量，可以使用 `theme-vars-dark` 和 `theme-vars-light` 属性。

- `theme-vars-dark`: 仅在深色模式下生效的 CSS 变量，优先级高于 `theme-vars` 中定义的变量。
- `theme-vars-light`: 仅在浅色模式下生效的 CSS 变量，优先级高于 `theme-vars` 中定义的变量。

#### 示例

以下方的 `buttonPrimaryBackground` 变量为例, 在深色模式下的值为 `blue`，在浅色模式下的值为 `green`。

```html
<van-config-provider
  :theme-vars="themeVars"
  :theme-vars-dark="themeVarsDark"
  :theme-vars-light="themeVarsLight"
>
  ...
</van-config-provider>
```

```js
import { ref, reactive } from 'vue';

export default {
  setup() {
    const themeVars = reactive({ buttonPrimaryBackground: 'red' });
    const themeVarsDark = reactive({ buttonPrimaryBackground: 'blue' });
    const themeVarsLight = reactive({ buttonPrimaryBackground: 'green' });

    return {
      themeVars,
      themeVarsDark,
      themeVarsLight,
    };
  },
};
```

#### 使用类名

此外，你也可以使用 `.van-theme-light` 和 `.van-theme-dark` 这两个类名选择器来单独修改浅色或深色模式下的基础变量和组件变量。

```css
.van-theme-light {
  --van-white: white;
}

.van-theme-dark {
  --van-white: black;
}
```

## 主题变量

### 变量类型

Vant 中的 CSS 变量分为 **基础变量** 和 **组件变量**。组件变量会继承基础变量，因此在修改基础变量后，会影响所有相关的组件。

#### 修改变量

CSS 变量存在继承关系，组件变量会寻找最近的父级基础变量进行继承。

因此修改基础变量存在一定限制，你需要使用 `:root` 选择器或 ConfigProvider 组件的 global 模式来修改基础变量。否则，组件变量可能会无法正确继承基础变量。

以 `--van-primary-color` 这个基础变量为例：

- 可以通过 `:root` 选择器修改：

```css
:root {
  --van-primary-color: red;
}
```

- 可以通过 ConfigProvider 组件的 global 模式修改：

```html
<van-config-provider
  :theme-vars="{ primaryColor: 'red' }"
  theme-vars-scope="global"
>
  ...
</van-config-provider>
```

- 不可以通过 ConfigProvider 组件默认的 `local` 模式修改：

```html
<van-config-provider :theme-vars="{ primaryColor: 'red' }">
  ...
</van-config-provider>
```

对于组件变量，则没有上述限制，可以通过任意方式修改。

### 基础变量列表

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
--van-text-color-2: var(--van-gray-6);
--van-text-color-3: var(--van-gray-5);
--van-active-color: var(--van-gray-2);
--van-active-opacity: 0.6;
--van-disabled-opacity: 0.5;
--van-background: var(--van-gray-1);
--van-background-2: var(--van-white);

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
--van-font-bold: 600;
--van-line-height-xs: 14px;
--van-line-height-sm: 18px;
--van-line-height-md: 20px;
--van-line-height-lg: 22px;
--van-base-font: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
  Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei',
  sans-serif;
--van-price-font: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;

// Animation
--van-duration-base: 0.3s;
--van-duration-fast: 0.2s;
--van-ease-out: ease-out;
--van-ease-in: ease-in;

// Border
--van-border-color: var(--van-gray-3);
--van-border-width: 1px;
--van-radius-sm: 2px;
--van-radius-md: 4px;
--van-radius-lg: 8px;
--van-radius-max: 999px;
```

你可以在各个组件文档底部的表格中查看组件变量。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 主题风格，设置为 `dark` 来开启深色模式，全局生效 | _ConfigProviderTheme_ | `light` |
| theme-vars | 自定义主题变量，局部生效 | _object_ | - |
| theme-vars-dark | 仅在深色模式下生效的主题变量，优先级高于 `theme-vars` | _object_ | - |
| theme-vars-light | 仅在浅色模式下生效的主题变量，优先级高于 `theme-vars` | _object_ | - |
| theme-vars-scope | 默认仅影响子组件的样式，设置为 `global` 整个页面生效 | _ConfigProviderThemeVarsScope_ | `local` |
| tag | 根节点对应的 HTML 标签名 | _string_ | `div` |
| z-index | 设置所有弹窗类组件的 z-index，该属性对全局生效 | _number_ | `2000` |
| icon-prefix | 所有图标的类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  ConfigProviderProps,
  ConfigProviderTheme,
  ConfigProviderThemeVars,
  ConfigProviderThemeVarsScope,
} from 'vant';
```
