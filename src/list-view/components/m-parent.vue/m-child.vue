<template>
<div :class="$style.root">
    <slot></slot>
</div>
</template>

<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'm-child',
    parentName: 'm-parent',
    groupName: 'm-group',
    mixins: [MEmitter],
    data() {
        return { parentVM: undefined, groupVM: undefined };
    },
    created() {
        !this.parentVM
            && this.$contact(this.$options.parentName, (parentVM) => {
                this.parentVM = parentVM;
                const index = parentVM.$slots.default ? parentVM.$slots.default.indexOf(this.$vnode) : -1;
                if (~index)
                    parentVM.itemVMs.splice(index, 0, this);
                else
                    parentVM.itemVMs.push(this);
            });
        !this.groupVM
            && this.$contact(this.$options.groupName, (groupVM) => {
                this.groupVM = groupVM;
                groupVM.itemVMs.push(this);
            });
    },
    destroyed() {
        this.$contact(this.$options.parentName, (parentVM) => {
            parentVM.itemVMs.splice(parentVM.itemVMs.indexOf(this), 1);
            this.parentVM = undefined;
        });
        this.$contact(this.$options.groupName, (groupVM) => {
            groupVM.itemVMs.splice(groupVM.itemVMs.indexOf(this), 1);
            this.groupVM = undefined;
        });
    },
};
</script>

<style module>
.root {
    display: inline-block;
    padding: 4px 12px;
}
</style>
