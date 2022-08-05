<template>
<div :class="$style.root">
    <iframe v-if="src"
        @load="onLoad($event)"
        v-bind="$attrs"
        :src="src" frameborder="0"></iframe>
</div>
</template>

<script>

export default {
    name: 'van-iframe',
    props: {
        src: {
            type: String,
            default: '',
            required: true,
        },
    },
    data() {
        return {
            loaded: false,
        };
    },
    methods: {
        onLoad(event) {
            this.loaded = true;
            this.$emit('load');
        },
    },
};
</script>

<style module >
.root {
    position: relative;
}
.root iframe {
  width: 100%;
  height: 100%;
}
</style>
