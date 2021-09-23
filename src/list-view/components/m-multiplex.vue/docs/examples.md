### 基本用法

下面展示了多选模式的一些基本特性，选择和禁用等功能。

``` html
<m-multiplex>
    <m-multiplex-item text="水杯"></m-multiplex-item>
    <m-multiplex-item text="咖啡"></m-multiplex-item>
    <m-multiplex-item disabled text="坚果"></m-multiplex-item>
    <m-multiplex-item text="毛巾"></m-multiplex-item>
    <m-multiplex-item text="沙发"></m-multiplex-item>
</m-multiplex>
```

### 双向绑定

可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-multiplex v-model="values">
        <m-multiplex-item value="cup" text="水杯"></m-multiplex-item>
        <m-multiplex-item value="coffee" text="咖啡"></m-multiplex-item>
        <m-multiplex-item value="nut" text="坚果"></m-multiplex-item>
        <m-multiplex-item value="towel" text="毛巾"></m-multiplex-item>
        <m-multiplex-item value="sofa" text="沙发"></m-multiplex-item>
    </m-multiplex>
    <m-multiplex :value.sync="values">
        <m-multiplex-item value="cup" text="水杯"></m-multiplex-item>
        <m-multiplex-item value="coffee" text="咖啡"></m-multiplex-item>
        <m-multiplex-item value="nut" text="坚果"></m-multiplex-item>
        <m-multiplex-item value="towel" text="毛巾"></m-multiplex-item>
        <m-multiplex-item value="sofa" text="沙发"></m-multiplex-item>
    </m-multiplex>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            values: ['nut', 'towel'],
        };
    },
};
</script>
```

#### selected 双向绑定

也可以通过每一项的 selected 属性进行双向绑定。

``` vue
<template>
<m-multiplex>
    <m-multiplex-item v-for="item in list"
        :key="item.value" :text="item.text" :value="item.value" :selected.sync="item.selected"></m-multiplex-item>
</m-multiplex>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { text: '水杯', value: 'cup', selected: false },
                { text: '咖啡', value: 'coffee', selected: false },
                { text: '坚果', value: 'nut', selected: true },
                { text: '毛巾', value: 'towel', selected: true },
                { text: '沙发', value: 'sofa', selected: false },
            ],
        };
    },
};
</script>
```

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']" readonly>
            <m-multiplex-item value="cup" text="水杯"></m-multiplex-item>
            <m-multiplex-item value="coffee" text="咖啡"></m-multiplex-item>
            <m-multiplex-item value="nut" text="坚果"></m-multiplex-item>
            <m-multiplex-item value="towel" text="毛巾"></m-multiplex-item>
            <m-multiplex-item value="sofa" text="沙发"></m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']" disabled>
            <m-multiplex-item value="cup" text="水杯"></m-multiplex-item>
            <m-multiplex-item value="coffee" text="咖啡"></m-multiplex-item>
            <m-multiplex-item value="nut" text="坚果"></m-multiplex-item>
            <m-multiplex-item value="towel" text="毛巾"></m-multiplex-item>
            <m-multiplex-item value="sofa" text="沙发"></m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']">
            <m-multiplex-item value="cup" text="水杯"></m-multiplex-item>
            <m-multiplex-item value="coffee" text="咖啡"></m-multiplex-item>
            <m-multiplex-item value="nut" disabled text="坚果"></m-multiplex-item>
            <m-multiplex-item value="towel" disabled text="毛巾"></m-multiplex-item>
            <m-multiplex-item value="sofa" text="沙发"></m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
</u-grid-layout>
```
