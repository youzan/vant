import { use } from '../utils';
import Cell from '../cell';
import Switch from '../switch';
import SwitchMixin from '../mixins/switch';

const [sfc, bem] = use('switch-cell');

export default sfc({
  mixins: [SwitchMixin],

  props: {
    title: String,
    border: Boolean,
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
