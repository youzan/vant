<template>
<s-materials-view sidebar-size="small" type="vendors" :groups="groups"></s-materials-view>
</template>

<script>
export default {
    data() {
        return { groups: this.$docs.vendorsGroups };
    },
};
</script>
