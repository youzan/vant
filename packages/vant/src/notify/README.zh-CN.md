# Notify 消息提示

### 介绍

在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

### 函数调用

Notify 是一个函数，调用后会直接在页面中弹出相应的消息提示。

```js
import { Notify } from 'vant';

Notify('通知内容');
```

### 组件调用

通过组件调用 Notify 时，可以通过下面的方式进行注册：

```js
import { createApp } from 'vue';
import { Notify } from 'vant';

// 全局注册
const app = createApp();
app.use(Notify);

// 局部注册
export default {
  components: {
    [Notify.Component.name]: Notify.Component,
  },
};
```

在 `script setup` 中，可以通过以下方式使用：

```html
<script setup>
  const VanNotify = Notify.Component;
</script>

<template>
  <!-- 中划线命名 -->
  <van-notify />
  <!-- 也支持大驼峰命名 -->
  <VanNotify>
</template>
```

## 代码演示

### 基础用法

```js
Notify('通知内容');
```

### 通知类型

支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

```js
// 主要通知
Notify({ type: 'primary', message: '通知内容' });

// 成功通知
Notify({ type: 'success', message: '通知内容' });

// 危险通知
Notify({ type: 'danger', message: '通知内容' });

// 警告通知
Notify({ type: 'warning', message: '通知内容' });
```

### 自定义通知

自定义消息通知的颜色和展示时长。

```js
Notify({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1',
});

Notify({
  message: '自定义时长',
  duration: 1000,
});
```

### 全局方法

通过 `app.use` 全局注册 Notify 组件后，会自动在 app 的所有子组件上挂载 `$notify` 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$notify('提示文案');
  },
};
```

> Tips: 由于 setup 选项中无法访问 this，因此不能使用上述方式，请通过 import 引入。

### 组件调用

如果需要在 Notify 内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```html
<van-button type="primary" text="组件调用" @click="showNotify" />
<van-notify v-model:show="show" type="success">
  <van-icon name="bell" style="margin-right: 4px;" />
  <span>通知内容</span>
</van-notify>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);

    const showNotify = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2000);
    };

    return {
      show,
      showNotify,
    };
  },
};
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Notify | 展示提示 | `options \| message` | notify 实例 |
| Notify.clear | 关闭提示 | - | `void` |
| Notify.setDefaultOptions | 修改默认配置，对所有 Notify 生效 | `options` | `void` |
| Notify.resetDefaultOptions | 重置默认配置，对所有 Notify 生效 | - | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` | _string_ | `danger` |
| message | 展示文案，支持通过`\n`换行 | _string_ | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | _number \| string_ | `3000` |
| color | 字体颜色 | _string_ | `white` |
| background | 背景颜色 | _string_ | - |
| className | 自定义类名 | _string \| Array \| object_ | - |
| lockScroll `v3.0.7` | 是否锁定背景滚动 | _boolean_ | `false` |
| onClick | 点击时的回调函数 | _(event: MouseEvent): void_ | - |
| onOpened | 完全展示后的回调函数 | _() => void_ | - |
| onClose | 关闭时的回调函数 | _() => void_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { NotifyType, NotifyOptions } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --van-notify-text-color | _var(--van-white)_ | - |
| --van-notify-padding | _var(--van-padding-xs) var(--van-padding-md)_ | - |
| --van-notify-font-size | _var(--van-font-size-md)_ | - |
| --van-notify-line-height | _var(--van-line-height-md)_ | - |
| --van-notify-primary-background-color | _var(--van-primary-color)_ | - |
| --van-notify-success-background-color | _var(--van-success-color)_ | - |
| --van-notify-danger-background-color | _var(--van-danger-color)_ | - |
| --van-notify-warning-background-color | _var(--van-warning-color)_ | - |
