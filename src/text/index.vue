<template>
<span :class="$style.root" v-on="$listeners"  v-bind="$attrs" vusion-slot-name-edit="text">
    {{ text }}
</span>
</template>

<script>
export default {
    name: 'van-text',
    props: {
        text: String,
    },
    mounted() {
    }
};
</script>

<style module>
.root {
  /* color: var(--component-text-color); */
  font-size: var(--van-text-font-size);
}

.root[size="small"] {
    font-size: var(--text-font-size-small);
}

.root[size="normal"] { /* 父级字号不是默认大小时，该值有用的 */
    font-size: var(--van-text-font-size);
}

.root[size="large"] {
    font-size: var(--van-text-font-size-large);
}

.root[size="huge"] {
    font-size: var(--van-text-font-size-huge);
}

.root[weight="normal"] {
    font-weight: normal;
}

.root[weight="bold"] {
    font-weight: bold;
}

.root[color="default"] {
    /* By default */
}

.root[color="primary"] {
    color: var(--van-text-color-primary);
}

.root[color="secondary"] {
    color: var(--van-text-color-secondary);
}

.root[color="success"] {
    color: var(--van-text-color-success);
}

.root[color="warning"] {
    color: var(--van-text-color-warning);
}

.root[color="error"] {
    color: var(--van-text-color-error);
}

.root[color="disabled"] {
    color: var(--van-text-color-disabled);
}

.root[overflow="ellipsis"], .root[wrap="ellipsis"] {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.root[overflow="break"], .root[wrap="break"] {
    word-wrap: break-word;
    hyphens: auto;
}

.root[overflow="nowrap"], .root[wrap="nowrap"] {
    white-space: nowrap;
}

.root[display="block"] {
    display: block;
}
</style>
