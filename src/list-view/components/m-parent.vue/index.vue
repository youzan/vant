<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'm-parent',
    groupName: 'm-group',
    childName: 'm-child',
    data() {
        return { groupVMs: [], itemVMs: [] };
    },
};
</script>

<style module>
.root {}
</style>
