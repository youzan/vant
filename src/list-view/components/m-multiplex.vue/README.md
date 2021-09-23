<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# MMultiplex 多选模式

- [示例](#示例)
    - [基本用法](#基本用法)
    - [双向绑定](#双向绑定)
    - [只读、禁用、禁用某一项](#只读-禁用-禁用某一项)
- [MMultiplex API](#mmultiplex-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [MMultiplexItem API](#mmultiplexitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events-2)

常见的多选模式。

## 示例
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

## MMultiplex API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | Array |  |  | 所有选中项的值 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<m-multiplex-item>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | boolean | 选中还是取消 |
| $event.item | boolean | 该选中项相关对象 |
| $event.itemVM | boolean | 该选中项子组件 |
| $event.oldValue | Array | 旧的所有选中项的值 |
| $event.oldItems | Array\<object\> | 旧的所有选中项相关对象的数组 |
| $event.oldVMs | Array\<MMultiplexItem\> | 旧的所有选中项子组件的数组 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MMultiplex | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Array | 所有选中项的值 |
| senderVM | MMultiplex | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | boolean | 选中还是取消 |
| $event.item | boolean | 该选中项相关对象 |
| $event.itemVM | boolean | 该选中项子组件 |
| $event.value | Array | 改变后的值 |
| $event.oldValue | Array | 旧的值 |
| $event.items | Array\<object\> | 所有选中项相关对象的数组 |
| $event.oldItems | Array\<object\> | 旧的所有选中项相关对象的数组 |
| $event.itemVMs | Array\<MMultiplexItem\> | 所有选中项子组件的数组 |
| $event.oldVMs | Array\<MMultiplexItem\> | 旧的所有选中项子组件的数组 |
| senderVM | MMultiplex | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | 所有选中项的值 |
| $event.items | Array\<object\> | 所有选中项相关对象的数组 |
| $event.itemVMs | Array\<MMultiplexItem\> | 所有选中项子组件的数组 |
| senderVM | MMultiplex | 发送事件实例 |

## MMultiplexItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 文本内容 |
| value | any |  |  | 此项的值 |
| selected | boolean |  | `false` | 是否选择此项 |
| disabled | boolean |  | `false` | 禁用此项 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Events

#### @click

点击此项时触发。与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | MMultiplexItem | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 此项的值 |
| $event.item | object | 此项的相关对象 |
| $event.itemVM | MMultiplexItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MMultiplexItem | 发送事件实例 |

