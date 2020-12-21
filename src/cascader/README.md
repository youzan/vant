# Cascader

### Install

```js
import { createApp } from 'vue';
import { Cascader } from 'vant';

const app = createApp();
app.use(Cascader);
```

## Usage

### Basic Usage

```html
<van-field
  v-model="state.fieldValue"
  is-link
  readonly
  label="Area"
  placeholder="Select Area"
  @click="state.show = true"
/>
<van-popup v-model="state.show" round position="bottom">
  <van-cascader
    v-model="state.cascaderValue"
    title="Select Area"
    :options="options"
    @close="state.show = false"
    @finish="onFinish"
  />
</van-popup>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      show: false,
      fieldValue: '',
      cascaderValue: '',
    });
    const options = [
      {
        text: 'Zhejiang',
        value: '330000',
        children: [{ text: 'Hangzhou', value: '330100' }],
      },
      {
        text: 'Jiangsu',
        value: '320000',
        children: [{ text: 'Nanjing', value: '320100' }],
      },
    ];
    const onFinish = ({ selectedOptions }) => {
      state.show = false;
      state.fieldValue = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      state,
      options,
      onFinish,
    };
  },
};
```

### Custom Color

```html
<van-cascader
  v-model="state.cascaderValue"
  title="Select Area"
  :options="options"
  active-color="#1989fa"
  @close="state.show = false"
  @finish="onFinish"
/>
```

### Async Options

```html
<van-field
  v-model="state.fieldValue"
  is-link
  readonly
  label="Area"
  placeholder="Select Area"
  @click="state.show = true"
/>
<van-popup v-model="state.show" round position="bottom">
  <van-cascader
    v-model="state.cascaderValue"
    title="Select Area"
    :options="state.options"
    @close="state.show = false"
    @change="onChange"
    @finish="onFinish"
  />
</van-popup>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      show: false,
      fieldValue: '',
      cascaderValue: '',
      options: [
        {
          text: 'Zhejiang',
          value: '330000',
          children: [],
        },
      ],
    });
    const onChange = ({ value }) => {
      if (value === state.options[0].value) {
        setTimeout(() => {
          state.options[0].children = [
            { text: 'Hangzhou', value: '330100' },
            { text: 'Ningbo', value: '330200' },
          ];
        }, 500);
      }
    };
    const onFinish = ({ selectedOptions }) => {
      state.show = false;
      state.fieldValue = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      state,
      onChange,
      onFinish,
    };
  },
};
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| value | Value of selected option | _string \| number_ | - |
| options | Options | _Option[]_ | `[]` |
| placeholder | Placeholder of unselected tab | _string_ | `Select` |
| active-color | Active color | _string_ | `#ee0a24` |
| closeable | Whether to show close icon | _boolean_ | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when active option changed | `{ value, selectedOptions, tabIndex }` |
| finish | Emitted when all options is selected | `{ value, selectedOptions, tabIndex }` |
| close | Emmitted when the close icon is clicked | - |

### Slots

| Name  | Description  |
| ----- | ------------ |
| title | Custom title |

### Less Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                              | Default Value   | Description |
| --------------------------------- | --------------- | ----------- |
| @cascader-header-height           | `48px`          | -           |
| @cascader-title-font-size         | `@font-size-lg` | -           |
| @cascader-title-line-height       | `20px`          | -           |
| @cascader-close-icon-size         | `22px`          | -           |
| @cascader-close-icon-color        | `@gray-5`       | -           |
| @cascader-close-icon-active-color | `@gray-6`       | -           |
| @cascader-selected-icon-size      | `18px`          | -           |
| @cascader-tabs-height             | `48px`          | -           |
| @cascader-active-color            | `@red`          | -           |
| @cascader-options-height          | `384px`         | -           |
| @cascader-tab-color               | `@text-color`   | -           |
| @cascader-unselected-tab-color    | `@gray-6`       | -           |
