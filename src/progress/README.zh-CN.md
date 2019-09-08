# Progress 进度条

### 引入

``` javascript
import Vue from 'vue';
import { Progress } from 'vant';

Vue.use(Progress);
```

## 代码演示

### 基础用法

进度条默认为蓝色，使用`percentage`属性来设置当前进度

```html
<van-progress :percentage="50" />
```

### 线条粗细

通过`stroke-width`可以设置进度条的粗细

```html
<van-progress :percentage="50" stroke-width="8" />
```

### 置灰

设置`inactive`属性后进度条将置灰

```html
<van-progress inactive :percentage="50" />
```

### 样式定制

可以使用`pivot-text`属性自定义文字，`color`属性自定义进度条颜色

```html
<van-progress
  pivot-text="橙色"
  color="#f2826a"
  :percentage="25"
/>

<van-progress
  pivot-text="红色"
  color="#ee0a24"
  :percentage="50"
/>

<van-progress
  :percentage="75"
  pivot-text="紫色"
  pivot-color="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| inactive | 是否置灰 | *boolean* | `false` | - |
| percentage | 进度百分比 | *number* | `0` | - |
| stroke-width | 进度条粗细，默认单位为`px` | *string \| number* | `4px` | 2.2.1 |
| show-pivot | 是否显示进度文字 | *boolean* | `true` | - |
| color | 进度条颜色 | *string* | `#1989fa` | - |
| text-color | 进度条文字颜色 | *string* | `#fff` | - |
| pivot-text | 文字显示 | *string* | 百分比文字 | - |
| pivot-color | 文字背景色 | *string* | 与进度条颜色一致 | - |
