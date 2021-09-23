<template>
<s-materials-view sidebar-size="small" type="misc" :groups="groups"></s-materials-view>
</template>

<script>
export default {
    data() {
        return { groups: this.$docs.miscGroups };
    },
};
</script>
