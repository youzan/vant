### 基本用法

除了`<a>`标签的`href`和`target`基础属性，增加了类似`<router-link>`的`to`、`replace`和`append`属性等。

``` html
<u-link href="https://vusion.github.io" target="_blank" text="普通链接"></u-link>&nbsp;
<u-link to="/components/u-button" text="路由链接"></u-link>
```

### 设置颜色

用`color`属性修改颜色。

``` html
<u-link href="#" text="默认颜色"></u-link>&nbsp;
<u-link href="#" color="light" text="浅色链接">
    <u-tooltip>
        <u-link href="#" color="light">浅色链接</u-link>一般用于深色背景
    </u-tooltip>
</u-link>&nbsp;
<u-link color="success" text="成功链接"></u-link>&nbsp;
<u-link color="warning" text="警告链接"></u-link>&nbsp;
<u-link color="danger" text="危险链接"></u-link>&nbsp;
```

### 禁用状态

链接在禁用状态下，不会响应点击事件。

``` html
<u-link href="https://vusion.github.io" target="_blank" disabled text="禁用链接"></u-link>
```

### 块级展示

使用`display="block"`可以快速将链接宽度充满整行。

``` html
<u-link color="secondary" text="行内链接"></u-link>与周围其他文字保持在同一行。
<u-link display="block" color="secondary" text="块级链接"></u-link>宽度充满整行。
```
