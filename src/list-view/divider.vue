<template>
<div :class="$style.root"></div>
</template>

<script>
export default { name: 'u-list-view-divider' };
</script>

<style module>
.root {
    margin: var(--list-view-divider-margin);
    height: 1px;
    background: var(--list-view-divider-background);
}
</style>
