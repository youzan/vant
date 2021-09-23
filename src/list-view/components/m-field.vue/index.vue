<script>
import MEmitter from '../m-emitter.vue';

export default {
    name: 'm-field',
    isField: true,
    mixins: [MEmitter],
    data() {
        return {
            validatorVM: undefined,
            formItemVM: undefined, // @compat
        };
    },
    created() {
        this.$dispatch(
            ($parent) =>
                ($parent.$options.name
                    && $parent.$options.name.startsWith('u-form-item'))
                || $parent.$options.isField
                || $parent.$options.isValidator,
            'add-field-vm',
            this,
        );
        this.$on('update', (value) => {
            const validatorVM = this.validatorVM || this.formItemVM; // @compat
            validatorVM && validatorVM.$emit('update', value);
        });
        this.$on('input', (value) => {
            const validatorVM = this.validatorVM || this.formItemVM; // @compat
            validatorVM && validatorVM.$emit('input', value);
        });
        this.$on('change', ($event) => {
            const validatorVM = this.validatorVM || this.formItemVM; // @compat
            validatorVM && validatorVM.$emit('change', $event);
        });
        this.$on('focus', () => {
            const validatorVM = this.validatorVM || this.formItemVM; // @compat
            validatorVM && validatorVM.$emit('focus');
        });
        this.$on('blur', () => {
            const validatorVM = this.validatorVM || this.formItemVM; // @compat
            validatorVM && validatorVM.$emit('blur');
        });
    },
    destroyed() {
        const validatorVM = this.validatorVM || this.formItemVM; // @compat
        validatorVM && validatorVM.$emit('remove-field-vm', this);
    },
};
</script>
