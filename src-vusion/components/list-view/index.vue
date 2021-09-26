<script>
import UListView from 'cloud-ui.vusion/src/components/u-list-view.vue/index.vue';

export default {
    name: 'van-list-view',
    groupName: 'van-list-view-group',
    childName: 'van-list-view-item',
    extends: UListView,
    props: {
        border: { type: Boolean, default: false },
        readonly: { type: Boolean, default: true },
        readonlyMode: { type: String, default: 'initial' },
    },
    getDataSourceOptions() {
        return {
            viewMode: 'more',
            paging: this.paging,
            remotePaging: this.remotePaging,
            filtering: this.filtering,
            remoteFiltering: this.remoteFiltering,
            getExtraParams: this.getExtraParams,
        };
    },
}
</script>

<style module>
.root {
    display: flex;
    flex-direction: column;
    background: var(--list-view-body-background);
    /* border: 1px solid var(--list-view-border-color); */
    border-radius: var(--border-radius-base);
    height: var(--list-view-height);
    min-width: var(--list-view-width);
    max-width: 100%;
}

.root:focus {
    border-color: var(--list-view-border-color-focus);
    outline: var(--focus-outline);
}

.status {
    color: var(--list-view-status-color);
    text-align: center;
    padding: var(--list-view-item-padding);
}

.root[disabled] {
    border: 1px solid var(--list-view-border-color-disabled);
}

.head {
    background: var(--list-view-head-background);
    padding: var(--list-view-head-padding);
    border-bottom: 1px solid var(--list-view-border-color);
}

.extra {
    float: right;
    color: var(--color-light);
}

.body {
    flex: auto;
    user-select: none;
    overflow: auto;
    position: relative;
}

.root[readonly-mode="initial"] .body {
    user-select: initial;
}

.root[disabled] .body {
    background: var(--list-view-body-background-disabled);
}

.foot {
    background: var(--list-view-foot-background);
    padding: var(--list-view-foot-padding);
    border-top: 1px solid var(--list-view-border-color);
}

.filter[class][class] {
    margin: var(--list-view-filter-margin);
    width: calc(100% - var(--list-view-filter-margin) * 2);
}

.pagination {
    text-align: center;
    margin: 0 -12px;
}

.root[size^="normal"] { height: var(--list-view-height); }
.root[size^="large"] { height: var(--list-view-height-large); }
.root[size^="huge"] { height: var(--list-view-height-huge); }
.root[size^="full"] { height: 100%; }
.root[size^="auto"] { height: auto; }
.root[size$="normal"] { width: var(--list-view-width); }
.root[size$="large"] { width: var(--list-view-width-large); }
.root[size$="huge"] { width: var(--list-view-width-huge); }
.root[size$="full"] { width: 100%; }
.root[size$="auto"] { width: auto; }


.root {
    height: 100%;
}
</style>