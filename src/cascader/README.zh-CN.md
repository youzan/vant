# Cascader 级联选择

### 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择。

### 引入

```js
import { createApp } from 'vue';
import { Cascader } from 'vant';

const app = createApp();
app.use(Cascader);
```

## 代码演示

### 基础用法

级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：

```html
<van-field
  v-model="state.fieldValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="state.show = true"
/>
<van-popup v-model:show="state.show" round position="bottom">
  <van-cascader
    v-model="state.cascaderValue"
    title="请选择所在地区"
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
    // 选项列表，children 代表子选项，支持多级嵌套
    const options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }],
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }],
      },
    ];
    // 全部选项选择完毕后，会触发 finish 事件
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

### 自定义颜色

通过 `active-color` 属性来设置选中状态的高亮颜色。

```html
<van-cascader
  v-model="state.cascaderValue"
  title="请选择所在地区"
  :options="options"
  active-color="#1989fa"
  @close="state.show = false"
  @finish="onFinish"
/>
```

### 异步加载选项

可以监听 `change` 事件并动态设置 `options`，实现异步加载选项。

```html
<van-field
  v-model="state.fieldValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="state.show = true"
/>
<van-popup v-model:show="state.show" round position="bottom">
  <van-cascader
    v-model="state.cascaderValue"
    title="请选择所在地区"
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
          text: '浙江省',
          value: '330000',
          children: [],
        },
      ],
    });
    const onChange = ({ value }) => {
      if (value === state.options[0].value) {
        setTimeout(() => {
          state.options[0].children = [
            { text: '杭州市', value: '330100' },
            { text: '宁波市', value: '330200' },
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

### 自定义字段名

通过 `field-names` 属性可以自定义 `options` 里的字段名称。

```html
<van-cascader
  v-model="code"
  title="请选择所在地区"
  :options="options"
  :field-names="fieldNames"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const code = ref('');
    const fieldNames = {
      text: 'name',
      value: 'code',
      children: 'items',
    };
    const options = [
      {
        name: '浙江省',
        code: '330000',
        items: [{ name: '杭州市', code: '330100' }],
      },
      {
        name: '江苏省',
        code: '320000',
        items: [{ name: '南京市', code: '320100' }],
      },
    ];

    return {
      code,
      options,
      fieldNames,
    };
  },
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 顶部标题 | _string_ | - |
| value | 选中项的值 | _string \| number_ | - |
| options | 可选项数据源 | _Option[]_ | `[]` |
| placeholder | 未选中时的提示文案 | _string_ | `请选择` |
| active-color | 选中状态的高亮颜色 | _string_ | `#ee0a24` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| field-names `v3.0.4` | 自定义 `options` 结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Events

| 事件   | 说明                   | 回调参数                               |
| ------ | ---------------------- | -------------------------------------- |
| change | 选中项变化时触发       | `{ value, selectedOptions, tabIndex }` |
| finish | 全部选项选择完成后触发 | `{ value, selectedOptions, tabIndex }` |
| close  | 点击关闭图标时触发     | -                                      |

### Slots

| 名称  | 说明           |
| ----- | -------------- |
| title | 自定义顶部标题 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                              | 默认值          | 描述 |
| --------------------------------- | --------------- | ---- |
| @cascader-header-height           | `48px`          | -    |
| @cascader-title-font-size         | `@font-size-lg` | -    |
| @cascader-title-line-height       | `20px`          | -    |
| @cascader-close-icon-size         | `22px`          | -    |
| @cascader-close-icon-color        | `@gray-5`       | -    |
| @cascader-close-icon-active-color | `@gray-6`       | -    |
| @cascader-selected-icon-size      | `18px`          | -    |
| @cascader-tabs-height             | `48px`          | -    |
| @cascader-active-color            | `@red`          | -    |
| @cascader-options-height          | `384px`         | -    |
| @cascader-tab-color               | `@text-color`   | -    |
| @cascader-unselected-tab-color    | `@gray-6`       | -    |
