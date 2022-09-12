# ConfigProvider

### Intro

Used to configure Vant components globally, providing dark mode, theme customization and other capabilities.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { ConfigProvider } from 'vant';

const app = createApp();
app.use(ConfigProvider);
```

## Dark Mode

### Enable Dark Mode

Enabling dark mode by setting the `theme` prop of the ConfigProvider component to `dark`.

In takes effect globally, making all Vant components on the page dark.

```html
<van-config-provider theme="dark">...</van-config-provider>
```

The theme prop will not change the text-color or background-color of the page, you can set it manually like this:

```css
.van-theme-dark body {
  text-color: #f5f5f5;
  background-color: black;
}
```

> Tips: The theme prop will not change the background color of the page, you need to set it manually.

### Switch Theme

Switching between light and dark theme by dynamically setting the `theme` property.

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

## Custom Theme

### Intro

Vant organize component styles through [CSS Variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), you can custom themes by overriding these CSS Variables.

#### Demo

Looking at the style of the Button component, you can see that the following variables exist on the `.van-button--primary` class:

```css
.van-button--primary {
  color: var(--van-button-primary-color);
  background-color: var(--van-button-primary-background);
}
```

The default values of these variables are defined on the `:root` node:

```css
:root {
  --van-white: #fff;
  --van-blue: #1989fa;
  --van-button-primary-color: var(--van-white);
  --van-button-primary-background: var(--van-primary-color);
}
```

### Custom CSS Variables

#### Override by CSS

You can directly override these CSS variables in the code, and the style of the Button component will change accordingly:

```css
/* the Primary Button will turn red */
:root {
  --van-button-primary-background: red;
}
```

#### Override by ConfigProvider

The `ConfigProvider` component provides the ability to override CSS variables. You need to wrap a `ConfigProvider` component at the root node and configure some CSS variables through the `theme-vars` property.

```html
<van-config-provider :theme-vars="themeVars">
  <van-form>
    <van-field name="rate" label="Rate">
      <template #input>
        <van-rate v-model="rate" />
      </template>
    </van-field>
    <van-field name="slider" label="Slider">
      <template #input>
        <van-slider v-model="slider" />
      </template>
    </van-field>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        Submit
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

    // ThemeVars will be converted to the corresponding CSS variable
    // For example, sliderBarHeight will be converted to `--van-slider-bar-height`
    const themeVars = {
      rateIconFullColor: '#07c160',
      sliderBarHeight: '4px',
      sliderButtonWidth: '20px',
      sliderButtonHeight: '20px',
      sliderActiveBackground: '#07c160',
      buttonPrimaryBackground: '#07c160',
      buttonPrimaryBorderColor: '#07c160',
    };

    return {
      rate,
      slider,
      themeVars,
    };
  },
};
```

> Tips: ConfigProvider only affects its child components.

#### Use In TypeScript

Using `ConfigProviderThemeVars` type to get code intellisense.

```ts
import type { ConfigProviderThemeVars } from 'vant';

const themeVars: ConfigProviderThemeVars = {
  sliderBarHeight: '4px',
};
```

### Combining dark mode with CSS variables

If you need to define CSS variables for dark mode or light mode separately, you can use the `theme-vars-dark` and `theme-vars-light` props.

- `theme-vars-dark`: define CSS variables that only take effect in dark mode, will override the variables defined in `theme-vars`.
- `theme-vars-light`: define CSS variables that only take effect in light mode, will override the variables defined in `theme-vars`.

#### Example

Take the `buttonPrimaryBackground` variable below as an example, the value will be `blue` in dark mode, and `green` in light mode.

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
import { ref } from 'vue';

export default {
  setup() {
    const themeVars = { buttonPrimaryBackground: 'red' };
    const themeVarsDark = { buttonPrimaryBackground: 'blue' };
    const themeVarsLight = { buttonPrimaryBackground: 'green' };

    return {
      themeVars,
      themeVarsDark,
      themeVarsLight,
    };
  },
};
```

## Variables

### Basic Variables

CSS variables in Vant are divided into **basic variables** and **component variables**. Component variables will inherit the basic variables. After modifying the basic variables, all related components will be affected.

#### Modify Basic Variables

- The basic variables can only be modified through the `:root` selector.
- The component variables can be modified through the `:root` selector and `ConfigProvider` component.

You can also use the `.van-theme-light` and `.van-theme-dark` class selector to modify basic or component variables in light or dark mode individually.

#### Variables List

There are all **Basic Variables** below, for component CSS Variables, please refer to the documentation of each component.

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
--van-link-color: #576b95;
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

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| theme | Theme mode, can be set to `dark` | _ConfigProviderTheme_ | `light` |
| theme-vars | Theme variables | _object_ | - |
| theme-vars-dark | Theme variables that work in dark mode，will override `theme-vars` | _object_ | - |
| theme-vars-light | Theme variables that work in light mode, will override `theme-vars` | _object_ | - |
| z-index `v3.6.0` | Set the z-index of all popup components, this property takes effect globally | _number_ | `2000` |
| tag `v3.1.2` | HTML Tag of root element | _string_ | `div` |
| icon-prefix `v3.1.3` | Icon className prefix | _string_ | `van-icon` |

### Types

The component exports the following type definitions:

```ts
import type {
  ConfigProviderProps,
  ConfigProviderTheme,
  ConfigProviderThemeVars,
} from 'vant';
```
