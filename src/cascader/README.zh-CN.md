# Cascader 级联选择

### 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择，2.9 版本开始支持此组件。

### 引入

```js
import Vue from 'vue';
import { Cascader } from 'vant';

Vue.use(Cascader);
```

## 代码演示

### 基础用法

```html
<van-cascader />
```

```js
export default {
  data() {
    return {
      show: false,
    };
  },
};
```

## API

### Props

| 参数         | 说明                 | 类型                  | 默认值    |
| ------------ | -------------------- | --------------------- | --------- |
| show.sync    | 是否显示级联选择弹窗 | _boolean_             | `false`   |
| title        | 顶部标题             | _string_              | -         |
| value        | 选中项的值           | `string[] | number[]` | -         |
| options      | 可选项数据源         | _Option[]_            | `[]`      |
| placeholder  | 未选中时的提示文案   | _string_              | `请选择`  |
| confirm-text | 确认按钮文字         | _string_              | `确认`    |
| active-color | 选中状态的高亮颜色   | _string_              | `#ee0a24` |

### Events

| 事件    | 说明             | 回调参数 |
| ------- | ---------------- | -------- |
| change  | 选中项变化时触发 | -        |
| confirm | 确认选择时触发   | -        |

### Slots

| 名称         | 说明           |
| ------------ | -------------- |
| title        | 自定义顶部标题 |
| confirm-text | 自定义确认按钮 |
