<template>
<div :class="$style.root"
    :selected="parentVM.multiple ? currentSelected : isSelected"
    :readonly="parentVM.readonly" :readonly-mode="parentVM.readonlyMode"
    :disabled="disabled || parentVM.disabled"
    @click="select"
    v-ellipsis-title>
    <slot>{{ text }}</slot>
</div>
</template>

<script>
import { MComplexItem } from './components/m-complex.vue';
// import { ellipsisTitle } from '../../../directives';

export default {
    name: 'u-list-view-item',
    parentName: 'u-list-view',
    groupName: 'u-list-view-group',
    extends: MComplexItem,
    props: { text: { type: String } },
};
</script>

<style module>
.root {
    cursor: var(--cursor-pointer);
    padding: var(--list-view-item-padding);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.root:hover {
    background: var(--list-view-item-background-hover);
}

.root[readonly] {
    cursor: initial !important;
}

.item[readonly-mode="initial"] .background {
    background: var(--list-view-item-background-readonly-initial);
}

.root[focused] {
    background: var(--list-view-item-background-focused);
}

.root[selected] {
    background: var(--list-view-item-background-selected);
    color: var(--list-view-item-color-selected);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--list-view-item-background-disabled);
    color: var(--list-view-item-color-disabled);
}

.root[selected][disabled] {
    background: var(--list-view-item-background-selected-disabled);
}
</style>
