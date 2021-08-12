### 设置尺寸

通过`size`属性设置尺寸。

``` html
<u-linear-layout gap="small">
    <u-text size="small" text="小号文本"></u-text>
    <u-text size="normal" text="正常文本"></u-text>
    <u-text size="large" text="大号文本"></u-text>
    <u-text size="huge" text="特大号文本"></u-text>
    <u-text style="font-size: 26px;" text="自定义大小"></u-text>
</u-linear-layout>
```

### 设置颜色

通过`color`属性设置颜色。

``` html
<u-linear-layout gap="small">
    <u-text text="默认颜色"></u-text>
    <u-text color="primary" text="主要文本"></u-text>
    <u-text color="secondary" text="次要文本"></u-text>
    <u-text color="success" text="成功文本"></u-text>
    <u-text color="warning" text="警告文本"></u-text>
    <u-text color="error" text="错误文本"></u-text>
    <u-text color="disabled" text="禁默文本"></u-text>
</u-linear-layout>
```

### 块级展示

使用`display="block"`可以快速将文本宽度充满整行。

``` html
<u-text color="secondary" text="行内文本"></u-text>与周围其他文字保持在同一行。
<u-text display="block" color="secondary" text="块级文本"></u-text>宽度充满整行。
```

### 文本过长

使用`overflow`处理文本过长的问题。

``` html
<u-linear-layout direction="vertical">
    <u-text display="block" overflow="ellipsis" style="width: 200px; background: var(--background-color-base);" text="围绕应用和微服务打造的一站式 PaaS 平台，帮助用户快速实现易接入、易运维的微服务解决方案。"></u-text>
    <u-text display="block" overflow="break" style="width: 200px; background: var(--background-color-base);" text="围绕应用和微服务打造的一站式 PaaS 平台，帮助用户快速实现易接入、易运维的微服务解决方案。"></u-text>
    <u-text display="block" overflow="nowrap" style="width: 200px; background: var(--background-color-base);" text="围绕应用和微服务打造的一站式 PaaS 平台，帮助用户快速实现易接入、易运维的微服务解决方案。"></u-text>
</u-linear-layout>
```
