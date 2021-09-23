<template>
<div :class="$style.root" :disabled="disabled" :expanded="currentExpanded">
    <div :class="$style.head" @click="parentVM.expandTrigger === 'click' && toggle()">
        <div :class="$style.title" v-ellipsis-title>
            <slot name="title">{{ title }}</slot>
        </div>
        <span v-if="currentCollapsible" :class="$style.expander" :expanded="currentExpanded"
            @click="parentVM.expandTrigger === 'click-expander' && ($event.stopPropagation(), toggle())"
        ></span>
        <span :class="$style.extra"><slot name="extra"></slot></span>
    </div>
    <f-collapse-transition>
        <div :class="$style.body" v-show="currentCollapsible ? currentExpanded : true">
            <slot></slot>
        </div>
    </f-collapse-transition>
</div>
</template>

<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'm-group',
    parentName: 'm-parent',
    childName: 'm-child',
    mixins: [MEmitter],
    props: {
        title: String,
        collapsible: { type: Boolean, default: undefined },
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            parentVM: undefined,
            groupVMs: [],
            itemVMs: [],
            currentExpanded: this.expanded,
        };
    },
    computed: {
        currentCollapsible() {
            if (this.collapsible !== undefined)
                return this.collapsible;
            else if (this.parentVM)
                return this.parentVM.currentCollapsible !== undefined ? this.parentVM.currentCollapsible : this.parentVM.collapsible;
        },
        expandTrigger() {
            return this.parentVM ? this.parentVM.expandTrigger : 'click';
        },
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    created() {
        this.$contact(
            ($parent) =>
                $parent.$options.name === this.$options.parentName
                || $parent.$options.name === this.$options.name,
            (parentVM) => {
                this.parentVM = parentVM;
                parentVM.groupVMs.push(this);
            },
        );
    },
    destroyed() {
        this.$contact(
            ($parent) =>
                $parent.$options.name === this.$options.parentName
                || $parent.$options.name === this.$options.name,
            (parentVM) => {
                parentVM.groupVMs.splice(parentVM.groupVMs.indexOf(this), 1);
                this.parentVM = undefined;
            },
        );
    },
    methods: {
        designerControl() {
            this.toggle();
        },
        toggle(expanded) {
            if (
                this.disabled
                || this.parentVM.readonly
                || this.parentVM.disabled
            )
                return;
            const oldExpanded = this.currentExpanded;
            if (expanded === undefined)
                expanded = !this.currentExpanded;
            if (expanded === oldExpanded)
                return;
            let cancel = false;
            this.$emit(
                'before-toggle',
                {
                    expanded,
                    groupVM: this,
                    preventDefault: () => (cancel = true),
                },
                this,
            );
            if (cancel)
                return;
            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded, this);
            if (this.parentVM.accordion) {
                this.parentVM.groupVMs.forEach((groupVM) => {
                    if (groupVM !== this) {
                        groupVM.currentExpanded = false;
                        groupVM.$emit('update:expanded', false);
                    }
                });
            }
            this.$emit('toggle', { expanded, groupVM: this }, this);
            this.parentVM.onToggle({ expanded, groupVM: this });
        },
        onToggle($event) {
            this.parentVM.onToggle($event);
        },
    },
};
</script>

<style module>
.root {
    position: relative;
}

.head {
    padding: var(--group-head-padding);
    background: var(--group-head-background);
}

.text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.body {
    /* transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out; */
}

.expander {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: var(--group-expander-size);
    height: var(--group-expander-size);
    line-height: var(--group-expander-size);
    text-align: center;
    transition: transform var(--transition-duration-base);
}

.expander::before {
    /* icon-font: url('i-material-design.vue/assets/filled/arrow_right.svg'); */
}

.expander[expanded] {
    transform: rotate(90deg);
}

.root[disabled] .expander {
    color: var(--group-expander-color-disabled);
}

.extra {
    float: right;
}
</style>
