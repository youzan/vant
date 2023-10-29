# Signature 签名

### 介绍

用于签名场景的组件，基于 Canvas 实现。请升级 `vant` 到 >= 4.3.0 版本来使用该组件。

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

当点击确认按钮时，组件会触发 `submit` 事件，事件的第一个参数为 `data`，包含以下字段：

- `image`：签名对应的图片，为 base64 字符串格式。若签名为空，则返回空字符串。
- `canvas`：Canvas 元素。

```html
<van-signature @submit="onSubmit" @clear="onClear" />
<van-image v-if="image" :src="image" />
```

```js
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const image = ref('');
    const onSubmit = (data) => {
      image.value = data.image;
    };
    const onClear = () => showToast('clear');

    return {
      image,
      onSubmit,
      onClear,
    };
  },
};
```

### 自定义颜色

通过 `pen-color` 来自定义笔触颜色。

```html
<van-signature pen-color="#ff0000" @submit="onSubmit" @clear="onClear" />
```

### 自定义线宽

通过 `line-width` 来自定义线条宽度。

```html
<van-signature :line-width="6" @submit="onSubmit" @clear="onClear" />
```

### 自定义背景颜色

通过 `background-color` 来自定义背景颜色。

```html
<van-signature background-color="#eee" @submit="onSubmit" @clear="onClear" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 导出图片类型 | _string_ | `png` |
| pen-color | 笔触颜色，默认黑色 | _string_ | `#000` |
| line-width | 线条宽度 | _number_ | `3` |
| background-color | 背景颜色 | _string_ | - |
| tips | 当不支持 Canvas 的时候出现的提示文案 | _string_ | - |
| clear-button-text | 清除按钮文案 | _string_ | `清空` |
| confirm-button-text | 确认按钮文案 | _string_ | `确认` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| start | 开始签名时触发 | - |
| end | 结束签名时触发 | - |
| signing | 签名过程中触发 | _event: TouchEvent_ |
| submit | 点击确定按钮时触发 | _data: { image: string; canvas: HTMLCanvasElement }_ |
| clear | 点击取消按钮时触发 | - |

### 方法

通过 ref 可以获取到 Signature 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize `v4.7.3` | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { SignatureProps, SignatureInstance } from 'vant';
```

`SignatureInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { SignatureInstance } from 'vant';

const signatureRef = ref<SignatureInstance>();

signatureRef.value?.resize();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-signature-padding | _var(--van-padding-xs)_ | - |
| --van-signature-content-height | _200px_ | 画布高度 |
| --van-signature-content-background | _var(--van-background-2)_ | 画布背景色 |
| --van-signature-content-border | _1px dotted #dadada_ | 画布边框样式 |
