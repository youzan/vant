<script>
export default {
    name: 'm-group-parent',
    props: {
        collapsible: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
    },
    methods: {
        onToggle(groupVM, expanded) {
            this.$emit('toggle', { expanded, groupVM }, this);
        },
        toggleAll(expanded) {
            this.groupVMs.forEach((groupVM) => groupVM.toggle(expanded));
        },
    },
};
</script>
