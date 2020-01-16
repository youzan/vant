# MyButton 按钮

### 介绍

MyButton 是一个示例按钮组件

### 引入

``` javascript
import Vue from 'vue';
import { MyButton } from 'demo-ui';

Vue.use(MyButton);
```

## 代码演示

### 基础用法

```html
<my-button type="primary" />
```

### 自定义颜色

```html
<my-button color="#03a9f4" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 按钮类型 | *string* | `primary` | - |
| color | 按钮颜色 | *string* | - | 1.0.0 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽 |
