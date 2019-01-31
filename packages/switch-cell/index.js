import { use } from '../utils';
import Cell from '../cell';
import Switch from '../switch';

const [sfc, bem] = use('switch-cell');

export default sfc({
  props: {
    value: null,
    title: String,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    },
    size: {
      type: String,
      default: '24px'
    }
  },

  watch: {
    value() {
      this.$emit('change', this.value);
    }
  },

  render(h) {
    return (
      <Cell center title={this.title} border={this.border} class={bem()}>
        <Switch
          {...{ props: this.$props }}
          onInput={value => {
            this.$emit('input', value);
          }}
        />
      </Cell>
    );
  }
});
