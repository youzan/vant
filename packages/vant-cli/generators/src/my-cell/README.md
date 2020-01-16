# MyCell 单元格

### 介绍

MyCell 是一个示例单元格组件

### 引入

``` javascript
import Vue from 'vue';
import { MyCell } from 'demo-ui';

Vue.use(MyCell);
```

## 代码演示

### 基础用法

```html
<my-cell title="单元格" />
```

### 显示箭头

```html
<my-cell title="单元格" is-link />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| title | 单元格标题 | *string* | `-` | - |
| is-link | 是否为可点击单元格 | *boolean* | `false` | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽 |
