import { use } from '../utils';
import Cell from '../cell';
import Switch from '../switch';
import SwitchMixin from '../mixins/switch';

const [sfc, bem] = use('switch-cell');

export default sfc(
  {
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
        <Cell
          center
          title={props.title}
          border={props.border}
          style={context.style}
          class={[bem(), context.class, context.staticClass]}
        >
          <Switch {...{ props, on: context.listeners }} />
        </Cell>
      );
    }
  },
  true
);
