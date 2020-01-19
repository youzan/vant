import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('checkbox-group');

export default createComponent({
  mixins: [ParentMixin('vanCheckbox')],

  props: {
    max: Number,
    disabled: Boolean,
    iconSize: [Number, String],
    checkedColor: String,
    value: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    },
  },

  methods: {
    // @exposed-api
    toggleAll(checked) {
      if (checked === false) {
        this.$emit('input', []);
        return;
      }

      let { children } = this;
      if (!checked) {
        children = children.filter(item => !item.checked);
      }

      const names = children.map(item => item.name);
      this.$emit('input', names);
    },
  },

  render() {
    return <div class={bem()}>{this.slots()}</div>;
  },
});
