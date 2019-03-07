import { use } from '../utils';
import { inherit } from '../utils/functional';
import Cell from '../cell';
import Switch, { SwitchEvents } from '../switch';
import { switchProps, SharedSwitchProps } from '../switch/shared';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type SwitchCellProps = SharedSwitchProps & {
  size: string;
  title?: string;
  border?: boolean;
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

export default sfc<SwitchCellProps, SwitchEvents>(SwitchCell);
