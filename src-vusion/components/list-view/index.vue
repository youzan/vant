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
    }
}
</script>

<style module>
/* @import '~cloud-ui.vusion/src/components/u-list-view.vue/item.css'; */

.root {
    height: 100%;
}
</style>