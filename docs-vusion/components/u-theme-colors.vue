<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'u-theme-colors',
};
</script>

<style module>
.root {}
</style>
