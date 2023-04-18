### 基本用法

通过`value`设置需要复制的文本。通过`text`设置链接的文本。

``` html
<van-copy value="需要 copy 的内容"></van-copy>&nbsp;
<van-copy value="密钥内容 ef709de9" text="复制密钥"></van-copy>
```

### 触发元素

在默认插槽中更换触发元素。

``` html
<van-copy value="需要 copy 的内容">
    <u-button>复制</u-button>
</van-copy>
```

也可以直接在元素上使用`v-copy`指令。

``` html
<u-button v-copy="'需要 copy 的内容'">复制</u-button>
```

### 提示内容

通过`success-text`属性设置复制成功的提示内容。

``` html
<van-copy value="需要 copy 的内容" success-text="当前项已复制成功">
    <u-button>复制</u-button>
</van-copy>
```

### 提示方式

通过`feedback`属性设置复制成功的反馈方式。

#### tooltip (默认)

``` html
<van-copy value="需要 copy 的内容">
    <u-link>复制</u-link>
</van-copy>
```

#### toast

``` html
<van-copy value="需要 copy 的内容" feedback="toast">
    <u-link>复制</u-link>
</van-copy>
```

如果是指令，可以使用`toast`修饰符：

``` html
<u-button v-copy.toast="'需要 copy 的内容'">复制</u-button>
```

#### 不提示

``` html
<van-copy value="需要 copy 的内容" feedback="none">
    <u-link>复制</u-link>
</van-copy>
```

### 提示位置

设置 tooltip 的提示位置。仅在`feedback`为`tooltip`的情况下生效。

``` html
<u-linear-layout direction="vertical" style="min-width: 300px; max-width: 550px;">
    <u-linear-layout justify="center" gap="small">
        <van-copy value="需要 copy 的内容" placement="top-start">
            <u-button>上左</u-button>
        </van-copy>
        <van-copy value="需要 copy 的内容" placement="top">
            <u-button>上边</u-button>
        </van-copy>
        <van-copy value="需要 copy 的内容" placement="top-end">
            <u-button>上右</u-button>
        </van-copy>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: left;">
        <van-copy value="需要 copy 的内容" placement="left-start">
            <u-button>左上</u-button>
        </van-copy>
        <van-copy value="需要 copy 的内容" placement="left">
            <u-button>左边</u-button>
        </van-copy>
        <van-copy value="需要 copy 的内容" placement="left-end">
            <u-button>左下</u-button>
        </van-copy>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: right;">
        <van-copy value="需要 copy 的内容" placement="right-start">
            <u-button>右上</u-button>
        </van-copy>
        <van-copy value="需要 copy 的内容" placement="right">
            <u-button>右边</u-button>
        </van-copy>
        <van-copy value="需要 copy 的内容" placement="right-end">
            <u-button>右下</u-button>
        </van-copy>
    </u-linear-layout>
    <u-linear-layout justify="center" gap="small" style="clear: both;">
        <van-copy value="需要 copy 的内容" placement="bottom-start">
            <u-button>下左</u-button>
        </van-copy>
        <van-copy value="需要 copy 的内容" placement="bottom">
            <u-button>下边</u-button>
        </van-copy>
        <van-copy value="需要 copy 的内容" placement="bottom-end">
            <u-button>下右</u-button>
        </van-copy>
    </u-linear-layout>
</u-linear-layout>
```

#### 指令形式

``` html
<u-linear-layout direction="vertical" style="min-width: 300px; max-width: 550px;">
    <u-linear-layout justify="center" gap="small">
        <u-button v-copy.top-start="'需要 copy 的内容'">上左</u-button>
        <u-button v-copy.top="'需要 copy 的内容'">上边</u-button>
        <u-button v-copy.top-end="'需要 copy 的内容'">上右</u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: left">
        <u-button v-copy.left-start="'需要 copy 的内容'">左上</u-button>
        <u-button v-copy.left="'需要 copy 的内容'">左边</u-button>
        <u-button v-copy.left-end="'需要 copy 的内容'">左下</u-button>
    </u-linear-layout>
    <u-linear-layout direction="vertical" justify="center" style="width: 150px; float: right">
        <u-button v-copy.right-start="'需要 copy 的内容'">右上</u-button>
        <u-button v-copy.right="'需要 copy 的内容'">右边</u-button>
        <u-button v-copy.right-end="'需要 copy 的内容'">右下</u-button>
    </u-linear-layout>
    <u-linear-layout justify="center" gap="small" style="clear: both">
        <u-button v-copy.bottom-start="'需要 copy 的内容'">下左</u-button>
        <u-button v-copy.bottom="'需要 copy 的内容'">下边</u-button>
        <u-button v-copy.bottom-end="'需要 copy 的内容'">下右</u-button>
    </u-linear-layout>
</u-linear-layout>
```

### 提示时长

通过`hide-delay`属性设置提示时长。

#### tooltip 弹框

``` html
<u-linear-layout>
    <van-copy value="需要 copy 的内容" :hide-delay="500">
        <u-button>500毫秒</u-button>
    </van-copy>
    <van-copy value="需要 copy 的内容" :hide-delay="2000">
        <u-button>2秒</u-button>
    </van-copy>
    <van-copy value="需要 copy 的内容" :hide-delay="4000">
        <u-button>4秒</u-button>
    </van-copy>
</u-linear-layout>
```

#### toast 提示

``` html
<u-linear-layout>
    <van-copy value="需要 copy 的内容" :hide-delay="500" feedback="toast">
        <u-button>500毫秒</u-button>
    </van-copy>
    <van-copy value="需要 copy 的内容" :hide-delay="2000" feedback="toast">
        <u-button>2秒</u-button>
    </van-copy>
    <van-copy value="需要 copy 的内容" :hide-delay="4000" feedback="toast">
        <u-button>4秒</u-button>
    </van-copy>
</u-linear-layout>
```

#### 指令形式

在指令形式中，使用指令参数设置提示时长。

``` html
<u-button v-copy.toast:500="'需要 copy 的内容'">复制</u-button>
```

### 禁用状态

通过`disabled`属性禁用复制功能，仅针对复制组件本身。通过插槽设置的触发元素需要自己添加禁用状态。

``` html
<u-linear-layout>
    <van-copy value="需要 copy 的内容" disabled></van-copy>
    <van-copy value="需要 copy 的内容" disabled>
        <u-button disabled>复制</u-button>
    </van-copy>
</u-linear-layout>
```

#### 指令形式

在指令形式中，直接根据元素的`disabled`属性来判断。

``` html
<u-button v-copy="'需要 copy 的内容'" disabled>复制</u-button>
```
