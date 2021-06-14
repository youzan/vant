# ConfigProvider

### Intro

Used to config the theme of Vant components.

### Install

Register component globally via `app.use`, refer to [Component Registration](#/en-US/advanced-usage#zu-jian-zhu-ce) for more registration ways.

```js
import { createApp } from 'vue';
import { ConfigProvider } from 'vant';

const app = createApp();
app.use(ConfigProvider);
```

## Custom Theme

### CSS Variables

Vant organize component styles through [CSS Variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), you can custom themes by overriding these CSS Variables.

#### Demo

Looking at the style of the Button component, you can see that the following variables exist on the `.van-button--primary` class:

```css
.van-button--primary {
  color: var(--van-button-primary-color);
  background-color: var(--van-button-primary-background-color);
}
```

The default values of these variables are defined on the `root` node:

```css
:root {
  --van-white: #fff;
  --van-blue: #1989fa;
  --van-button-primary-color: var(--van-white);
  --van-button-primary-background-color: var(--van-blue);
}
```

### Custom CSS Variables

#### Override by CSS

You can directly override these CSS variables in the code, and the style of the Button component will change accordingly:

```css
/* the Primary Button will turn red */
:root {
  --van-button-primary-background-color: red;
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

## API

### Props

| Attribute  | Description     | Type     | Default |
| ---------- | --------------- | -------- | ------- |
| theme-vars | Theme variables | _object_ | -       |
