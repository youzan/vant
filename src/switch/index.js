// Utils
import { createNamespace, addUnit } from '../utils';
import { switchProps } from './shared';

// Mixins
import { FieldMixin } from '../mixins/field';

// Components
import Loading from '../loading';

const [createComponent, bem] = createNamespace('switch');

export default createComponent({
  mixins: [FieldMixin],

  props: switchProps,

  computed: {
    checked() {
      return this.value === this.activeValue;
    },

    style() {
      return {
        fontSize: addUnit(this.size),
        backgroundColor: this.checked ? this.activeColor : this.inactiveColor,
      };
    },
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);

      if (!this.disabled && !this.loading) {
        const newValue = this.checked ? this.inactiveValue : this.activeValue;
        this.$emit('input', newValue);
        this.$emit('change', newValue);
      }
    },

    genLoading() {
      if (this.loading) {
        const color = this.checked ? this.activeColor : this.inactiveColor;
        return <Loading class={bem('loading')} color={color} />;
      }
    },
  },

  render() {
    const { checked, loading, disabled } = this;

    return (
      <div
        class={bem({
          on: checked,
          loading,
          disabled,
        })}
        role="switch"
        style={this.style}
        aria-checked={String(checked)}
        onClick={this.onClick}
      >
        <div class={bem('node')}>{this.genLoading()}</div>
      </div>
    );
  },
});
