# 常见问题

### 如何自定义 Vant 组件的样式？

#### 1. 主题定制

Vant 基于 CSS 变量提供了主题定制的能力，可以对组件样式进行统一修改，详见 [ConfigProvider 全局配置](#/zh-CN/config-provider) 组件。

#### 2. 覆盖默认样式

如果主题定制不能满足你的需求，也可以通过**自定义样式类**来覆盖默认样式，参考下面的示例：

```html
<template>
  <van-button class="my-button">按钮</van-button>
</template>

<style>
  /** 覆盖 Button 最外层元素的样式 */
  .my-button {
    width: 200px;
  }

  /** 覆盖 Button 内部子元素的样式 */
  .my-button .van-button__text {
    color: red;
  }
</style>
```

### 在 HTML 中无法正确渲染组件？

在 HTML 中使用 Vant 组件时，你可能会碰到部分示例代码无法正确渲染的情况，比如下面的用法：

```html
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" />
</van-cell-group>
```

这是因为 HTML 并不支持自闭合的自定义元素，也就是说 `<van-cell />` 这样的语法是不被识别的，使用完整的闭合标签可以避免这个问题：

```html
<van-cell-group>
  <van-cell title="单元格" value="内容"></van-cell>
  <van-cell title="单元格" value="内容"></van-cell>
</van-cell-group>
```

在单文件组件、字符串模板和 JSX 中可以使用自闭合的自定义元素，因此不会出现这个问题。

### 在 iOS 上无法触发组件的点击反馈效果？

这是因为 iOS Safari 默认不会触发 `:active` 伪类，解决方法是在 `body` 标签上添加一个空的 `ontouchstart` 属性：

```html
<body ontouchstart="">
  ...
</body>
```

参考链接：[stackoverflow - :active pseudo-class doesn't work in mobile safari](https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari/33681490#33681490)

### 为什么没有 Select 组件？

Select 是桌面端常用的组件，但它的交互形式不适合移动端。

在移动端，我们推荐使用 [Picker 选择器组件](#/zh-CN/picker) 作为代替。

### 是否支持在 uni-app 中使用？

Vant 所有组件都是基于 Vue 框架实现的，没有针对 uni-app 进行适配，因此不保证各个组件在 uni-app 下的可用性。

如果你在 uni-app 中使用 Vant 遇到问题，建议向 uni-app 进行反馈。

### 部分组件无法在桌面端进行操作？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。

### 如何进行移动端响应式适配？

参见[浏览器适配](#/zh-CN/advanced-usage#liu-lan-qi-gua-pei)。
