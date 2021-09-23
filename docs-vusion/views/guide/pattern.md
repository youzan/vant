# Pattern 设计模式

为了尽可能保证开发者使用和扩展组件的一致性，我们将各种组件相似的地方归纳成一套组件模式，罗列在这里，可以帮助你快速了解 Vusion 组件的设计理念，并且在实际开发中更高效合理地使用这套组件库。同时，也希望你在项目中自行设计组件时，也尽量参照这套模式。

## 命名

### 前缀

由于 Vusion 体系包含了多种多样的组件，为了与原生 HTML 元素区分，也为了识别方便，组件名前都加了一个表示类型的字母：

- 一般的组件，以`u-`开头（UI，也是 Vusion 的第二个字母）
- 业务中的组件，以`s-`开头（specific）
- 希望被 mixin 的组件，可以认为是抽象组件的，以`m-`开头（mixin）
- 字体图标组件，以`i-`开头（icon）
- 功能组件，以`f-`开头（functional），一般没有模板
- 动效组件，以`e-`开头（effect）
- 第三方库封装的复杂组件，以`x-`开头（extension）

## 样式

### 标准化

以 [normalize.css](http://necolas.github.io/normalize.css) 为基础，使初始样式在各个浏览器下保持统一，然后对一些 HTML 元素的默认样式作了进一步优化。

类似 [Bootstrap](https://getbootstrap.com)，将`box-sizing: border-box`应用到所有元素，于是元素的宽高不会受到`padding`的影响，更容易控制。

使用 Vue 的`preserveWhitespace: false`，将所有元素之间空格清除，这样在`inline-block`的元素之间不会有空隙。

### 边距与布局

每个 Vusion 组件最外层都是不带的 margin，因为它们的边距在实际场景中不是很确定。

在业务中可以使用`<u-linear-layout>`与`<u-grid-layout>`来控制组件的边距。有时也可以使用`class`和`style`临时调整，这个在下面环节会详述。

这样的好处是，针对各个组件的 margin 样式只需要从0设置，避免出现令人摸不清头脑的样式覆盖。

``` html
<u-linear-layout>
    <u-input></u-input>
    <u-button color="primary">搜索</u-button>
    <u-link style="margin-left: 60px;">设置</u-link>
    <u-link>删除</u-link>
</u-linear-layout>
```

## 常见属性

下面列举组件的一些常见属性，提前有个印象。

### 颜色扩展

通常用`color`属性来设置组件的颜色扩展，常见的值有：`default`, `primary`, `info`, `success`, `warning`, `error`, `disabled`, `muted`，默认为`default`。

如果有特殊情况，可以使用`class`或`style`作临时调整。

``` html
<u-linear-layout>
    <u-label color="primary">Primary</u-label>
    <u-label color="info">Info</u-label>
    <u-label color="success">Success</u-label>
    <u-label color="error" style="background: #c461fb;">Custom</u-label>
</u-linear-layout>
```

### 大小扩展

通常用`size`属性来设置组件的大小扩展。常见的值有：`mini`, `small`, `normal`, `large`, `huge`，默认为`normal`。

项目中一般有这5个级别就够了，过多的分类反而容易造成混乱，其他尺寸建议用`class`或`style`作临时调整。

``` html
<u-linear-layout>
    <u-button size="small">Small</u-button>
    <u-button>Normal</u-button>
    <u-button size="large">Large</u-button>
    <u-button style="width: 120px; height: 50px; line-height: 48px;">Custom</u-button>
</u-linear-layout>
```

`size`也支持传两个值，前者表示高度，后者表示宽度。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-input size="small" value="small" readonly></u-input>
        <u-input size="small normal" value="small normal" readonly></u-input>
        <u-input size="small large" value="small large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="normal small" value="normal small" readonly></u-input>
        <u-input value="normal" readonly></u-input>
        <u-input size="normal large" value="normal large" readonly></u-input>
    </u-linear-layout>
    <u-linear-layout>
        <u-input size="large small" value="large small" readonly></u-input>
        <u-input size="large normal" value="large normal" readonly></u-input>
        <u-input size="large" value="large" readonly></u-input>
    </u-linear-layout>
</u-linear-layout>
```

在设计组件时，不推荐专门设置`width`和`height`属性，`size`和`style`已经够用。

### 展示方式

大家都熟知大部分 HTML 元素有行内和块级两种展示方式。我们根据组件的一些常见情况，归纳整理了几种展示方式，可以用`display`属性来设置，这个和 CSS 的`display`有所不同，但主要依赖 CSS 的`display`和`position`属性。

常见的值有：`inline`、`block`、`full`、`fullWindow`、`fullScreen`，每个组件并不一定支持所有的值，但一定以其中一个作为默认值。

- `inline`：行内展示，对应 CSS 的`inline`或`inline-block`。在设计时尽量与周围文字基线对齐。
- `block`：块级展示，对应 CSS 的 `block`，主要特性为占据整行。
- `full`：填满父元素，将会填满定位父元素（offsetParent）并覆盖在上面，如`<u-loading>`可以覆盖在表格上加载等。
- `fullWindow`：填满全窗口，如`u-modal`的默认行为。
- `fullScreen`：填满全屏幕，会调用浏览器的`fullScreen`的 API。

可以参见[`<u-loading>`](u-loading)的例子。

### 临时调整

前面的例子也可以看到，在实际业务开发中，组件暴露的属性可以满足大部分需求，但总是会遇到一些要临时调整样式的情况，比如自定义宽高、临时调整边距、修改边框样式、偶尔添加阴影等。

这时可以利用 Vue 的透传机制，它可以将一些常用的属性或事件从标签上透传到组件内部的根元素上，如`class`、`style`或其他自定义属性。

下面是一个临时扩展`<u-select>`组件样式的例子：

``` html
<u-select style="width: 200px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <u-select-item>苹果</u-select-item>
    <u-select-item>香蕉</u-select-item>
    <u-select-item>蛋糕</u-select-item>
</u-select>
```

为了防止 class 重名的问题，Vusion 组件的样式都使用 CSS Modules 技术做了局域化处理，封装在了组件内部。透传只是针对根元素，其它内部元素不对外开放，主要是为了维护组件的一个封闭性。如果遇到需要对内部元素做修改的情况，往往是因为这个组件有了新的特性或者原来封装的并不完善，建议扩展整个组件然后作补充或者重新修改这个组件本身。

## 事件

### 事件名

表单控件会抛出部分下面的事件：

- `input`：用于`v-model`的双向绑定
- `update:value`：用于`.sync`的双向绑定
- `change`：监听`value`改变时触发
- `focus`和`blur`：控件聚焦和失焦时会触发
- 有一个单纯由用户触发的事件，比如`select`、`toggle`、`slide`等
- 针对上面用户触发的事件，会提前抛出一个可以阻止的`before-`事件，比如`before-select`、`before-toggle`等
- `change`事件和用户触发事件不同的地方是，`change`事件只根据数据是否变化来判断，有时在组件创建阶段也会触发。而用户触发事件只会由用户操作或者方法手动调用来触发。

### 传递数据

通常事件都会统一抛出一个数据对象（$event）和当前实例（senderVM）。

``` js
this.$emit('select', {
    value,
    item,
    itemVM: selectedVM,
}, this);

this.$emit('change', {
    value,
    oldValue,
}, this);
```


`input`和`update:*`事件比较特殊，为了适应`v-model`和`.sync`，$event 为一个单一的值。

``` js
this.$emit('input', value, this);
this.$emit('update:value', value, this);
```
