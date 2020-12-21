# Cascader 级联选择

### 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择，2.12 版本开始支持此组件。

### 引入

```js
import Vue from 'vue';
import { Cascader } from 'vant';

Vue.use(Cascader);
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
<van-popup v-model="show" round position="bottom">
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
export default {
  data() {
    return {
      show: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
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
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
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
<van-popup v-model="show" round position="bottom">
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
export default {
  data() {
    return {
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
    };
  },
  methods: {
    onChange({ value }) {
      if (value === this.options[0].value) {
        setTimeout(() => {
          this.options[0].children = [
            { text: '杭州市', value: '330100' },
            { text: '宁波市', value: '330200' },
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

## API

### Props

| 参数         | 说明               | 类型               | 默认值    |
| ------------ | ------------------ | ------------------ | --------- |
| title        | 顶部标题           | _string_           | -         |
| value        | 选中项的值         | _string \| number_ | -         |
| options      | 可选项数据源       | _Option[]_         | `[]`      |
| placeholder  | 未选中时的提示文案 | _string_           | `请选择`  |
| active-color | 选中状态的高亮颜色 | _string_           | `#ee0a24` |
| closeable    | 是否显示关闭图标   | _boolean_          | `true`    |

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
