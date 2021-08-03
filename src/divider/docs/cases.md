### 基本用法

``` html
<m-singlex>
    <m-singlex-item>水杯</m-singlex-item>
    <m-singlex-item>咖啡</m-singlex-item>
    <m-singlex-item>坚果</m-singlex-item>
    <m-singlex-item>毛巾</m-singlex-item>
    <m-singlex-item>沙发</m-singlex-item>
</m-singlex>
```

### 选项值

#### 单向绑定

``` html
<m-singlex value="towel">
    <m-singlex-item value="cup">水杯</m-singlex-item>
    <m-singlex-item value="coffee">咖啡</m-singlex-item>
    <m-singlex-item value="nut">坚果</m-singlex-item>
    <m-singlex-item value="towel">毛巾</m-singlex-item>
    <m-singlex-item value="sofa">沙发</m-singlex-item>
</m-singlex>
```

#### 双向绑定

可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

``` vue
<template>
<u-linear-layout direction="vertical" gap="small">
    <m-singlex v-model="value">
        <m-singlex-item value="cup">水杯</m-singlex-item>
        <m-singlex-item value="coffee">咖啡</m-singlex-item>
        <m-singlex-item value="nut">坚果</m-singlex-item>
        <m-singlex-item value="towel">毛巾</m-singlex-item>
        <m-singlex-item value="sofa">沙发</m-singlex-item>
    </m-singlex>
    <m-singlex :value.sync="value">
        <m-singlex-item value="cup">水杯</m-singlex-item>
        <m-singlex-item value="coffee">咖啡</m-singlex-item>
        <m-singlex-item value="nut">坚果</m-singlex-item>
        <m-singlex-item value="towel">毛巾</m-singlex-item>
        <m-singlex-item value="sofa">沙发</m-singlex-item>
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

### 路由模式

``` html
<m-singlex router>
    <m-singlex-item to="/components/m-singlex">MSinglex</m-singlex-item>
    <m-singlex-item exact to="/components/m-singlex">MSinglex Exact</m-singlex-item>
    <m-singlex-item to="/components/m-singlex/cases">Cases</m-singlex-item>
    <m-singlex-item to="/components/m-multiplex">MMultiplex</m-singlex-item>
    <m-singlex-item to="/components/m-multiplex" disabled>MMultiplex Disabled</m-singlex-item>
    <m-singlex-item href="/">Href</m-singlex-item>
    <m-singlex-item href="/" disabled>Href Disabled</m-singlex-item>
</m-singlex>
```

``` html
<m-singlex router disabled>
    <m-singlex-item to="/components/m-singlex">MSinglex</m-singlex-item>
    <m-singlex-item exact to="/components/m-singlex">MSinglex Exact</m-singlex-item>
    <m-singlex-item to="/components/m-singlex/cases">Cases</m-singlex-item>
    <m-singlex-item to="/components/m-multiplex">MMultiplex</m-singlex-item>
    <m-singlex-item to="/components/m-multiplex" disabled>MMultiplex Disabled</m-singlex-item>
    <m-singlex-item href="/">Href</m-singlex-item>
    <m-singlex-item href="/" disabled>Href Disabled</m-singlex-item>
</m-singlex>
```

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" readonly>
            <m-singlex-item value="cup">水杯</m-singlex-item>
            <m-singlex-item value="coffee">咖啡</m-singlex-item>
            <m-singlex-item value="nut">坚果</m-singlex-item>
            <m-singlex-item value="towel">毛巾</m-singlex-item>
            <m-singlex-item value="sofa">沙发</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" disabled>
            <m-singlex-item value="cup">水杯</m-singlex-item>
            <m-singlex-item value="coffee">咖啡</m-singlex-item>
            <m-singlex-item value="nut">坚果</m-singlex-item>
            <m-singlex-item value="towel">毛巾</m-singlex-item>
            <m-singlex-item value="sofa">沙发</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel">
            <m-singlex-item value="cup">水杯</m-singlex-item>
            <m-singlex-item value="coffee">咖啡</m-singlex-item>
            <m-singlex-item value="nut" disabled>坚果</m-singlex-item>
            <m-singlex-item value="towel" disabled>毛巾</m-singlex-item>
            <m-singlex-item value="sofa">沙发</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
</u-grid-layout>
```

### 可取消

`cancelable`属性开启时，在同一个选项上点击两次，会取消原来的选择。

``` html
<m-singlex value="towel" cancelable>
    <m-singlex-item value="cup">水杯</m-singlex-item>
    <m-singlex-item value="coffee">咖啡</m-singlex-item>
    <m-singlex-item value="nut" disabled>坚果</m-singlex-item>
    <m-singlex-item value="towel">毛巾</m-singlex-item>
    <m-singlex-item value="sofa">沙发</m-singlex-item>
</m-singlex>
```

### 自动选择

在初始化或选项变更时，自动选择第一个非禁用的项。

``` html
<m-singlex auto-select>
    <m-singlex-item value="cup" disabled>水杯</m-singlex-item>
    <m-singlex-item value="coffee" disabled>咖啡</m-singlex-item>
    <m-singlex-item value="nut">坚果</m-singlex-item>
    <m-singlex-item value="towel">毛巾</m-singlex-item>
    <m-singlex-item value="sofa">沙发</m-singlex-item>
</m-singlex>
```

### 更新列表

``` vue
<template>
<div>
    <m-singlex v-model="value">
        <m-singlex-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</m-singlex-item>
    </m-singlex>
    <span>value: {{ value }}</span>
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
            value: 'toothbrush',
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

### 同步顺序

``` vue
<template>
<div>
    <m-singlex v-model="value">
        <m-singlex-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</m-singlex-item>
    </m-singlex>
    <span>value: {{ value }}</span>
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
            ],
            value: 'toothbrush',
        };
    },
    methods: {
        updateList() {
            this.list.unshift({ value: 'towel', text: '毛巾' });
            this.list.unshift({ value: 'sofa', text: '沙发' });
        },
    },
};
</script>
```
