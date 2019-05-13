import { use } from '../utils';
import { inherit } from '../utils/functional';
import Cell from '../cell';
import Switch, { SwitchEvents } from '../switch';
import { switchProps, SharedSwitchProps } from '../switch/shared';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type SwitchCellProps = SharedSwitchProps & {
  size: string;
  title?: string;
  border?: boolean;
  cellSize?: string;
};

const [sfc, bem] = use('switch-cell');

function SwitchCell(
  h: CreateElement,
  props: SwitchCellProps,
  slots: DefaultSlots,
  ctx: RenderContext<SwitchCellProps>
) {
  return (
    <Cell
      center
      size={props.cellSize}
      title={props.title}
      border={props.border}
      class={bem([props.cellSize])}
      {...inherit(ctx)}
    >
      <Switch {...{ props, on: ctx.listeners }} />
    </Cell>
  );
}

SwitchCell.props = {
  ...switchProps,
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '24px'
  }
};

export default sfc<SwitchCellProps, SwitchEvents>(SwitchCell);
