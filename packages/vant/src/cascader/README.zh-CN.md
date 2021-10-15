# Cascader 级联选择

### 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

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
  v-model="fieldValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="show = true"
/>
<van-popup v-model:show="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="请选择所在地区"
    :options="options"
    @close="show = false"
    @finish="onFinish"
  />
</van-popup>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
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
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
```

### 自定义颜色

通过 `active-color` 属性来设置选中状态的高亮颜色。

```html
<van-cascader
  v-model="cascaderValue"
  title="请选择所在地区"
  :options="options"
  active-color="#1989fa"
  @close="show = false"
  @finish="onFinish"
/>
```

### 异步加载选项

可以监听 `change` 事件并动态设置 `options`，实现异步加载选项。

```html
<van-field
  v-model="fieldValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="show = true"
/>
<van-popup v-model:show="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="请选择所在地区"
    :options="options"
    @close="show = false"
    @change="onChange"
    @finish="onFinish"
  />
</van-popup>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    const options = ref([
      {
        text: '浙江省',
        value: '330000',
        children: [],
      },
    ]);
    const onChange = ({ value }) => {
      if (value === options.value[0].value) {
        setTimeout(() => {
          options.value[0].children = [
            { text: '杭州市', value: '330100' },
            { text: '宁波市', value: '330200' },
          ];
        }, 500);
      }
    };
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
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
| swipeable `v3.0.11` | 是否开启手势左右滑动切换 | _boolean_ | `false` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| close-icon `v3.0.10` | 关闭[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `cross` |
| field-names `v3.0.4` | 自定义 `options` 结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Option 数据结构

`options` 属性是一个由对象构成的数组，数组中的每个对象配置一个可选项，对象可以包含以下值：

| 键名               | 说明                     | 类型                        |
| ------------------ | ------------------------ | --------------------------- |
| text               | 选项文字（必填）         | _string_                    |
| value              | 选项对应的值（必填）     | _string \| number_          |
| color `v3.1.0`     | 选项文字颜色             | _string_                    |
| children           | 子选项列表               | _Option[]_                  |
| disabled `v3.1.2`  | 是否禁用选项             | _boolean_                   |
| className `v3.1.0` | 为对应列添加额外的 class | _string \| Array \| object_ |

### Events

| 事件      | 说明                   | 回调参数                               |
| --------- | ---------------------- | -------------------------------------- |
| change    | 选中项变化时触发       | `{ value, selectedOptions, tabIndex }` |
| finish    | 全部选项选择完成后触发 | `{ value, selectedOptions, tabIndex }` |
| close     | 点击关闭图标时触发     | -                                      |
| click-tab | 点击标签时触发         | _tabIndex: number, title: string_      |

### Slots

| 名称            | 说明           | 参数                                    |
| --------------- | -------------- | --------------------------------------- |
| title           | 自定义顶部标题 | -                                       |
| option `v3.1.4` | 自定义选项文字 | _{ option: Option, selected: boolean }_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { CascaderProps, CascaderOption, CascaderFieldNames } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                   | 默认值                    | 描述 |
| -------------------------------------- | ------------------------- | ---- |
| --van-cascader-header-height           | _48px_                    | -    |
| --van-cascader-header-padding          | _0 var(--van-padding-md)_ | -    |
| --van-cascader-title-font-size         | _var(--van-font-size-lg)_ | -    |
| --van-cascader-title-line-height       | _20px_                    | -    |
| --van-cascader-close-icon-size         | _22px_                    | -    |
| --van-cascader-close-icon-color        | _var(--van-gray-5)_       | -    |
| --van-cascader-close-icon-active-color | _var(--van-gray-6)_       | -    |
| --van-cascader-selected-icon-size      | _18px_                    | -    |
| --van-cascader-tabs-height             | _48px_                    | -    |
| --van-cascader-active-color            | _var(--van-danger-color)_ | -    |
| --van-cascader-options-height          | _384px_                   | -    |
| --van-cascader-option-disabled-color   | _van(--van-gray-5)_       | -    |
| --van-cascader-tab-color               | _var(--van-text-color)_   | -    |
| --van-cascader-unselected-tab-color    | _var(--van-gray-6)_       | -    |
