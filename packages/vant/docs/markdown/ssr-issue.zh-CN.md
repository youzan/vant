# 服务端渲染（SSR）兼容性问题

### 介绍

某些组件实现依赖于 DOM 操作或浏览器的API，SSR 场景下会存在兼容性问题，导致组件无法正常工作。

### 组件

#### Tab

Tab组件在SSR场景下不会渲染，见[tab 组件的title无法ssr](https://github.com/youzan/vant/issues/5278)。
