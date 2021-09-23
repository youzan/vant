### 基本用法

``` html
<m-complex>
    <m-complex-item>水杯</m-complex-item>
    <m-complex-item>咖啡</m-complex-item>
    <m-complex-item>坚果</m-complex-item>
    <m-complex-item>毛巾</m-complex-item>
    <m-complex-item>沙发</m-complex-item>
</m-complex>
```

### 选项值

#### 单选模式

``` vue
<template>
<m-complex v-model="value">
    <m-complex-item value="cup">水杯</m-complex-item>
    <m-complex-item value="coffee">咖啡</m-complex-item>
    <m-complex-item value="nut">坚果</m-complex-item>
    <m-complex-item value="towel">毛巾</m-complex-item>
    <m-complex-item value="sofa">沙发</m-complex-item>
</m-complex>
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

#### 多选模式

``` vue
<template>
<m-complex multiple v-model="values">
    <m-complex-item value="cup">水杯</m-complex-item>
    <m-complex-item value="coffee">咖啡</m-complex-item>
    <m-complex-item value="nut">坚果</m-complex-item>
    <m-complex-item value="towel">毛巾</m-complex-item>
    <m-complex-item value="sofa">沙发</m-complex-item>
</m-complex>
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

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-complex value="towel" readonly>
            <m-complex-item value="cup">水杯</m-complex-item>
            <m-complex-item value="coffee">咖啡</m-complex-item>
            <m-complex-item value="nut">坚果</m-complex-item>
            <m-complex-item value="towel">毛巾</m-complex-item>
            <m-complex-item value="sofa">沙发</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel" disabled>
            <m-complex-item value="cup">水杯</m-complex-item>
            <m-complex-item value="coffee">咖啡</m-complex-item>
            <m-complex-item value="nut">坚果</m-complex-item>
            <m-complex-item value="towel">毛巾</m-complex-item>
            <m-complex-item value="sofa">沙发</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel">
            <m-complex-item value="cup">水杯</m-complex-item>
            <m-complex-item value="coffee">咖啡</m-complex-item>
            <m-complex-item value="nut" disabled>坚果</m-complex-item>
            <m-complex-item value="towel" disabled>毛巾</m-complex-item>
            <m-complex-item value="sofa">沙发</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
</u-grid-layout>
```

### 可取消

尝试在同一个选项上点击两次。

``` html
<m-complex value="towel" cancelable>
    <m-complex-item value="cup">水杯</m-complex-item>
    <m-complex-item value="coffee" disabled>咖啡</m-complex-item>
    <m-complex-item value="nut">坚果</m-complex-item>
    <m-complex-item value="towel">毛巾</m-complex-item>
    <m-complex-item value="sofa">沙发</m-complex-item>
</m-complex>
```

### 自动选择

自动选择第一个非禁用的项。

``` html
<m-complex auto-select>
    <m-complex-item value="cup" disabled>水杯</m-complex-item>
    <m-complex-item value="coffee" disabled>咖啡</m-complex-item>
    <m-complex-item value="nut">坚果</m-complex-item>
    <m-complex-item value="towel">毛巾</m-complex-item>
    <m-complex-item value="sofa">沙发</m-complex-item>
</m-complex>
```
