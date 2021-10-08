#### data-source 函数

向`data-source`属性中传入一个加载函数，这种方式会自带 loading 加载、error 错误等效果，并且在下文中的前后端分页、过滤（搜索）等功能均需要采用这种传入数据的方式。

加载函数的格式是这样的

``` ts
(params) => Promise<Array<Item> | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>
```

组件会给加载函数提供过滤（搜索）、分页、加载更多等参数，要求返回一个如上的 Promise。

``` vue
<template>
    <div style="height: 600px;">
        <van-list-view :data-source="load">
            <template #item="scope">
                <van-cell :title="scope.item.text" isLink></van-cell>
            </template>
        </van-list-view>
    </div>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟数据服务
const mockService = {
    load() {
        return mockRequest([
            { text: 'Batch', value: 'bat' },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' },
            { text: 'CSS', value: 'css' },
            { text: 'Clojure', value: 'clojure' },
            { text: 'CoffeeScript', value: 'coffeescript' },
            { text: 'Coq', value: 'coq' },
            { text: 'Diff', value: 'diff' },
            { text: 'Dockerfile', value: 'dockerfile' },
            { text: 'F#', value: 'fshape' },
            { text: 'Go', value: 'go' },
            { text: 'Groovy', value: 'groovy' },
            { text: 'HLSL', value: 'hlsl' },
            { text: 'HTML', value: 'html' },
            { text: 'Handlebars', value: 'Handlebars' },
            { text: 'Ignore', value: 'ignore' },
            { text: 'Ini', value: 'ini' },
            { text: 'JSON', value: 'json' },
            { text: 'Java', value: 'java' },
            { text: 'JavaScript', value: 'javascript' },
            { text: 'Jinja', value: 'jinja' },
            { text: 'Jupyter', value: 'jupyter' },
            { text: 'Less', value: 'less' },
            { text: 'Log', value: 'log' },
            { text: 'Lua', value: 'lua' },
            { text: 'Makefile', value: 'makefile' },
            { text: 'Markdown', value: 'markdown' },
            { text: 'Objective-C', value: 'objective-c' },
            { text: 'Objective-C++', value: 'objective-cpp' },
            { text: 'PHP', value: 'php' },
            { text: 'Perl', value: 'perl' },
            { text: 'PowerShell', value: 'powershell' },
            { text: 'Properties', value: 'properties' },
            { text: 'Pug', value: 'jade' },
            { text: 'Python', value: 'python' },
            { text: 'R', value: 'r' },
            { text: 'Razor', value: 'razor' },
            { text: 'Ruby', value: 'ruby' },
            { text: 'Rust', value: 'rust' },
            { text: 'SCSS', value: 'scss' },
            { text: 'SQL', value: 'sql' },
            { text: 'SVG', value: 'svg' },
            { text: 'Shaderlab', value: 'shaderlab' },
            { text: 'Shell Script', value: 'shellscript' },
            { text: 'Swift', value: 'swift' },
            { text: 'TypeScript', value: 'typescript' },
            { text: 'Visual Basic', value: 'vb' },
            { text: 'Vue', value: 'vue' },
            { text: 'XML', value: 'xml' },
            { text: 'XSL', value: 'xsl' },
            { text: 'YAML', value: 'yaml' },
        ]);
    },
};

export default {
    data() {
        return {
            value: 'cpp',
        };
    },
    methods: {
        load() {
            return mockService.load();
        },
    }
};
</script>
<style module>
.result {
    height: var(--list-view-height);
    padding: var(--list-view-item-padding);
    border: var(--border-width-base) solid var(--border-color-base);
    color: var(--color-light);
}
</style>
```
#### 加载更多

设置`pageable="load-more"`可开启手动点击加载更多功能，设置`pageable="auto-more"`可开启滚动自动加载更多功能。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <van-list-view multiple show-head title="手动点击加载更多" v-model="values" :data-source="list" pageable="load-more" style="height: 500px;"></van-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <van-list-view multiple show-head title="滚动自动加载更多" v-model="values" :data-source="list" pageable="auto-more"
        style="height: 500px;"></van-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 500 条数据
        let list = [];
        for (let i = 1; i <= 500; i++)
            list.push('item' + i);
        list = list.map((text) => ({ text, value: text }));

        return {
            value: undefined,
            values: [],
            list,
        };
    },
};
</script>
```

### 后端分页与加载更多

如果需要通过后端接口进行分页或加载更多，在开启`pageable`属性的基础上，还要开启`remote-paging`属性。

这时需要用最前面提到的 data-source 函数的方式传入数据。

加载函数的格式是这样的：

``` ts
({ paging: {
    size: number, // 每页大小
    number: number, // 页数。从1开始计
    offset: number, // 偏移量：(number - 1) * size
    limit: number, // 同 size
} }) => Promise<Array<Item> | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>
```

组件会给加载函数提供分页器或加载位置的参数，要求返回如上的一个 Promise。翻页是否到底，如果 Promise 的结果为：

- `{ data: Array<Item>, total: number }`，根据 total 数值判断是否翻到最底部
- `{ data: Array<Item>, last: boolean }`，根据 last 布尔值判断是否为最后一次
- `Array<Item>`，则根据数组为空判断为最后一次

可以看下面的示例，在数据栏中`result?`为最新一次模拟请求的返回数据。

``` vue
<template>
<u-grid-layout :repeat="3">
   <u-grid-layout-column>
        <van-list-view multiple show-head title="分页，返回带 total" :data-source="load1" pageable remote-paging :page-size="10"></van-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <van-list-view multiple show-head title="点击加载更多，返回带 last" :data-source="load2" pageable="load-more" remote-paging></van-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <van-list-view multiple show-head title="滚动加载更多，只返回数组" :data-source="load3" pageable="auto-more" remote-paging></van-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟构造数量较多的 500 条后端数据
const mockData = (() => {
    let mockData = [];
    const total = 500;
    for (let i = 1; i <= total; i++)
        mockData.push('item' + i);
    return mockData.map((text) => ({ text, value: text }));
})();
// 模拟数据服务
const mockService = {
    loadWithTotal(offset, limit) {
        return mockRequest({
            total: mockData.length,
            data: mockData.slice(offset, offset + limit),
        });
    },
    loadWithLast(offset, limit) {
        return mockRequest({
            last: offset + limit >= mockData.length,
            data: mockData.slice(offset, offset + limit),
        });
    },
    loadOnlyArray(offset, limit) {
        return mockRequest(mockData.slice(offset, offset + limit));
    },
};

export default {
    data() {
        return {
            result1: undefined,
            result2: undefined,
            result3: undefined,
        };
    },
    methods: {
        load1({ paging }) {
            return mockService.loadWithTotal(paging.offset, paging.limit)
                .then((result1) => this.result1 = result1); // 这句只是在 Demo 中打印一下数据，方便查看
        },
        load2({ paging }) {
            return mockService.loadWithLast(paging.offset, paging.limit)
                .then((result2) => this.result2 = result2); // 这句只是在 Demo 中打印一下数据，方便查看
        },
        load3({ paging }) {
            return mockService.loadOnlyArray(paging.offset, paging.limit)
                .then((result3) => this.result3 = result3); // 这句只是在 Demo 中打印一下数据，方便查看
        },
    },
};
</script>
```

``` vue
<template>
<van-list-view multiple v-model="values">
    <van-list-view-item text="Java" value="java"></van-list-view-item>
    <van-list-view-item text="Nodejs" value="nodejs"></van-list-view-item>
    <van-list-view-item text="Go" value="go"></van-list-view-item>
</van-list-view>
</template>
<script>
export default {
    data() {
        return {
            values: ['java', 'nodejs'],
        };
    },
};
</script>
```
