### 按钮自动加载

链接在禁用状态下，不会响应点击事件。

``` vue
<template>
<u-link color="primary" @click="onClick" text="按钮"></u-link>
</template>
<script>
export default {
    methods: {
        onClick(e) {
            return new Promise((res, rej) => {
                setTimeout(() => res(), 300);
            })
        },
    }
};
</script>
```