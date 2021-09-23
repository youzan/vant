<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# MParent 父子模式

- [概述](#undefined)
    - [用法](#用法)
- [示例](#示例)
    - [基本用法](#基本用法)
- [MParent API](#mparent-api)
    - [Options](#options)
    - [Data](#data)
    - [Slots](#slots)
- [MChild API](#mchild-api)
    - [Options](#options-2)
    - [Data](#data-2)
    - [Slots](#slots-2)

本对 Mixin：MParent 和 MChild，对常见的类似`<u-tabs>`和`<u-tab>`一对嵌套父子组件的场景进行了抽象，用于快速开发和代码借鉴。

### 用法

- 在继承 MParent 的组件 Options 中，补充声明子组件的 `childName`字段
- 在继承 MChild 的组件 Options 中，补充声明父组件的 `parentName`字段

父组件会将多个子组件收集在`itemVMs`数组中，子组件将父组件标记为`parentVM`变量。这段过程发生在组件的`created`阶段。在`destroyed`阶段回收这些数据。

## 示例
### 基本用法

``` html
<m-parent>
    <m-child>水杯</m-child>
    <m-child>咖啡</m-child>
    <m-child>坚果</m-child>
</m-parent>
```

## MParent API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| childName | string | `'m-child'` | 子组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| itemVMs | Array\<MChild\> | `[]` | 子组件集合 |

### Slots

#### (default)

插入`<m-child>`子组件。

## MChild API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| parentName | string | `'m-parent'` | 父组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| parentVM | MParent |  | 父组件实例 |

### Slots

#### (default)

插入文本或 HTML。

