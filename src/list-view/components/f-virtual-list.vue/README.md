<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# FVirtualList 虚拟列表

- [示例](#示例)
    - [基本用法](#基本用法)
    - [设置高度](#设置高度)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Data](#data)
    - [Computed](#computed)
    - [Slots](#slots)
    - [Events](#events)

用于提升大数据量列表的性能。支持自动计算列表项高度。

## 示例
### 基本用法

在普通的使用`v-for`的列表渲染模板基础上，只需要完成两步即可改造成虚拟列表：

- 将外层列表容器修改为`f-virtual-list`组件。
- 将含有全部数据的列表传入`list`属性。

``` diff
- <div :class="$style.list">
+ <f-virtual-list :class="$style.list" :list="list">
    <div :class="$style.item" v-for="item in list">...</div>
- </div>
+ </f-virtual-list>
```

下面是一个具体的示例，在不知道列表项高度的情况下，虚拟列表组件会自动计算。

``` vue
<template>
<f-virtual-list :class="$style.list" :list="list">
    <div :class="$style.item" v-for="item in list" :key="item.id" :even="!!(item.id%2)">
        <div :class="$style.line" v-for="line in item.content" :key="line">{{ line }}</div>
    </div>
</f-virtual-list>
</template>
<script>
export default {
    data() {
        const list = [];
        for (let i = 0; i < 200000; i++) {
            const item = {
                content: [],
            };
            const lines = Math.floor(Math.random()*4) + 1;
            for (let j = 0; j < lines; j++)
                item.content.push('Index ' + i + ' - Line ' + (j + 1));

            item.id = i;
            list.push(item);
        }

        return {
            list,
        };
    },
};
</script>
<style module>
.list {
    border: 1px solid var(--border-color-base);
    height: 400px;
}

.item[even] {
    background: var(--background-color-base);
}

.line {
    padding: 2px 12px;
}
</style>
```

### 设置高度

如果每个列表项的高度是个固定值，可以设置该属性，能够减少由获取高度产生的性能开销。

``` vue
<template>
<f-virtual-list :class="$style.list" :list="list" :item-height="78">
    <div :class="$style.item" v-for="item in list" :key="item.id" :even="!!(item.id%2)">
        <div :class="$style.line" v-for="line in item.content" :key="line">{{ line }}</div>
    </div>
</f-virtual-list>
</template>
<script>
export default {
    data() {
        const list = [];
        for (let i = 0; i < 200000; i++) {
            const item = {
                content: [],
            };
            const lines = 3;
            for (let j = 0; j < lines; j++)
                item.content.push('Index ' + i + ' - Line ' + (j + 1));

            item.id = i;
            list.push(item);
        }

        return {
            list,
        };
    },
};
</script>
<style module>
.list {
    border: 1px solid var(--border-color-base);
    height: 400px;
}

.item[even] {
    background: var(--background-color-base);
}

.line {
    padding: 2px 12px;
}
</style>
```



## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| list | Array\<Object\> |  |  | 含有全部数据的列表。用于获取渲染的长度和位置等信息。 |
| item-height | number |  |  | 默认可以不填，会自动计算和缓存每个列表项的高度，用于处理列表项高度不确定的情形。如果每个列表项的高度是个固定值，可以设置该属性，能够减少由获取高度产生的性能开销。 |
| virtual | boolean |  | `true` | 是否开启虚拟列表 |
| virtual-count | number |  | `60` | 虚拟列表实际渲染的节点数。该数字不宜过大，一般在 200 以内为好。 |
| throttle | number |  | `60` | 滚动截流的毫秒数。在该时间内最多更新一次虚拟列表。 |
| tag-name | string |  | `'div'` | 设置列表容器的标签名 |
| list-key | string |  | `'list'` | 列表的键。一般用于 mixin 方式，修改全部数据的列表来源。 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| virtualIndex | number | `0` | 实际渲染的首个列表项索引 |
| virtualTop | number | `0` | 虚拟的顶部高度 |
| virtualBottom | number | `0` | 虚拟的底部高度 |

### Computed

| Computed | Type | Description |
| -------- | ---- | ----------- |
| virtualList | Array\<Object\> | 实际渲染的列表 |
| virtualSlot | Array\<VNode\> | 实际渲染的 VNode 节点 |

### Slots

#### (default)

插入使用 v-for 遍历的列表项。

### Events

#### @scroll

修改时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Event | 原生滚动事件对象 |
| senderVM | FVirtualList | 发送事件实例 |

#### @virtual-scroll

每次处理更新虚拟滚动时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| virtualIndex | number | 实际渲染的首个列表项索引 |
| virtualCount | number | 虚拟列表实际渲染的节点数 |
| virtualTop | number | 虚拟的顶部高度 |
| virtualBottom | number | 虚拟的底部高度 |
| senderVM | FVirtualList | 发送事件实例 |

