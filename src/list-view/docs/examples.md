### 基本用法

默认为单选模式，使用`v-model`双向绑定值。使用`data-source`属性添加数据，有两种方式：

#### data-source 数组

直接向`data-source`属性中传入`Array<Item>`格式的数组，每个`Item`为这样格式的对象`{ text: string, value: any, disabled: boolean, ... }`。

``` vue
<template>
    <u-grid-layout :repeat="3">
        <u-grid-layout-column>
            <u-list-view v-model="value" :data-source="list"></u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="2">
            <div :class="$style.result">选择的语言为：{{ value }}</div>
        </u-grid-layout-column>
    </u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'cpp',
            list: [
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
            ],
        };
    },
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

#### data-source 函数

向`data-source`属性中传入一个加载函数，这种方式会自带 loading 加载、error 错误等效果，并且在下文中的前后端分页、过滤（搜索）等功能均需要采用这种传入数据的方式。

加载函数的格式是这样的

``` ts
(params) => Promise<Array<Item> | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>
```

组件会给加载函数提供过滤（搜索）、分页、加载更多等参数，要求返回一个如上的 Promise。

``` vue
<template>
    <u-grid-layout :repeat="3">
        <u-grid-layout-column>
            <u-list-view v-model="value" :data-source="load"></u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="2">
            <div :class="$style.result">选择的语言为：{{ value }}</div>
        </u-grid-layout-column>
    </u-grid-layout>
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

#### 指定选项字段名

如果你的数据中选项文本和值的字段不一定叫`'text'`和`'value'`，可以通过`text-field`和`value-field`两个属性快速指定。

``` vue
<template>
    <u-grid-layout :repeat="3">
        <u-grid-layout-column>
            <u-list-view v-model="value" :data-source="list" text-field="name" value-field="name"></u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="2">
            <div :class="$style.result">选择的语言为：{{ value }}</div>
        </u-grid-layout-column>
    </u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'C++',
            list: [
                { name: 'Batch' },
                { name: 'C' },
                { name: 'C#' },
                { name: 'C++' },
                { name: 'CSS' },
                { name: 'Clojure' },
                { name: 'CoffeeScript' },
                { name: 'Coq' },
                { name: 'Diff' },
                { name: 'Dockerfile' },
                { name: 'F#' },
                { name: 'Go' },
                { name: 'Groovy' },
                { name: 'HLSL' },
                { name: 'HTML' },
                { name: 'Handlebars' },
                { name: 'Ignore' },
                { name: 'Ini' },
                { name: 'JSON' },
                { name: 'Java' },
                { name: 'JavaScript' },
                { name: 'Jinja' },
                { name: 'Jupyter' },
                { name: 'Less' },
                { name: 'Log' },
                { name: 'Lua' },
                { name: 'Makefile' },
                { name: 'Markdown' },
                { name: 'Objective-C' },
                { name: 'Objective-C++' },
                { name: 'PHP' },
                { name: 'Perl' },
                { name: 'PowerShell' },
                { name: 'Properties' },
                { name: 'Pug' },
                { name: 'Python' },
                { name: 'R' },
                { name: 'Razor' },
                { name: 'Ruby' },
                { name: 'Rust' },
                { name: 'SCSS' },
                { name: 'SQL' },
                { name: 'SVG' },
                { name: 'Shaderlab' },
                { name: 'Shell Script' },
                { name: 'Swift' },
                { name: 'TypeScript' },
                { name: 'Visual Basic' },
                { name: 'Vue' },
                { name: 'XML' },
                { name: 'XSL' },
                { name: 'YAML' },
            ],
        };
    },
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

### 只读状态、禁用状态、禁用某一项

使用`disabled`属性禁用整个组件。在 item 对象中添加`disabled: true` 可以禁用掉对应选项。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view v-model="value" :data-source="list" readonly></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view v-model="value" :data-source="list" disabled></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view v-model="value" :data-source="list"></u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'nodejs',
            list: [
                { text: 'Java', value: 'java' },
                { text: 'Node.js', value: 'nodejs' },
                { text: 'Go', value: 'go' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby', disabled: true },
                { text: 'C#', value: 'csharp' },
                { text: 'PHP', value: 'php', disabled: true },
            ],
        };
    },
};
</script>
```

### 可取消

在单选模式中，设置`cancelable`属性，可以取消已选择的项。

尝试在同一个选项上点击两次。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view v-model="value" :data-source="list" cancelable></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="2">
        <div :class="$style.result">选择的语言为：{{ value }}</div>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'nodejs',
            list: [
                { text: 'Java', value: 'java' },
                { text: 'Node.js', value: 'nodejs' },
                { text: 'Go', value: 'go' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby', disabled: true },
                { text: 'C#', value: 'csharp' },
                { text: 'PHP', value: 'php', disabled: true },
            ],
        };
    },
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

### 多项选择

使用`multiple`属性开启多选模式。注意：此时`v-model`双向绑定的类型为一个数组`Array<any>`。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view multiple v-model="values" title="多选列表" :data-source="list"></u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            values: ['c', 'cpp'],
            list: [
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
            ],
        };
    },
};
</script>
```

### 添加头部

使用`show-head`属性可以添加头部，使用`title`属性修改列表标题。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view show-head title="单选列表" :data-source="list"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view multiple show-head title="多选列表" :data-source="list"></u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
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
            ],
        };
    },
};
</script>
```

### 添加尾部

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view show-head show-foot title="单选列表" :data-source="list">
            <div slot="foot">
                <u-button size="small">操作</u-button>
            </div>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view multiple show-head show-foot title="多选列表" :data-source="list">
            <div slot="foot">
                <u-button size="small">操作</u-button>
            </div>
        </u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
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
            ],
        };
    },
};
</script>
```

### 自定义内容

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view show-head title="单选列表" :data-source="list">
            <template #item="{ item }">
                <h3 :class="$style.title">{{ item.text }}</h3>
                <u-text wrap="ellipsis">{{ item.text + ' is a specfic language with some features that ...' }}</u-text>
            </template>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view multiple show-head title="多选列表" :data-source="list">
            <template #item="{ item }">
                <h3 :class="$style.title">{{ item.text }}</h3>
                <u-text wrap="ellipsis">{{ item.text + ' is a specfic language with some features that ...' }}</u-text>
            </template>
        </u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
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
            ],
        };
    },
};
</script>
<style module>
.title {
    margin: 0;
}
</style>
```

### 表单验证

``` vue
<template>
<u-form-item label="选择语言" required rules="required | minLength(2) @i | maxLength(5) @i">
    <u-list-view multiple v-model="values" :data-source="list" show-head title="语言列表"></u-list-view>
</u-form-item>
</template>
<script>
export default {
    data() {
        return {
            values: [],
            list: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'CSS', value: 'css', disabled: true },
                { text: 'Coq', value: 'coq', disabled: true },
                { text: 'Go', value: 'go' },
                { text: 'HTML', value: 'html', disabled: true },
                { text: 'Handlebars', value: 'Handlebars', disabled: true },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'Vue', value: 'vue' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
        };
    },
};
</script>
```

### 修改尺寸

通过`size`属性设置`normal`、`large`、`huge`、`full`、`auto`几种尺寸，宽高可以自由组合。

如果以上几种预设不能满足，也可以直接添加`style="width: 200px; height: 600px;"`来设置。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view show-head title="normal" :data-source="list"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view show-head size="large" title="large" :data-source="list"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view show-head size="auto" title="auto" :data-source="list"></u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' },
                { text: 'CSS', value: 'css', disabled: true },
                { text: 'Coq', value: 'coq', disabled: true },
                { text: 'Go', value: 'go' },
                { text: 'HTML', value: 'html', disabled: true },
                { text: 'Handlebars', value: 'Handlebars', disabled: true },
                { text: 'JSON', value: 'json' },
                { text: 'Java', value: 'java' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'Makefile', value: 'makefile' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'Objective-C', value: 'objective-c' },
                { text: 'Objective-C++', value: 'objective-cpp' },
                { text: 'PHP', value: 'php' },
                { text: 'Perl', value: 'perl' },
                { text: 'PowerShell', value: 'powershell' },
                { text: 'Python', value: 'python' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'SQL', value: 'sql' },
                { text: 'SVG', value: 'svg' },
                { text: 'Shell Script', value: 'shellscript' },
                { text: 'Swift', value: 'swift' },
                { text: 'Visual Basic', value: 'vb' },
                { text: 'Vue', value: 'vue' },
                { text: 'XML', value: 'xml' },
                { text: 'YAML', value: 'yaml' },
            ],
        };
    },
};
</script>
```

### 过滤（搜索）

#### 前端过滤（搜索）

如果数据源本身为前端数据或是从后端一次性拿过来的，设置`filterable`属性即可开启过滤功能。用于快速查找选项。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view show-head title="单选列表" v-model="value" :data-source="list" filterable></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view multiple show-head title="多选列表" v-model="values" :data-source="list" filterable></u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            value: 'css',
            values: ['c', 'cpp'],
            list: [
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
            ],
        };
    },
};
</script>
```

#### 匹配方式

在`match-method`属性中可以配置字符串的匹配方式，常见的有`includes`、`startsWith`、`endsWith`，也可以传一个函数。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view :data="list" filterable match-method="includes" placeholder="包括即可（默认）"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view :data="list" filterable match-method="startsWith" placeholder="只匹配开头"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view :data="list" filterable match-method="endsWith" placeholder="只匹配结尾"></u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
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
            ],
        };
    },
};
</script>
```

#### 区分大小写

默认不区分大小写，可用`case-sensitive`属性开启。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view :data="list" filterable placeholder="不区分大小写（默认）"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view :data="list" filterable case-sensitive placeholder="区分大小写"></u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        return {
            list: [
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
            ],
        };
    },
};
</script>
```

### 后端过滤（搜索）

如果需要通过后端接口进行过滤，在开启`filterable`属性的基础上，还要开启`remote-filtering`属性。

这时需要用最前面提到的 data-source 函数的方式传入数据。

加载函数的格式是这样的`({ filterText: string }) => Promise<Array<Item | { data: Array<Item>, total: number } | { data: Array<Item>, last: boolean }>>`。组件会给加载函数提供过滤输入框中的文本，要求返回一个 Promise。

可以看下面的示例，在数据栏中`result`为最新一次模拟请求的返回数据。

``` vue
<template>
    <u-grid-layout :repeat="3">
        <u-grid-layout-column>
            <u-list-view show-head title="单选列表" v-model="value" :data-source="load" filterable remote-filtering></u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-list-view multiple show-head title="多选列表" v-model="values" :data-source="load" filterable remote-filtering></u-list-view>
        </u-grid-layout-column>
    </u-grid-layout>
</template>
<script>
// 模拟后端请求
const mockRequest = (data, timeout = 300) => new Promise((res, rej) => setTimeout(() => res(data), timeout));
// 模拟后端数据
const mockData = [
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
];
// 模拟数据服务
const mockService = {
    loadPartial(keyword) {
        // 在这里模拟了一个后端过滤数据的请求
        return mockRequest({
            total: mockData.length,
            data: mockData.filter((item) => item.text.includes(keyword)),
        });
    },
};

export default {
    data() {
        return {
            value: 'css',
            values: ['c', 'cpp'],
            result: undefined,
        };
    },
    methods: {
        load({ filterText }) {
            return mockService.loadPartial(filterText)
                .then((result) => this.result = result); // 这句只是在 Demo 中打印一下数据，方便查看
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

### 前端分页与加载更多

#### 前端分页

如果数据源本身为前端数据或是从后端一次性拿过来的，设置`pageable`或`pageable="pagination"`即可开启分页功能，用`page-size`属性修改分页大小。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view show-head title="单选列表" v-model="value" :data-source="list" pageable :page-size="10"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view multiple show-head title="多选列表" v-model="values" :data-source="list" pageable="pagination" :page-size="10"></u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 500 条数据
        let list = [];
        for (let i = 1; i <= 100; i++)
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

#### 加载更多

设置`pageable="load-more"`可开启手动点击加载更多功能，设置`pageable="auto-more"`可开启滚动自动加载更多功能。

``` vue
<template>
<u-grid-layout :repeat="3">
    <u-grid-layout-column>
        <u-list-view multiple show-head title="手动点击加载更多" v-model="values" :data-source="list" pageable="load-more"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view multiple show-head title="滚动自动加载更多" v-model="values" :data-source="list" pageable="auto-more"></u-list-view>
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
        <u-list-view multiple show-head title="分页，返回带 total" :data-source="load1" pageable remote-paging :page-size="10"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view multiple show-head title="点击加载更多，返回带 last" :data-source="load2" pageable="load-more" remote-paging></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column>
        <u-list-view multiple show-head title="滚动加载更多，只返回数组" :data-source="load3" pageable="auto-more" remote-paging></u-list-view>
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
<u-list-view multiple v-model="values">
    <u-list-view-item text="Java" value="java"></u-list-view-item>
    <u-list-view-item text="Nodejs" value="nodejs"></u-list-view-item>
    <u-list-view-item text="Go" value="go"></u-list-view-item>
</u-list-view>
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
