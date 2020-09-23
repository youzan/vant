# 徽标

### 介绍

图标右上角的圆形徽标数字。

### 引入

```js
import Vue from 'vue';
import { Badge } from 'vant';

Vue.use(Badge);
```

## 代码演示

### 基础用法

```html
<van-badge :count="10">
  <a href="#" class="avatar"></a>
</van-badge>
```

### 最大数值

```html
<van-badge :count="10" :max-count="60">
  <a href="#" class="avatar"></a>
</van-badge>
```

### 自定义偏移量

```html
<van-badge :count="10" :offset="[10, 10]">
  <a href="#" class="avatar"></a>
</van-badge>
```

### 红点

```html
<van-badge dot>
  <van-icon name="chat-o" />
</van-badge>
```

### 独立使用

```html
<van-badge :count="12" />
<van-badge :count="101" />
<van-badge dot />
```

### 显示0值

```html
<van-badge :count="0">
  <a href="#" class="avatar"></a>
</van-badge>
<van-badge :count="0" show-zero>
  <a href="#" class="avatar"></a>
</van-badge>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| count | 展示的数字 | _number_ | - |
| dot | 红点模式 | _boolean_ | `false` |
| max-count | 最大显示数值 | _number_ | `99` |
| offset | 自定义偏移量, 格式为 [top, right] | _number[]_ | - |
| show-zero | 是否显示`0`值 | _boolean_ | `false` |

