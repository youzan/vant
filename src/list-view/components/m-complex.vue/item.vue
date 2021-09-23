<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected" :readonly="parentVM.readonly" :disabled="disabled || parentVM.disabled"
    @click="parentVM.router ? onClick($event) : select($event)" v-ellipsis-title
    vusion-slot-name="text">
    <slot>{{ text }}</slot>
</div>
</template>

<script>
import { MSinglexItem } from '../m-singlex.vue';
import { MMultiplexItem } from '../m-multiplex.vue';
import { ellipsisTitle } from '../../directives';

export default {
    name: 'm-complex-item',
    parentName: 'm-complex',
    groupName: 'm-complex-group',
    directives: { ellipsisTitle },
    mixins: [MSinglexItem, MMultiplexItem], // props: {
    //     @inherit: value: null,
    //     @inherit: selected: { type: Boolean, default: false },
    //     @inherit: disabled: { type: Boolean, default: false },
    //     @inherit: item: Object,
    // },
    // data() {
    //     return {
    //         @inherit: currentSelected: this.selected,
    //         @inherit: parentVM: undefined,
    //     };
    // },
};
</script>

<style module>
.root {
    /* @Private */
    display: inline-block;
    cursor: var(--cursor-pointer);

    /* @Public */
    padding: 4px 12px;
}

.root:hover {
    background: var(--background-color-light);
}

.root[readonly] {
    cursor: default;
    background: none;
}

.root[focused] {
    background: var(--background-color-light);
}

.root[selected] {
    background: var(--brand-primary);
    color: var(--color-white);
}

.root[disabled] {
    /* @Private */
    cursor: var(--cursor-not-allowed);
    background: none;
    color: var(--brand-disabled);
}

.root[selected][disabled] {
    background: var(--brand-disabled-light);
}
</style>
