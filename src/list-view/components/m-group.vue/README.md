<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# MGroupParent 分组模式

- [概述](#undefined)
    - [用法](#用法)
- [示例](#示例)
    - [分组](#分组)
- [MGroupParent API](#mgroupparent-api)
    - [Options](#options)
    - [Props/Attrs](#propsattrs)
    - [Data](#data)
    - [Events](#events)
    - [Methods](#methods)
- [MGroup API](#mgroup-api)
    - [Options](#options-2)
    - [Props/Attrs](#propsattrs-2)
    - [Data](#data-2)
    - [Slots](#slots)
    - [Events](#events-2)
- [MChild API](#mchild-api)
    - [Options](#options-3)

在父子组件的模式中，有时会遇到对子组件进行分组和折叠场景。MGroup 对这种模式进行了抽象，用于快速开发和代码借鉴。

### 用法

- 继承 MParent 的组件，同时要继承 MGroupParent，补充声明分组组件的 `groupName`字段
- 在继承 MChild 的组件 Options 中，补充声明分组组件的 `groupName`字段
- 在继承 MGroup 的组件 Options 中，补充声明父组件的 `parentName`字段，补充声明父组件的 `childName`字段

父组件会将多个分组组件收集在`groupVMs`数组中，分组组件会将多个子组件收集在`itemVMs`数组中，同时将父组件标记为`parentVM`变量。这段过程发生在组件的`created`阶段。在`destroyed`阶段回收这些数据。

## 示例

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <m-parent>
                <m-group title="洗具">
                    <m-child>毛巾</m-child>
                    <m-child>牙刷</m-child>
                </m-group>
                <m-group title="杯具">
                    <m-child>牙缸</m-child>
                    <m-child>水杯</m-child>
                </m-group>
                <m-group title="餐具">
                    <m-child>筷子</m-child>
                    <m-child>碗</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

## MGroupParent API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| groupName | string | `'m-group'` | 分组组件的名称 |

### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| collapsible | boolean |  | `false` | 分组是否可以折叠 |
| accordion | boolean |  | `false` | 是否每次只会展开一个分组 |
| expand-trigger | string |  | `'click'` | 展开/折叠的触发方式。可选值：`'click'`表示整行点击均可触发、`'click-expander'`表示仅点击小箭头时触发 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| groupVMs | Array\<MGroup\> | `[]` | 分组组件集合 |

### Events

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | 展开/折叠状态 |
| $event.groupVM | MGroup | 分组组件 |
| senderVM | MGroupParent | 发送事件实例 |

Methods

#### toggleAll(expanded)

展开/折叠所有分组

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| expanded | boolean |  | 展开/折叠 |

## MGroup API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| parentName | string | `'m-parent'` | 父组件的名称 |
| childName | string | `'m-child'` | 子组件的名称 |

### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| title | string |  |  | 显示的标题 |
| collapsible | boolean |  |  | `false` |
| expanded.sync | boolean |  | `false` | 展开/折叠状态 |
| disabled | boolean |  | `false` | 是否禁用。禁用时无法展开/折叠 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| parentVM | MParent |  | 父组件实例 |
| itemVMs | Array\<MChild\> | `[]` | 子组件集合 |

### Slots

#### (default)

插入`<m-child>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

### Events

#### @before-toggle

展开/折叠此分组前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | 展开/折叠状态 |
| $event.groupVM | MGroup | 分组组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |
| senderVM | MGroup | 发送事件实例 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | boolean | 展开/折叠状态 |
| $event.groupVM | MGroup | 分组组件 |
| senderVM | MGroup | 发送事件实例 |

## MChild API
### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| groupName | string | `'m-group'` | 分组组件的名称 |

