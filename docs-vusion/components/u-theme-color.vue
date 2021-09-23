<template>
<div :class="$style.root" :style="{ background: color }"
     v-tooltip.right="copySucceeded ? '复制成功' : tooltip"
     @click="onClick" @dblclick="onDblClick">
    <div :class="$style.name">{{ name }}</div>
    <div :class="$style.desc">{{ desc }}</div>
    <slot></slot>
</div>
</template>

<script>
import { utils } from 'cloud-ui.vusion';

export default {
    name: 'u-theme-color',
    props: {
        name: String,
        color: String,
        desc: String,
    },
    data() {
        return {
            tooltip: '单击复制变量，双击复制颜色值',
            copySucceeded: false,
        };
    },
    methods: {
        onClick() {
            this.copySucceeded = utils.copy(`var(--${this.name})`);
            setTimeout(() => this.copySucceeded = false, 600);
        },
        onDblClick() {
            this.copySucceeded = utils.copy(this.color);
            setTimeout(() => this.copySucceeded = false, 600);
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    padding: 8px 12px;
    overflow: hidden;
}

.root[inverse] {
    color: white;
}

.name {
    float: left;
}

.desc {
    float: right;
    opacity: 0.75;
    /* opacity: 0; */
    /* transition: opacity var(--transition-duration-base); */
}

/* .root:hover .color {
    opacity: 0.75;
} */
</style>
