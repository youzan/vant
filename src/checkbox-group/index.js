import { createNamespace } from '../utils';
import { FieldMixin } from '../mixins/field';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('checkbox-group');

export default createComponent({
  mixins: [ParentMixin('vanCheckbox'), FieldMixin],

  props: {
    max: [Number, String],
    min: {
      type: Number,
      default: 0,
    },
    disabled: Boolean,
    direction: String,
    iconSize: [Number, String],
    checkedColor: String,
    value: {
      type: [Array, String],
      default: () => [],
    },
  },
  data() {
    return {
      datatemp: this.fromValue(this.value),
    }
  },
  watch: {
    value(val) {
      this.$emit('change', val);
    },
    datatemp(val) {
      this.$emit('change', this.toValue(val));
      this.$emit('input', this.toValue(val));
      this.$emit('update:value', this.toValue(val));
    },
  },

  methods: {
    fromValue(value) {console.log(value, 5555)
      try {
        if(value === null || value === '') return [];
        if(typeof value === 'string') return JSON.parse(value || '[]');
        if(typeof value === 'object') return value;
      } catch (err) {
        return [];
      }
    },
    toValue(value) {
      return Array.isArray(value) && value.length === 0 ? '[]' : JSON.stringify(value);
    },
    // @exposed-api
    toggleAll(options = {}) {
      if (typeof options === 'boolean') {
        options = { checked: options };
      }

      const { checked, skipDisabled } = options;

      const children = this.children.filter((item) => {
        if (item.disabled && skipDisabled) {
          return item.checked;
        }
        return checked ?? !item.checked;
      });

      const names = children.map((item) => item.name);
      this.datatemp = names;
    },
  },

  render() {
    return <div class={bem([this.direction])}>{this.slots()}</div>;
  },
});
