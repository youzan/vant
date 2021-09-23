<template>
<a :class="$style.root"
    :selected="parentVM.router ? active : isSelected" :readonly="parentVM.readonly" :disabled="disabled || parentVM.disabled"
    :href="currentHref" :target="target" @click="parentVM.router ? onClick($event) : select($event)" v-on="listeners"
    v-ellipsis-title
    vusion-slot-name="text">
    <slot>{{ text }}</slot>
</a>
</template>

<script>
import { MChild } from '../m-parent.vue';
import ULink from '../u-link.vue';
import { ellipsisTitle } from '../../directives';

const trailingSlashRE = /\/?$/;

export default {
    name: 'm-singlex-item',
    parentName: 'm-singlex',
    groupName: 'm-singlex-group',
    directives: { ellipsisTitle },
    mixins: [MChild, ULink],
    props: {
        text: String,
        value: null,
        disabled: { type: Boolean, default: false },
        item: Object,
        exact: { type: Boolean, default: false },
        exactHash: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: parentVM: undefined,
        };
    },
    computed: {
        isSelected() {
            return this.parentVM && this.parentVM.selectedVM === this;
        },
        active() {
            if (this.to === undefined && !this.destination)
                return;
            if (!this.$router)
                return console.warn(
                    '[cloud-ui] Use `<m-router-item>` but cannot find vue router.',
                );
            const current = this.$route;
            let to = this.to;
            if (this.destination) {
                const destination = this.destination.split('/');
                destination.splice(1, 1);
                to = destination.join('/');
            }
            const target = this.$router.resolve(to).route;
            const currentPath = decodeURIComponent(current.path.replace(trailingSlashRE, '/'));
            const targetPath = decodeURIComponent((target.redirectedFrom ? this.$router.resolve(target.redirectedFrom).location.path : target.path).replace(trailingSlashRE, '/')); // @TODO: 是否要检查 query 的包含关系
            const currentHash = decodeURIComponent(current.hash);
            const targetHash = decodeURIComponent(target.hash);
            const exact = this.exact ? currentPath === targetPath : currentPath.startsWith(targetPath);
            const exactHash = this.exactHash ? currentHash === targetHash : currentHash.startsWith(targetHash);
            return exact && exactHash;
        },
    },
    methods: {
        onClick(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return e.preventDefault();
            ULink.methods.onClick.call(this, e);
        },
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
    background: var(--background-color-light);
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
    background: none;
    color: var(--brand-disabled);
}

.root[selected][disabled] {
    background: var(--brand-disabled-light);
}
</style>
