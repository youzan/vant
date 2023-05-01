# Signature 签名

### 介绍

用于签名场景的组件，基于 Canvas。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Signature } from 'vant';

const app = createApp();
app.use(Signature);
```

## 代码演示

### 基础用法

```html
<van-signature @submit="onSubmit" @clear="onClear" />
<van-image v-if="demoUrl" :src="demoUrl" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const demoUrl = ref('');

    const onSubmit = (data) => {
      const { filePath, canvas } = data;
      demoUrl.value = filePath;

      console.log('submit', canvas, filePath);
    };

    const onClear = () => console.log('clear');

    return {
      onSubmit,
      onClear,
      demoUrl,
    };
  },
};
```

### 自定义颜色

```html
<van-signature pen-color="#ff0000" @submit="onSubmit" @clear="onClear" />
```

### 自定义线宽

```html
<van-signature :line-width="6" @submit="onSubmit" @clear="onClear" />
```

## API

### Props

| 参数      | 说明                                 | 类型     | 默认值 |
| --------- | ------------------------------------ | -------- | ------ |
| type      | 导出图片类型                         | _string_ | `png`  |
| penColor  | 笔触颜色，默认黑色。                 | _string_ | `#000` |
| lineWidth | 线条宽度                             | _number_ | `3`    |
| tips      | 当不支持 Canvas 的时候出现的提示文案 | _string_ | -      |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| start | 签名开始事件回调 | - |
| end | 签名结束事件回调 | - |
| signing | 签名过程事件回调 | _event: TouchEvent_ |
| submit | 确定按钮事件回调 | _data: {canvas: HTMLCanvasElement, filePath: string}_ |
| clear | 取消按钮事件回调 | - |

### 类型定义

组件导出以下类型定义：

```js
import type { SignatureProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-signature-padding | _var(--van-padding-xs)_ | - |
| --van-signature-content-height | _160px_ | 画布高度 |
| --van-signature-content-background | _var(--van-background-2)_ | 画布背景色 |
| --van-signature-content-border | _1px dotted #dadada_ | 画布边框样式 |
