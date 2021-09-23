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


