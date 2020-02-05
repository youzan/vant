# Progress 进度条

### 引入

```js
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

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| percentage | 进度百分比 | *number \| string* | `0` |
| stroke-width `v2.2.1` | 进度条粗细，默认单位为`px` | *number \| string* | `4px` |
| color | 进度条颜色 | *string* | `#1989fa` |
| track-color `v2.2.9` | 轨道颜色 | *string* | `#e5e5e5` |
| pivot-text | 进度文字内容 | *string* | 百分比 |
| pivot-color | 进度文字背景色 | *string* | 同进度条颜色 |
| text-color | 进度文字颜色 | *string* | `white` |
| inactive | 是否置灰 | *boolean* | `false` |
| show-pivot | 是否显示进度文字 | *boolean* | `true` |
