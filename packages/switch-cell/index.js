import { use } from '../utils';
import { inherit } from '../utils/functional';
import Cell from '../cell';
import Switch from '../switch';
import { switchProps } from '../switch/shared';

const [sfc, bem] = use('switch-cell');

function SwitchCell(h, props, slots, ctx) {
  return (
    <Cell
      center
      title={props.title}
      border={props.border}
      class={bem()}
      {...inherit(ctx)}
    >
      <Switch {...{ props, on: ctx.listeners }} />
    </Cell>
  );
}

SwitchCell.props = {
  ...switchProps,
  title: String,
  border: Boolean,
  size: {
    type: String,
    default: '24px'
  }
};

export default sfc(SwitchCell);
