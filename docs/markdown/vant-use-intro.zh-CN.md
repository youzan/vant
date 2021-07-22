# 组合式 API

### 介绍

Vant 内置了一系列的组合式 API，对于安装了 `vant` 的项目，可以直接使用这些 API 进行开发。

### 示例

下面是一个 Vant 组合式 API 的用法示例，我们从 `@vant/use` 这个包中引入 `useWindowSize` 方法，然后进行调用，即可获取到当前 Window 的宽度和高度。

```js
import { useWindowSize } from '@vant/use';

const { width, height } = useWindowSize();

console.log(width.value); // -> 窗口宽度
console.log(height.value); // -> 窗口高度
```

### API 列表

下面是 Vant 对外提供的所有组合式 API，点击名称可以查看详细介绍：

| 名称 | 描述 |
| --- | --- |
| [useClickAway](#/zh-CN/use-click-away) | 监听点击元素外部的事件 |
| [useCountDown](#/zh-CN/use-count-down) | 提供倒计时管理能力 |
| [useEventListener](#/zh-CN/use-event-listener) | 方便地进行事件绑定 |
| [usePageVisibility](#/zh-CN/use-page-visibility) | 获取页面的可见状态 |
| [useRect](#/zh-CN/use-rect) | 获取元素的大小及其相对于视口的位置 |
| [useRelation](#/zh-CN/use-relation) | 建立父子组件之间的关联关系 |
| [useScrollParent](#/zh-CN/use-scroll-parent) | 获取元素最近的可滚动父元素 |
| [useToggle](#/zh-CN/use-toggle) | 用于在布尔值之间进行切换 |
| [useWindowSize](#/zh-CN/use-window-size) | 获取浏览器窗口的视口宽度和高度 |
