# DropdownMenu 下拉菜单

### 引入

``` javascript
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);
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
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ]
    }
  }
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
        { text: '活动商品', value: 2 }
      ]
    }
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
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

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| active-color | 菜单标题和选项的选中态颜色 | `String` | `#1989fa` | - |
| z-index | 菜单栏 z-index 层级 | `Number` | `10` | - |
| duration | 动画时长，单位秒 | `Number` | `0.2` | 2.0.0 |
| overlay | 是否显示遮罩层 | `Boolean` | `true` | - |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | `Boolean` | `true` | - |

### DropdownItem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| value | 当前选中项对应的 value，可以通过`v-model`双向绑定 | `String | Number` | - | - |
| title | 菜单项标题 | `String` | 当前选中项文字 | - |
| options | 选项数组 | `Array` | `[]` | - |
| disabled | 是否禁用菜单 | `Boolean` | `false` | - |
| title-class | 标题额外类名 | `String` | - | - |

### DropdownItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 点击选项导致 value 变化时触发 | value |
| open | 打开菜单栏时触发 | - |
| opened | 打开菜单栏且动画结束后触发 | - |
| close | 关闭菜单栏时触发 | - |

### DropdownItem 方法

通过 ref 可以获取到 DropdownItem 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| toggle | show: boolean | - | 切换菜单是否展示 |
