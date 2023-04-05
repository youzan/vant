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

    const onSubmit = (data, filePath) => {
      demoUrl.value = filePath;
      console.log('submit', data, filePath);
    };
    const onClear = () => console.log('clear');

    return {
      onSubmit,
      onClear,
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 导出图片类型 | _string_ | `png` |
| penColor | 笔触颜色，默认黑色。 | _string_ | `#000000` |
| lineWidth | 线条宽度 | _number_ | `3` |
| tips | 当不支持 Canvas 的时候出现的提示文案 | _string_ | `当前浏览器不支持Canvas，无法使用本控件` |
| className | 自定义类名 | _string \| Array \| object_ | - |

### Events

| 事件名  | 说明             | 回调参数                                      |
| ------- | ---------------- | --------------------------------------------- |
| start   | 签名开始事件回调 | -                                             |
| end     | 签名结束事件回调 | -                                             |
| signing | 签名过程事件回调 | _event: TouchEvent_                           |
| submit  | 确定按钮事件回调 | _canvas: HTMLCanvasElement, filePath: string_ |
| clear   | 取消按钮事件回调 | -                                             |

### 类型定义

组件导出以下类型定义：

```js
import type { SignatureProps } from 'vant';
```
