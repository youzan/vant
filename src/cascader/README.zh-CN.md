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
  is-link
  readonly
  label="地区"
  :value="fieldValue"
  placeholder="请选择地区"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
    v-model="cascaderValue"
    title="请选择地区"
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
    onFinish(params) {
      const { selectedOptions } = params;
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
  title="请选择地区"
  active-color="#1989fa"
  @close="show = false"
  @finish="onFinish"
/>
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
