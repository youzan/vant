# Progress 进度条

### 介绍

用于展示操作的当前进度。

### 引入

```js
import Vue from 'vue';
import { Progress } from 'vant';

Vue.use(Progress);
```

## 代码演示

### 基础用法

进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。

```html
<van-progress :percentage="50" />
```

### 线条粗细

通过 `stroke-width` 可以设置进度条的粗细。

```html
<van-progress :percentage="50" stroke-width="8" />
```

### 置灰

设置 `inactive` 属性后进度条将置灰。

```html
<van-progress inactive :percentage="50" />
```

### 样式定制

可以使用 `pivot-text` 属性自定义文字，`color` 属性自定义进度条颜色。

```html
<van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
<van-progress pivot-text="红色" color="#ee0a24" :percentage="50" />
<van-progress
  :percentage="75"
  pivot-text="紫色"
  pivot-color="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percentage | 进度百分比 | _number \| string_ | `0` |
| stroke-width | 进度条粗细，默认单位为`px` | _number \| string_ | `4px` |
| color | 进度条颜色 | _string_ | `#1989fa` |
| track-color | 轨道颜色 | _string_ | `#e5e5e5` |
| pivot-text | 进度文字内容 | _string_ | 百分比 |
| pivot-color | 进度文字背景色 | _string_ | 同进度条颜色 |
| text-color | 进度文字颜色 | _string_ | `white` |
| inactive | 是否置灰 | _boolean_ | `false` |
| show-pivot | 是否显示进度文字 | _boolean_ | `true` |

### 方法

通过 ref 可以获取到 Progress 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明                                         | 参数 | 返回值 |
| ------ | -------------------------------------------- | ---- | ------ |
| resize | 外层元素大小变化后，可以调用此方法来触发重绘 | -    | -      |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                             | 默认值          | 描述 |
| -------------------------------- | --------------- | ---- |
| @progress-height                 | `4px`           | -    |
| @progress-color                  | `@blue`         | -    |
| @progress-background-color       | `@gray-3`       | -    |
| @progress-pivot-padding          | `0 5px`         | -    |
| @progress-pivot-text-color       | `@white`        | -    |
| @progress-pivot-font-size        | `@font-size-xs` | -    |
| @progress-pivot-line-height      | `1.6`           | -    |
| @progress-pivot-background-color | `@blue`         | -    |

## 常见问题

### 组件从隐藏状态切换到显示状态时，渲染不正确？

Progress 组件在挂载时，会获取自身的宽度，并计算出进度条的样式。如果组件一开始处于隐藏状态，则获取到的宽度永远为 0，因此无法展示正确的进度。

#### 解决方法

方法一，如果是使用 `v-show` 来控制组件展示的，则替换为 `v-if` 即可解决此问题：

```html
<!-- Before -->
<van-progress v-show="show" />
<!-- After -->
<van-progress v-if="show" />
```

方法二，调用组件的 resize 方法来主动触发重绘：

```html
<van-progress v-show="show" ref="progress" />
```

```js
this.$refs.progress.resize();
```
