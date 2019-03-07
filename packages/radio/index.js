import { use } from '../utils';
import { CheckboxMixin } from '../mixins/checkbox';

const [sfc, bem] = use('radio');

export default sfc({
  mixins: [CheckboxMixin('van-radio-group', bem)],

  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    checked() {
      return this.currentValue === this.name;
    }
  },

  methods: {
    onClickIcon() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    },

    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  }
});
