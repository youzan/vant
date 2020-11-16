# Popover 气泡弹出框

### 介绍

### 引入

```js
import Vue from 'vue';
import { Popover } from 'vant';

Vue.use(Popover);
```

## 代码演示

### 基础用法

```html

```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否展示气泡弹出层 | _boolean_ | `false` |
| actions | 选项列表 | _Action[]_ | `[]` |
| placement | 弹出位置 | _string_ | - |
| theme | 主题风格，可选值为 `light` | _string_ | `dark` |
| text-color | 自定义文字颜色 | _string_ | - |
| background-color | 自定义背景颜色 | _string_ | - |
| overlay | 是否显示遮罩层 | _boolean_ | `false` |
| close-on-click-action | 是否在点击选项后关闭 | _boolean_ | `false` |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |
| get-container `v2.4.4` | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| () => Element_ | - |

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型     |
| --------- | ------------------------ | -------- |
| text      | 文字内容                 | _string_ |
| className | 为对应选项添加额外的类名 | _any_    |

### placement 可选值

top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom

### Events

| 事件名 | 说明                     | 回调参数                        |
| ------ | ------------------------ | ------------------------------- |
| select | 点击选项时触发           | _action: Action, index: number_ |
| open   | 打开菜单时触发           | -                               |
| close  | 关闭菜单时触发           | -                               |
| opened | 打开菜单且动画结束后触发 | -                               |
| closed | 关闭菜单且动画结束后触发 | -                               |

### Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 自定义菜单的展示内容 |
