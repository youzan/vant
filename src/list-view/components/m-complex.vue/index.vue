<template>
<div :class="$style.root" :readonly="readonly" :disabled="disabled">
    <slot></slot>
</div>
</template>

<script>
import MSinglex from '../m-singlex.vue';
import MMultiplex from '../m-multiplex.vue';

export default {
    name: 'm-complex',
    groupName: 'm-complex-group',
    childName: 'm-complex-item',
    mixins: [MSinglex, MMultiplex],
    props: {
        value: null, // @inherit: autoSelect: { type: Boolean, default: false },
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: router: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false }, // @inherit: keepOrder: { type: Boolean, default: false },
        // @inherit: readonly: { type: Boolean, default: false },
        // @inherit: disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            // @inherit: selectedVMs: undefined,
            currentMultiple: this.multiple,
        };
    },
    watch: {
        multiple(multiple) {
            this.currentMultiple = multiple;
        },
        value: {
            override: true,
            handler(value, oldValue) {
                (this.currentMultiple ? MMultiplex : MSinglex).watch.value.call(
                    this,
                    value,
                    oldValue,
                );
            },
        }, // This method just run once after pushing many itemVMs
        itemVMs: {
            override: true,
            handler(itemVMs, oldVMs) {
                (this.currentMultiple ? MMultiplex : MSinglex).watch.itemVMs.call(this, itemVMs, oldVMs);
            },
        },
    },
    methods: {
        watchValue(value) {
            (this.currentMultiple ? MMultiplex : MSinglex).methods.watchValue.call(this, value);
        },
        select(itemVM, selected) {
            (this.currentMultiple ? MMultiplex : MSinglex).methods.select.call(
                this,
                itemVM,
                selected,
            );
        },
    },
};
</script>

<style module>
.root {
    /* @Private */
    user-select: none;
    position: relative;
}
</style>
