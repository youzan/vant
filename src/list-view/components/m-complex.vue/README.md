<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# MComplex 复合模式

- [示例](#示例)
    - [基本用法](#基本用法)
    - [选项值](#选项值)
    - [只读、禁用、禁用某一项](#只读-禁用-禁用某一项)
- [MComplex API](#mcomplex-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [MComplexItem API](#mcomplexitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events-2)

一个组件中，通过`multiple`属性切换单选还是多选的模式。

## 示例
### 基本用法

下面展示了复合模式的一些基本特性。

``` html
<m-complex>
    <m-complex-item text="水杯"></m-complex-item>
    <m-complex-item text="咖啡"></m-complex-item>
    <m-complex-item disabled text="坚果"></m-complex-item>
    <m-complex-item text="毛巾"></m-complex-item>
    <m-complex-item text="沙发"></m-complex-item>
</m-complex>
```

### 选项值

绑定`value`属性，可以用`v-model`或`:value.sync`。

#### 单选模式

``` vue
<template>
<m-complex v-model="value">
    <m-complex-item value="cup" text="水杯"></m-complex-item>
    <m-complex-item value="coffee" text="咖啡"></m-complex-item>
    <m-complex-item value="nut" text="坚果"></m-complex-item>
    <m-complex-item value="towel" text="毛巾"></m-complex-item>
    <m-complex-item value="sofa" text="沙发"></m-complex-item>
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
    <m-complex-item value="cup" text="水杯"></m-complex-item>
    <m-complex-item value="coffee" text="咖啡"></m-complex-item>
    <m-complex-item value="nut" text="坚果"></m-complex-item>
    <m-complex-item value="towel" text="毛巾"></m-complex-item>
    <m-complex-item value="sofa" text="沙发"></m-complex-item>
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
            <m-complex-item value="cup" text="水杯"></m-complex-item>
            <m-complex-item value="coffee" text="咖啡"></m-complex-item>
            <m-complex-item value="nut" text="坚果"></m-complex-item>
            <m-complex-item value="towel" text="毛巾"></m-complex-item>
            <m-complex-item value="sofa" text="沙发"></m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel" disabled>
            <m-complex-item value="cup" text="水杯"></m-complex-item>
            <m-complex-item value="coffee" text="咖啡"></m-complex-item>
            <m-complex-item value="nut" text="坚果"></m-complex-item>
            <m-complex-item value="towel" text="毛巾"></m-complex-item>
            <m-complex-item value="sofa" text="沙发"></m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel">
            <m-complex-item value="cup" text="水杯"></m-complex-item>
            <m-complex-item value="coffee" text="咖啡"></m-complex-item>
            <m-complex-item value="nut" disabled text="坚果"></m-complex-item>
            <m-complex-item value="towel" disabled text="毛巾"></m-complex-item>
            <m-complex-item value="sofa" text="沙发"></m-complex-item>
        </m-complex>
    </u-grid-layout-column>
</u-grid-layout>
```

其它与 [MSinglex](#components/m-singlex) 和 [MMultiplex](#components/m-multiplex) 相同的。

## MComplex API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any |  |  | 当前选择的值 |
| auto-select | boolean |  | `false` | 是否自动选择第一个非禁用的项 |
| cancelable | boolean |  | `false` | 是否可以取消选择 |
| multiple | boolean |  | `false` | 是否切换为多选模式 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<m-complex-item>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.itemVM | MComplexItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MComplex | 发送事件实例 |

#### @input

选择某一项时触发，仅在单选模式中生效

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | MComplex | 发送事件实例 |

#### @select

选择某一项时触发。单选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | MComplexItem | 选择项子组件 |
| $event.oldVM | MComplexItem | 旧的选择项子组件 |
| senderVM | MComplex | 发送事件实例 |

#### @select

选择某一项时触发。多选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.selected | boolean | 选中还是取消 |
| $event.item | boolean | 该选中项相关对象 |
| $event.itemVM | boolean | 该选中项子组件 |
| $event.value | Array | 改变后的值 |
| $event.oldValue | Array | 旧的值 |
| $event.items | Array\<object\> | 所有选中项相关对象的数组 |
| $event.oldItems | Array\<object\> | 旧的所有选中项相关对象的数组 |
| $event.itemVMs | Array\<MComplexItem\> | 所有选中项子组件的数组 |
| $event.oldVMs | Array\<MComplexItem\> | 旧的所有选中项子组件的数组 |
| senderVM | MComplex | 发送事件实例 |

#### @change

选择值改变时触发。单选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | MComplexItem | 选择项子组件 |
| $event.oldVM | MComplexItem | 旧的选择项子组件 |
| senderVM | MComplex | 发送事件实例 |

#### @change

选择值改变时触发。多选模式中：

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Array | 所有选中项的值 |
| $event.items | Array\<object\> | 所有选中项相关对象的数组 |
| $event.itemVMs | Array\<MComplexItem\> | 所有选中项子组件的数组 |
| senderVM | MComplex | 发送事件实例 |

## MComplexItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 文本内容 |
| value | any |  |  | 此项的值 |
| selected | boolean |  | `false` | 是否选中此项 |
| disabled | boolean |  | `false` | 禁用此项 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | MComplexItem | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 此项的值 |
| $event.item | object | 此项的相关对象 |
| $event.itemVM | MComplexItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MComplexItem | 发送事件实例 |

