### 基本用法

下面展示了单选模式的一些基本特性，选择和禁用等功能。

``` html
<m-singlex>
    <m-singlex-item text="水杯"></m-singlex-item>
    <m-singlex-item text="咖啡"></m-singlex-item>
    <m-singlex-item disabled text="坚果"></m-singlex-item>
    <m-singlex-item text="毛巾"></m-singlex-item>
    <m-singlex-item text="沙发"></m-singlex-item>
</m-singlex>
```

#### 双向绑定

可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-singlex v-model="value">
        <m-singlex-item value="cup" text="水杯"></m-singlex-item>
        <m-singlex-item value="coffee" text="咖啡"></m-singlex-item>
        <m-singlex-item value="nut" text="坚果"></m-singlex-item>
        <m-singlex-item value="towel" text="毛巾"></m-singlex-item>
        <m-singlex-item value="sofa" text="沙发"></m-singlex-item>
    </m-singlex>
    <m-singlex :value.sync="value">
        <m-singlex-item value="cup" text="水杯"></m-singlex-item>
        <m-singlex-item value="coffee" text="咖啡"></m-singlex-item>
        <m-singlex-item value="nut" text="坚果"></m-singlex-item>
        <m-singlex-item value="towel" text="毛巾"></m-singlex-item>
        <m-singlex-item value="sofa" text="沙发"></m-singlex-item>
    </m-singlex>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
```

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" readonly>
            <m-singlex-item value="cup" text="水杯"></m-singlex-item>
            <m-singlex-item value="coffee" text="咖啡"></m-singlex-item>
            <m-singlex-item value="nut" text="坚果"></m-singlex-item>
            <m-singlex-item value="towel" text="毛巾"></m-singlex-item>
            <m-singlex-item value="sofa" text="沙发"></m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" disabled>
            <m-singlex-item value="cup" text="水杯"></m-singlex-item>
            <m-singlex-item value="coffee" text="咖啡"></m-singlex-item>
            <m-singlex-item value="nut" text="坚果"></m-singlex-item>
            <m-singlex-item value="towel" text="毛巾"></m-singlex-item>
            <m-singlex-item value="sofa" text="沙发"></m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel">
            <m-singlex-item value="cup" text="水杯"></m-singlex-item>
            <m-singlex-item value="coffee" text="咖啡"></m-singlex-item>
            <m-singlex-item value="nut" disabled text="坚果"></m-singlex-item>
            <m-singlex-item value="towel" disabled text="毛巾"></m-singlex-item>
            <m-singlex-item value="sofa" text="沙发"></m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
</u-grid-layout>
```

### 可取消

`cancelable`属性开启时，在同一个选项上点击两次，会取消原来的选择。

``` html
<m-singlex value="towel" cancelable>
    <m-singlex-item value="cup" text="水杯"></m-singlex-item>
    <m-singlex-item value="coffee" text="咖啡"></m-singlex-item>
    <m-singlex-item value="nut" disabled text="坚果"></m-singlex-item>
    <m-singlex-item value="towel" text="毛巾"></m-singlex-item>
    <m-singlex-item value="sofa" text="沙发"></m-singlex-item>
</m-singlex>
```

### 自动选择

在初始化或选项变更时，自动选择第一个非禁用的项。

``` html
<m-singlex auto-select>
    <m-singlex-item value="cup" disabled text="水杯"></m-singlex-item>
    <m-singlex-item value="coffee" disabled text="咖啡"></m-singlex-item>
    <m-singlex-item value="nut" text="坚果"></m-singlex-item>
    <m-singlex-item value="towel" text="毛巾"></m-singlex-item>
    <m-singlex-item value="sofa" text="沙发"></m-singlex-item>
</m-singlex>
```
