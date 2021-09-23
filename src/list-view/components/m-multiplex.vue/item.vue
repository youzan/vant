<template>
<div :class="$style.root"
    :selected="currentSelected" :readonly="parentVM.readonly" :disabled="disabled || parentVM.disabled"
    @click="select($event)" v-ellipsis-title
    vusion-slot-name="text">
    <slot>{{ text }}</slot>
</div>
</template>

<script>
import { MChild } from '../m-parent.vue';
import { ellipsisTitle } from '../../directives';

export default {
    name: 'm-multiplex-item',
    parentName: 'm-multiplex',
    groupName: 'm-multiplex-group',
    directives: { ellipsisTitle },
    mixins: [MChild],
    props: {
        text: String,
        value: null,
        selected: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        item: Object,
    },
    data() {
        return {
            currentSelected: this.selected, // @inherit: parentVM: undefined,
        };
    },
    watch: {
        selected(selected) {
            this.currentSelected = selected;
            this.parentVM && this.parentVM.watchSelectedChange(this);
        },
    },
    methods: {
        select(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return;
            this.$emit('click', e, this);
            this.parentVM.click(this);

            let cancel = false;
            this.$emit('before-select', {
                value: this.value,
                item: this.item,
                itemVM: this,
                preventDefault: () => (cancel = true),
            }, this);
            if (cancel)
                return;
            this.parentVM.select(this);
        },
    },
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
    background: none;
}

.root[readonly] {
    cursor: default;
    background: none;
}

.root[selected] {
    background: var(--brand-primary);
    color: var(--color-white);
}

.root[disabled] {
    /* @Private */
    cursor: var(--cursor-not-allowed);
    background: var(--background-color-base);
    color: var(--brand-disabled);
}

.root[selected][disabled] {
    background: var(--brand-disabled-light);
}
</style>
