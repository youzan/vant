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
      default: () => []
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  methods: {
    toggleAll(checked) {
      this.children.forEach(item => {
        item.toggle(checked);
      });
    }
  },

  render() {
    return <div class={bem()}>{this.slots()}</div>;
  }
});
