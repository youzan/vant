<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# MSinglex 单选模式

- [示例](#示例)
    - [基本用法](#基本用法)
    - [只读、禁用、禁用某一项](#只读-禁用-禁用某一项)
    - [可取消](#可取消)
    - [自动选择](#自动选择)
- [MSinglex API](#msinglex-api)
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)
- [MSinglexItem API](#msinglexitem-api)
    - [Props/Attrs](#propsattrs-2)
    - [Events](#events-2)

常见的单项选择模式，用于快速派生出像`<u-navbar>`、`<u-tabs>`这样的组件。

常见的单项选择模式，用于快速派生出像`<u-navbar>`、`<u-tabs>`这样的组件。

## 示例
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

## MSinglex API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| value.sync, v-model | any |  |  | 当前选择的值 |
| auto-select | boolean |  | `false` | 是否自动选择第一个非禁用的项 |
| cancelable | boolean |  | `false` | 是否可以取消选择 |
| router | boolean |  | `false` | 是否开启路由模式 |
| readonly | boolean |  | `false` | 是否只读 |
| disabled | boolean |  | `false` | 是否禁用 |

### Slots

#### (default)

插入`<m-singlex-item>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | MSinglexItem | 选择项子组件 |
| $event.oldVM | MSinglexItem | 旧的选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MSinglex | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | any | 选择项的值 |
| senderVM | MSinglex | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 改变后的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | MSinglexItem | 选择项子组件 |
| $event.oldVM | MSinglexItem | 旧的选择项子组件 |
| senderVM | MSinglex | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 选择项的值 |
| $event.oldValue | any | 旧的值 |
| $event.item | object | 选择项相关对象 |
| $event.oldItem | object | 旧的选择项相关对象 |
| $event.itemVM | MSinglexItem | 选择项子组件 |
| $event.oldVM | MSinglexItem | 旧的选择项子组件 |
| senderVM | MSinglex | 发送事件实例 |

## MSinglexItem API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| text | string |  |  | 文本内容 |
| value | any |  |  | 此项的值 |
| disabled | boolean |  | `false` | 禁用此项 |
| item | object |  |  | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Events

#### @click

点击此项时触发。与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | MSinglexItem | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | any | 此项的值 |
| $event.item | object | 此项的相关对象 |
| $event.itemVM | MSinglexItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MSinglexItem | 发送事件实例 |

