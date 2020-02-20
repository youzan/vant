# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示

### 引入

```js
import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);
```

## 代码演示

### 基础用法

通过`v-model`控制弹出层是否展示

```html
<van-cell is-link @click="showPopup">展示弹出层</van-cell>
<van-popup v-model="show">内容</van-popup>
```

```js
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
```

### 弹出位置

通过`position`属性设置弹出位置，默认居中弹出，可以设置为`top`、`bottom`、`left`、`right`

```html
<van-popup
  v-model="show"
  position="top"
  :style="{ height: '30%' }"
/>
```

### 关闭图标

设置`closeable`属性后，会在弹出层的右上角显示关闭图标，并且可以通过`close-icon`属性自定义图标，使用`close-icon-position`属性可以自定义图标位置

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

设置`round`属性后，弹窗会根据弹出位置添加不同的圆角样式

```html
<van-popup
  v-model="show"
  round
  position="bottom"
  :style="{ height: '30%' }"
/>
```

### 指定挂载位置

弹出层默认挂载到组件所在位置，可以通过`get-container`属性指定挂载位置

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
    }
  }
}
```

> 注意：使用 get-container 属性的组件不能为根节点

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前组件是否显示 | *boolean* | `false` |
| overlay | 是否显示遮罩层 | *boolean* | `true` |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | *string* | `center` |
| overlay-class | 自定义遮罩层类名 | *string* | - |
| overlay-style | 自定义遮罩层样式 | *object* | - |
| duration | 动画时长，单位秒 | *number \| string* | `0.3` |
| round `v2.0.7` | 是否显示圆角 | *boolean* | `false` |
| lock-scroll | 是否锁定背景滚动 | *boolean* | `true` |
| lazy-render | 是否在显示弹层时才渲染节点 | *boolean* | `true` |
| close-on-popstate `v2.2.10` | 是否在页面回退时自动关闭 | *boolean* | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | *boolean* | `true` |
| closeable `v2.2.0` | 是否显示关闭图标 | *boolean* | `false` |
| close-icon `v2.2.0` | 关闭图标名称或图片链接 | *string* | `cross` |
| close-icon-position `v2.2.2` | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | *string* | `top-right` |
| transition | 动画类名，等价于 [transtion](https://cn.vuejs.org/v2/api/index.html#transition) 的`name`属性 | *string* | - |
| get-container | 指定挂载的节点 | *string \| () => Element* | - |
| safe-area-inset-bottom `v2.2.1` | 是否开启[底部安全区适配](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | *boolean* | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击弹出层时触发 | *event: Event* |
| open | 打开弹出层时触发 | - |
| close | 关闭弹出层时触发 | - |
| opened | 打开弹出层且动画结束后触发 | - |
| closed | 关闭弹出层且动画结束后触发 | - |
| click-overlay | 点击遮罩层时触发 | - |
