# FAQ

### How do I customize the style of Vant components?

#### 1. Theme customization

Vant provides the ability to customize the theme based on CSS variables, and can uniformly modify the component style. For details, see [ConfigProvider Global Configuration](#/en-US/config-provider) component.

#### 2. Overriding the default style

If the theme customization does not meet your needs, you can also override the default style using a **custom style class**, see the following example:

```html
<template>
  <van-button class="my-button">Button</van-button>
</template>

<style>
  /** Override the style of Button's root element */
  .my-button {
    width: 200px;
  }

  /** Override the style of Button's child elements */
  .my-button.van-button__text {
    color: red;
  }
</style>
```

### Components not rendering correctly in HTML?

When using Vant components in HTML, you may encounter situations where some sample code may not render correctly, such as the following usage:

```html
<van-cell-group>
  <van-cell title="cell" value="content" />
  <van-cell title="cell" value="content" />
</van-cell-group>
```

This is because HTML does not support self-closing custom elements, so syntax like `<van-cell />` is not recognized. Using a closing tag can work around this problem:

```html
<van-cell-group>
  <van-cell title="cell" value="content"></van-cell>
  <van-cell title="cell" value="content"></van-cell>
</van-cell-group>
```

Self-closing custom elements are available in single-file components, string templates, and JSX, so this problem doesn't arise.

### Can't trigger the click feedback on iOS?

This is because iOS Safari does not trigger the `:active` pseudo-class by default. The solution is to add an empty `ontouchstart` attribute to the `body` tag:

```html
<body ontouchstart="">
  ...
</body>
```

Reference link: [stackoverflow - :active pseudo-class doesn't work in mobile safari](https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari/33681490#33681490)

### Why is there no Select component?

Select is a widely used component on the desktop, but its interactive form is not suitable for the mobile device.

On the mobile side, we recommend using the [Picker selector component](#/en-US/picker) instead.

### Is it supported in uni-app?

All components of Vant are implemented based on the Vue framework and are not adapted to uni-app, so the availability of each component under uni-app is not guaranteed.

If you encounter problems using Vant in uni-app, it is recommended to provide feedback to uni-app.

### Some components do not work on the desktop?

See [Adapt to PC Browsers](#/en-US/advanced-usage#adapt-to-pc-browsers).

### How do I implement mobile responsive adaptation?

See [Browser Adaptation](#/en-US/advanced-usage#browser-adaptation).
