# Signature 签名板

### 介绍

用于手写签名

### 引入

```js
import Vue from 'vue';
import { Signature } from 'vant';

Vue.use(Signature);
```

## 代码演示

### 基础用法

通过 `v-model` 绑定签名内容，空 表示清空签名板。

```html
<van-signature v-model="value" />
```

```js
export default {
  data() {
    return {
      value: '',
    };
  },
};
```

### 禁用状态

通过 `disabled` 属性来禁用签名板。

```html
<van-signature v-model="value" :disabled="disabled" />
```

### 自定义线条粗细

通过 `lineWidth` 属性自定义签名板线条粗细。

```html
<van-signature v-model="value" :line-width="2" />
```

### 自定义颜色

`lineColor` 属性自定义签名板线条的颜色。

```html
<van-signature v-model="value" lineColor="#ee0a24" />
```

```js
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {},
};
```

## API

### Props

| 参数      | 说明               | 类型      | 默认值    |
| --------- | ------------------ | --------- | --------- |
| v-model   | 签名板图片(base64) | _string_  | ``        |
| disabled  | 是否为禁用状态     | _boolean_ | `false`   |
| lineWidth | 线条粗细           | _number_  | `1`       |
| lineColor | 线条颜色           | _string_  | `#1989fa` |

### Events

| 事件名 | 说明         | 回调参数        |
| ------ | ------------ | --------------- |
| input  | 内容发生变化 | _value: String_ |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称 | 默认值 | 描述 |
| ---- | ------ | ---- |

