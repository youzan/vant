``` vue
<template>
<div>这个例子中，该组件给上级添加了蓝色阴影。</div>
</template>
<script>
import { MEmitter } from 'cloud-ui.vusion';

export default {
    mixins: [MEmitter],
    mounted() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '0 2px 10px rgb(69, 124, 208)';
        });
    },
    destroyed() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '';
        });
    },
};
</script>
```
