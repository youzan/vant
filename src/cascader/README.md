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
  is-link
  readonly
  label="Area"
  :value="fieldValue"
  placeholder="Select Area"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="Select Area"
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
    onFinish(params) {
      const { selectedOptions } = params;
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
  active-color="#1989fa"
  @close="show = false"
  @finish="onFinish"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| value | Values of selected options | _string \| number_ | - |
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
