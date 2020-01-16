# MyIcon 图标

### 介绍

MyIcon 是一个示例图标组件

### 引入

``` javascript
import Vue from 'vue';
import { MyIcon } from 'demo-ui';

Vue.use(MyIcon);
```

## 代码演示

### 基础用法

```html
<my-icon name="success" />
```

### 显示箭头

```html
<my-icon name="success" dot />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 图标名称 | *string* | `-` | - |
| dot | 是否展示红点 | *boolean* | `false` | - |
