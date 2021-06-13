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

## Usage

### Custom Theme

Use `theme-vars` prop to custom theme variables。

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

| Attribute  | Description     | Type     | Default |
| ---------- | --------------- | -------- | ------- |
| theme-vars | Theme variables | _object_ | -       |
