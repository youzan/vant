# DropdownMenu 下拉菜单

### 引入

```js
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);
```

## 代码演示

### 基础用法

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    };
  },
};
```

### 自定义菜单内容

通过插槽可以自定义`DropdownItem`的内容，此时需要使用实例上的`toggle`方法手动控制菜单的显示

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value" :options="option" />
  <van-dropdown-item title="筛选" ref="item">
    <van-switch-cell v-model="switch1" title="包邮" />
    <van-switch-cell v-model="switch2" title="团购" />
    <van-button block type="info" @click="onConfirm">确认</van-button>
  </van-dropdown-item>
</van-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
};
```

### 自定义选中态颜色

通过`active-color`属性可以自定义菜单标题和选项的选中态颜色

```html
<van-dropdown-menu active-color="#ee0a24">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

### 向上展开

将`direction`属性值设置为`up`，菜单即可向上展开

```html
<van-dropdown-menu direction="up">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

### 禁用菜单

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" disabled :options="option1" />
  <van-dropdown-item v-model="value2" disabled :options="option2" />
</van-dropdown-menu>
```

## API

### DropdownMenu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active-color | 菜单标题和选项的选中态颜色 | _string_ | `#1989fa` |
| direction `v2.0.1` | 菜单展开方向，可选值为`up` | _string_ | `down` |
| z-index | 菜单栏 z-index 层级 | _number \| string_ | `10` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.2` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| close-on-click-outside `v2.0.7` | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |

### DropdownItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项对应的 value，可以通过`v-model`双向绑定 | _number \| string_ | - |
| title | 菜单项标题 | _string_ | 当前选中项文字 |
| options | 选项数组 | _Option[]_ | `[]` |
| disabled | 是否禁用菜单 | _boolean_ | `false` |
| lazy-render `v2.8.5` | 是否在首次展开时才渲染菜单内容 | _boolean_ | `true` |
| title-class | 标题额外类名 | _string_ | - |
| get-container `v2.2.4` | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| () => Element_ | - |

### DropdownItem Events

| 事件名 | 说明                          | 回调参数 |
| ------ | ----------------------------- | -------- |
| change | 点击选项导致 value 变化时触发 | value    |
| open   | 打开菜单栏时触发              | -        |
| close  | 关闭菜单栏时触发              | -        |
| opened | 打开菜单栏且动画结束后触发    | -        |
| closed | 关闭菜单栏且动画结束后触发    | -        |

### DropdownItem Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| default | 菜单内容                   |
| title   | 自定义标题，不支持动态渲染 |

### DropdownItem 方法

通过 ref 可以获取到 DropdownItem 实例并调用实例方法，详见[组件实例方法](#/zh-CN/quickstart#zu-jian-shi-li-fang-fa)

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| toggle | 切换菜单展示状态，传`true`为显示，`false`为隐藏，不传参为取反 | show?: boolean | - |

### Option 数据结构

| 键名  | 说明                                   | 类型               |
| ----- | -------------------------------------- | ------------------ |
| text  | 文字                                   | _string_           |
| value | 标识符                                 | _number \| string_ |
| icon  | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_           |
