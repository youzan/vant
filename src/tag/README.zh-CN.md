# Tag 标记

### 引入

``` javascript
import Vue from 'vue';
import { Tag } from 'vant';

Vue.use(Tag);
```

## 代码演示

### 基础用法

通过 type 属性控制 Tag 颜色，默认为灰色

```html
<van-tag>标签</van-tag>
<van-tag type="primary">标签</van-tag>
<van-tag type="success">标签</van-tag>
<van-tag type="danger">标签</van-tag>
<van-tag type="warning">标签</van-tag>
```

### 空心样式

设置`plain`属性设置为空心样式

```html
<van-tag plain>标签</van-tag>
<van-tag plain type="primary">标签</van-tag>
<van-tag plain type="success">标签</van-tag>
<van-tag plain type="danger">标签</van-tag>
<van-tag plain type="warning">标签</van-tag>
```

### 圆角样式

通过`round`设置为圆角样式

```html
<van-tag round>标签</van-tag>
<van-tag round type="primary">标签</van-tag>
<van-tag round type="success">标签</van-tag>
<van-tag round type="danger">标签</van-tag>
<van-tag round type="warning">标签</van-tag>
```

### 标记样式

通过`mark`设置为标记样式(半圆角)

```html
<van-tag mark>标签</van-tag>
<van-tag mark type="primary">标签</van-tag>
<van-tag mark type="success">标签</van-tag>
<van-tag mark type="danger">标签</van-tag>
<van-tag mark type="warning">标签</van-tag>
```

### 自定义颜色

```html
<van-tag color="#f2826a">标签</van-tag>
<van-tag color="#f2826a" plain>标签</van-tag>
<van-tag color="#7232dd">标签</van-tag>
<van-tag color="#7232dd" plain>标签</van-tag>
<van-tag color="#ffe1e1" text-color="#ad0000">标签</van-tag>
```

### 标签大小

```html
<van-tag type="danger">标签</van-tag>
<van-tag type="danger" size="medium">标签</van-tag>
<van-tag type="danger" size="large">标签</van-tag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 类型，可选值为`primary` `success` `danger` `warning` | *string* | `default` | - |
| size | 大小, 可选值为`large` `medium` | *string* | - | - |
| color | 标签颜色 | *string* | - | - |
| plain | 是否为空心样式 | *boolean* | `false` | - |
| round | 是否为圆角样式 | *boolean* | `false` | - |
| mark | 是否为标记样式 | *boolean* | `false` | - |
| text-color | 文本颜色，优先级高于`color`属性 | *string* | `white` | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义 Tag 显示内容 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |
