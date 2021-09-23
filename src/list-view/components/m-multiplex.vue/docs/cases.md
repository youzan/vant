### 基本用法

``` html
<m-multiplex>
    <m-multiplex-item>水杯</m-multiplex-item>
    <m-multiplex-item>咖啡</m-multiplex-item>
    <m-multiplex-item>坚果</m-multiplex-item>
    <m-multiplex-item>毛巾</m-multiplex-item>
    <m-multiplex-item>沙发</m-multiplex-item>
</m-multiplex>
```

### 双向绑定

可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-multiplex v-model="values">
        <m-multiplex-item value="cup">水杯</m-multiplex-item>
        <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
        <m-multiplex-item value="nut">坚果</m-multiplex-item>
        <m-multiplex-item value="towel">毛巾</m-multiplex-item>
        <m-multiplex-item value="sofa">沙发</m-multiplex-item>
    </m-multiplex>
    <m-multiplex :value.sync="values">
        <m-multiplex-item value="cup">水杯</m-multiplex-item>
        <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
        <m-multiplex-item value="nut">坚果</m-multiplex-item>
        <m-multiplex-item value="towel">毛巾</m-multiplex-item>
        <m-multiplex-item value="sofa">沙发</m-multiplex-item>
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

#### selected 单向绑定

``` vue
<template>
<m-multiplex>
    <m-multiplex-item value="cup">水杯</m-multiplex-item>
    <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
    <m-multiplex-item value="nut" selected>坚果</m-multiplex-item>
    <m-multiplex-item value="towel" selected>毛巾</m-multiplex-item>
    <m-multiplex-item value="sofa">沙发</m-multiplex-item>
</m-multiplex>
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

``` vue
<template>
<m-multiplex>
    <m-multiplex-item v-for="item in list"
        :key="item.value" :value="item.value" :selected.sync="item.selected">
        {{ item.text }}</m-multiplex-item>
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

### 保持顺序

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-multiplex v-model="values1">
        <m-multiplex-item value="cup">水杯</m-multiplex-item>
        <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
        <m-multiplex-item value="nut">坚果</m-multiplex-item>
        <m-multiplex-item value="towel">毛巾</m-multiplex-item>
        <m-multiplex-item value="sofa">沙发</m-multiplex-item>
    </m-multiplex>
    <m-multiplex v-model="values2" keep-order>
        <m-multiplex-item value="cup">水杯</m-multiplex-item>
        <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
        <m-multiplex-item value="nut">坚果</m-multiplex-item>
        <m-multiplex-item value="towel">毛巾</m-multiplex-item>
        <m-multiplex-item value="sofa">沙发</m-multiplex-item>
    </m-multiplex>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            values1: ['towel', 'nut'],
            values2: ['towel', 'nut'],
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
            <m-multiplex-item value="cup">水杯</m-multiplex-item>
            <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
            <m-multiplex-item value="nut">坚果</m-multiplex-item>
            <m-multiplex-item value="towel">毛巾</m-multiplex-item>
            <m-multiplex-item value="sofa">沙发</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']" disabled>
            <m-multiplex-item value="cup">水杯</m-multiplex-item>
            <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
            <m-multiplex-item value="nut">坚果</m-multiplex-item>
            <m-multiplex-item value="towel">毛巾</m-multiplex-item>
            <m-multiplex-item value="sofa">沙发</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex :value="['nut', 'towel']">
            <m-multiplex-item value="cup">水杯</m-multiplex-item>
            <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
            <m-multiplex-item value="nut" disabled>坚果</m-multiplex-item>
            <m-multiplex-item value="towel" disabled>毛巾</m-multiplex-item>
            <m-multiplex-item value="sofa">沙发</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
</u-grid-layout>
```

#### 更新列表

``` vue
<template>
<div>
    <m-multiplex v-model="values">
        <m-multiplex-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</m-multiplex-item>
    </m-multiplex>
    <u-button @click="updateList">更新列表</u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { value: 'cup', text: '水杯' },
                { value: 'coffee', text: '咖啡' },
                { value: 'nut', text: '坚果' },
                { value: 'towel', text: '毛巾' },
                { value: 'sofa', text: '沙发' },
            ],
            values: ['nut', 'towel', 'toothbrush'],
        };
    },
    methods: {
        updateList() {
            this.list = [
                { value: 'cup', text: '水杯' },
                { value: 'coffee', text: '咖啡' },
                { value: 'nut', text: '坚果' },
                { value: 'toothbrush', text: '牙刷' },
            ];
        },
    },
};
</script>
```
