import { use } from '../utils';
import { CheckboxMixin } from '../mixins/checkbox';

const [sfc, bem] = use('checkbox');

export default sfc({
  mixins: [CheckboxMixin('van-checkbox-group', bem)],

  computed: {
    checked: {
      get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },

      set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  methods: {
    toggle() {
      this.checked = !this.checked;
    },

    onClickIcon() {
      if (!this.isDisabled) {
        this.toggle();
      }
    },

    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.toggle();
      }
    },

    setParentValue(val) {
      const { parent } = this;
      const value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }

        /* istanbul ignore else */
        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        const index = value.indexOf(this.name);

        /* istanbul ignore else */
        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
});
