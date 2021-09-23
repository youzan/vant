### 基本用法

``` html {width: 31.8%}
<u-list-view>
    <u-list-view-item>水杯</u-list-view-item>
    <u-list-view-item>坚果</u-list-view-item>
    <u-list-view-item>毛巾</u-list-view-item>
    <u-list-view-item>沙发</u-list-view-item>
</u-list-view>
```

### 选项值

``` html {width: 31.8%}
<u-list-view value="towel">
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
```

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel" readonly>
            <u-list-view-item value="cup">水杯</u-list-view-item>
            <u-list-view-item value="nut">坚果</u-list-view-item>
            <u-list-view-item value="towel">毛巾</u-list-view-item>
            <u-list-view-item value="sofa">沙发</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel" disabled>
            <u-list-view-item value="cup">水杯</u-list-view-item>
            <u-list-view-item value="nut">坚果</u-list-view-item>
            <u-list-view-item value="towel">毛巾</u-list-view-item>
            <u-list-view-item value="sofa">沙发</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel">
            <u-list-view-item value="cup">水杯</u-list-view-item>
            <u-list-view-item value="nut" disabled>坚果</u-list-view-item>
            <u-list-view-item value="towel">毛巾</u-list-view-item>
            <u-list-view-item value="sofa">沙发</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html {width: 31.8%}
<u-list-view value="nut">
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="toothbrush">牙刷</u-list-view-item>
    <u-list-view-divider></u-list-view-divider>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
```

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <u-list-view>
                <u-list-view-group title="洗具">
                    <u-list-view-item>毛巾</u-list-view-item>
                    <u-list-view-item>牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="杯具">
                    <u-list-view-item>牙缸</u-list-view-item>
                    <u-list-view-item>水杯</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="餐具">
                    <u-list-view-item>筷子</u-list-view-item>
                    <u-list-view-item>碗</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>开启折叠功能</p>
            <u-list-view collapsible>
                <u-list-view-group title="洗具">
                    <u-list-view-item>毛巾</u-list-view-item>
                    <u-list-view-item>牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="杯具" expanded disabled>
                    <u-list-view-item>牙缸</u-list-view-item>
                    <u-list-view-item>水杯</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="餐具" :collapsible="false">
                    <u-list-view-item>筷子</u-list-view-item>
                    <u-list-view-item>碗</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>手风琴模式</p>
            <u-list-view collapsible accordion value="cup">
                <u-list-view-group title="洗具">
                    <u-list-view-item value="towel">毛巾</u-list-view-item>
                    <u-list-view-item value="toothbrush">牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="杯具">
                    <u-list-view-item value="toothcup">牙缸</u-list-view-item>
                    <u-list-view-item value="cup">水杯</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="餐具">
                    <u-list-view-item value="chopsticks">筷子</u-list-view-item>
                    <u-list-view-item value="bowl">碗</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>触发方式：整行点击均可触发（默认）</p>
            <u-list-view collapsible expand-trigger="click">
                <u-list-view-group title="洗具">
                    <u-list-view-item>毛巾</u-list-view-item>
                    <u-list-view-item>牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="杯具">
                    <u-list-view-item>牙缸</u-list-view-item>
                    <u-list-view-item>水杯</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>触发方式：仅点击小箭头时触发</p>
            <u-list-view collapsible expand-trigger="click-expander">
                <u-list-view-group title="洗具">
                    <u-list-view-item>毛巾</u-list-view-item>
                    <u-list-view-item>牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group title="杯具">
                    <u-list-view-item>牙缸</u-list-view-item>
                    <u-list-view-item>水杯</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 可取消

尝试在同一个选项上点击两次。

``` html {width: 31.8%}
<u-list-view value="towel" cancelable>
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
```

### 多项选择

可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

``` vue {width: 31.8%}
<template>
<u-list-view multiple v-model="values">
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
</template>

<script>
export default {
    data() {
        return { values: ['nut', 'towel'] };
    },
};
</script>
```

#### 前端分页

``` vue
<template>
<div>
<u-list-view :data="test" style="height: 182px"></u-list-view>
<u-button @click="onClick">传入</u-button>
</div>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 500 条数据
        let data = [];
        for (let i = 1; i <= 100; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data, test: null };
    },
    methods: {
        onClick() {
            this.test = this.data;
        },
    },
};
</script>
```

#### 一次性后端数据，前端分页

在`data-source`属性中传入`load`方法，用于接收完整的后端数据。

`load`方法要求返回一个`Promise<Array<Item>>`或`Promise<{ data: Array<Item>, total: Number }>`的格式。该会在组件初始化时会被调用一次，如果不需要可以将`initial-load`属性设置为`false`。

开启`pageable`属性时可以进行前端分页。

``` vue
<template>
<u-list-view :data-source="load" pageable :page-size="20" style="height: 182px"></u-list-view>
</template>
<script>
// 模拟构造远程数据
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 500);
            });
        },
    },
};
</script>
```

#### 多选时验证

``` vue
<template>
<u-validator :rules="rules">
    <u-list-view v-model="test" multiple>
        <u-list-view-item>AAA</u-list-view-item>
        <u-list-view-item>BBB</u-list-view-item>
        <u-list-view-item>CCC</u-list-view-item>
    </u-list-view>
</u-validator>
</template>
<script>
export default {
    data() {
        return {
            test: [],
            rules: [
                { required: true, trigger: 'input', validator(rule, value, cb) {
                    cb();
                } },
            ],
        };
    },
    methods: {
        onClick() {
            this.test = this.data;
        },
    },
};
</script>
```

#### loading

``` vue
<template>
    <u-grid-layout>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-button @click="load()">加载</u-button>
            </u-grid-layout-column>
        </u-grid-layout-row>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-list-view v-model="value" :data-source="list" :loading="loading"></u-list-view>
            </u-grid-layout-column>
            <u-grid-layout-column :span="2">
                <div :class="$style.result">选择的语言为：{{ value }}</div>
            </u-grid-layout-column>
        </u-grid-layout-row>
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
        ], 1000);
    },
};

export default {
    data() {
        return {
            list: undefined,
            loading: false,
            value: 'cpp',
        };
    },
    methods: {
        load() {
            this.loading = true;
            return mockService.load().then((list) => {
                this.loading = false;
                this.list = list;
            });
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
