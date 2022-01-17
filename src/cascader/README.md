# Cascader

### Install

```js
import Vue from 'vue';
import { Cascader } from 'vant';

Vue.use(Cascader);
```

## Usage

### Basic Usage

```html
<van-field
  v-model="fieldValue"
  is-link
  readonly
  label="Area"
  placeholder="Select Area"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="Select Area"
    :options="options"
    @close="show = false"
    @finish="onFinish"
  />
</van-popup>
```

```js
export default {
  data() {
    return {
      show: false,
      fieldValue: '',
      cascaderValue: '',
      options: [
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
      ],
    };
  },
  methods: {
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
  },
};
```

### Custom Color

```html
<van-cascader
  v-model="cascaderValue"
  title="Select Area"
  :options="options"
  active-color="#1989fa"
  @close="show = false"
  @finish="onFinish"
/>
```

### Async Options

```html
<van-field
  v-model="fieldValue"
  is-link
  readonly
  label="Area"
  placeholder="Select Area"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="Select Area"
    :options="options"
    @close="show = false"
    @change="onChange"
    @finish="onFinish"
  />
</van-popup>
```

```js
export default {
  data() {
    return {
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
    };
  },
  methods: {
    onChange({ value }) {
      if (value === this.options[0].value) {
        setTimeout(() => {
          this.options[0].children = [
            { text: 'Hangzhou', value: '330100' },
            { text: 'Ningbo', value: '330200' },
          ];
        }, 500);
      }
    },
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
  },
};
```

### Custom Field Names

```html
<van-cascader
  v-model="cascaderValue"
  title="Select Area"
  :options="options"
  :field-names="fieldNames"
/>
```

```js
export default {
  data() {
    return {
      cascaderValue: '',
      fieldNames: {
        text: 'name',
        value: 'code',
        children: 'items',
      },
      options: [
        {
          name: 'Zhejiang',
          code: '330000',
          items: [{ name: 'Hangzhou', code: '330100' }],
        },
        {
          name: 'Jiangsu',
          code: '320000',
          items: [{ name: 'Nanjing', code: '320100' }],
        },
      ],
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
| show-header `v2.12.40` | Whether to show header | _boolean_ | `true` |
| field-names `v2.12.4` | Custom the fields of options | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when active option changed | `{ value, selectedOptions, tabIndex }` |
| finish | Emitted when all options is selected | `{ value, selectedOptions, tabIndex }` |
| close | Emitted when the close icon is clicked | - |

### Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| title | Custom title | - |
| option `v2.12.25` | Custom option text | _{ option: Option, selected: boolean }_ |

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
