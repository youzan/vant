# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

```js
import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);
```

## 代码演示

### 基础用法

通过 `v-model` 控制弹出层是否展示。

```html
<van-cell is-link @click="showPopup">展示弹出层</van-cell>
<van-popup v-model="show">内容</van-popup>
```

```js
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
```

### 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

```html
<van-popup v-model="show" position="top" :style="{ height: '30%' }" />
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `close-icon` 属性自定义图标，使用 `close-icon-position` 属性可以自定义图标位置。

```html
<van-popup
  v-model="show"
  closeable
  position="bottom"
  :style="{ height: '30%' }"
/>
<!-- 自定义图标 -->
<van-popup
  v-model="show"
  closeable
  close-icon="close"
  position="bottom"
  :style="{ height: '30%' }"
/>
<!-- 图标位置 -->
<van-popup
  v-model="show"
  closeable
  close-icon-position="top-left"
  position="bottom"
  :style="{ height: '30%' }"
/>
```

### 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```html
<van-popup v-model="show" round position="bottom" :style="{ height: '30%' }" />
```

### 指定挂载位置

弹出层默认挂载到组件所在位置，可以通过 `get-container` 属性指定挂载位置。

```html
<!-- 挂载到 body 节点下 -->
<van-popup v-model="show" get-container="body" />

<!-- 挂载到 #app 节点下 -->
<van-popup v-model="show" get-container="#app" />

<!-- 通过函数指定挂载位置 -->
<van-popup v-model="show" :get-container="getContainer" />
```

```js
export default {
  methods: {
    // 返回一个特定的 DOM 节点，作为挂载的父节点
    getContainer() {
      return document.querySelector('.my-container');
    },
  },
};
```

> 注意：使用 get-container 属性的组件不能为根节点

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model (value) | 是否显示弹出层 | _boolean_ | `false` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
| overlay-class | 自定义遮罩层类名 | _string_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| round | 是否显示圆角 | _boolean_ | `false` |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
| lazy-render | 是否在显示弹层时才渲染节点 | _boolean_ | `true` |
| close-on-popstate | 是否在页面回退时自动关闭 | _boolean_ | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| close-icon | 关闭图标名称或图片链接 | _string_ | `cross` |
| close-icon-position | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| transition | 动画类名，等价于 [transition](https://cn.vuejs.org/v2/api/index.html#transition) 的`name`属性 | _string_ | - |
| transition-appear `v2.10.14` | 是否在初始渲染时启用过渡动画 | _boolean_ | `false` |
| get-container | 指定挂载的节点 | _string \| () => Element_ | - |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

### Events

| 事件名                     | 说明                       | 回调参数       |
| -------------------------- | -------------------------- | -------------- |
| click                      | 点击弹出层时触发           | _event: Event_ |
| click-overlay              | 点击遮罩层时触发           | -              |
| click-close-icon `v2.11.0` | 点击关闭图标时触发         | _event: Event_ |
| open                       | 打开弹出层时触发           | -              |
| close                      | 关闭弹出层时触发           | -              |
| opened                     | 打开弹出层且动画结束后触发 | -              |
| closed                     | 关闭弹出层且动画结束后触发 | -              |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                           | 默认值                               | 描述 |
| ------------------------------ | ------------------------------------ | ---- |
| @popup-background-color        | `@white`                             | -    |
| @popup-transition              | `transform @animation-duration-base` | -    |
| @popup-round-border-radius     | `16px`                               | -    |
| @popup-close-icon-size         | `22px`                               | -    |
| @popup-close-icon-color        | `@gray-5`                            | -    |
| @popup-close-icon-active-color | `@gray-6`                            | -    |
| @popup-close-icon-margin       | `16px`                               | -    |
| @popup-close-icon-z-index      | `1`                                  | -    |
