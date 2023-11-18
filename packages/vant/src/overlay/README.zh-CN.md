# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Overlay } from 'vant';

const app = createApp();
app.use(Overlay);
```

## 代码演示

### 基础用法

```html
<van-button type="primary" text="显示遮罩层" @click="show = true" />
<van-overlay :show="show" @click="show = false" />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    return { show };
  },
};
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```html
<van-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block" />
  </div>
</van-overlay>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
```

### 设置 z-index

Overlay 组件默认的 z-index 层级为 `1`，你可以通过 `z-index` 属性设置它的 z-index 层级。

```html
<van-overlay z-index="100" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| z-index | z-index 层级 | _number \| string_ | `1` |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| class-name | 自定义类名 | _string_ | - |
| custom-style | 自定义样式 | _object_ | - |
| lock-scroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | `true` |
| lazy-render | 是否在显示时才渲染节点 | _boolean_ | `true` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 默认插槽，用于在遮罩层上方嵌入内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type { OverlayProps } from 'vant';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                     | 默认值               | 描述 |
| ------------------------ | -------------------- | ---- |
| --van-overlay-z-index    | _1_                  | -    |
| --van-overlay-background | _rgba(0, 0, 0, 0.7)_ | -    |
