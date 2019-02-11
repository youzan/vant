import { use } from '../utils';
import { inheritContext } from '../utils/functional';
import Cell from '../cell';
import Switch from '../switch';
import SwitchMixin from '../mixins/switch';

const [sfc, bem] = use('switch-cell');

export default sfc({
  functional: true,

  mixins: [SwitchMixin],

  props: {
    title: String,
    border: Boolean,
    size: {
      type: String,
      default: '24px'
    }
  },

  render(h, context) {
    const { props } = context;

    return (
      <Cell center title={props.title} border={props.border} class={bem()} {...inheritContext(context)}>
        <Switch {...{ props, on: context.listeners }} />
      </Cell>
    );
  }
});
