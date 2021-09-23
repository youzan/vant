# edit 编辑相关

### select: (el: HTMLElement) => string

全选元素中的文本，返回文本内容。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| el | HTMLElement | | 待选择的元素 |

#### 选择输入框中的文本

``` vue
<template>
<div>
    <input ref="input" value="This is a piece of text">
    <u-button @click="onClick">Select</u-button>
</div>
</template>
<script>
import { utils } from 'cloud-ui.vusion';

export default {
    data() {
        return {
            selectedText: '',
        };
    },
    methods: {
        onClick() {
            this.selectedText = utils.select(this.$refs.input);
        },
    },
};
</script>
```

#### 也可以选择普通元素的文本

``` vue
<template>
<div>
    <div ref="container">A piece of text</div>
    <u-button @click="onClick">Select</u-button>
</div>
</template>
<script>
import { utils } from 'cloud-ui.vusion';

export default {
    data() {
        return {
            selectedText: '',
        };
    },
    methods: {
        onClick() {
            this.selectedText = utils.select(this.$refs.container);
        },
    },
};
</script>
```

### copy: (text: string) => boolean

拷贝文本，返回是否成功。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| text | String | | 待拷贝的文本 |

``` vue
<template>
<u-button @click="onClick">Copy</u-button>
</template>
<script>
import { utils } from 'cloud-ui.vusion';

export default {
    data() {
        return {
            succeeded: undefined,
        };
    },
    methods: {
        onClick() {
            this.succeeded = utils.copy('A piece of text');
        },
    },
};
</script>
```
