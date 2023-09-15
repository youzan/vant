// Utils
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';

// Components
import Cell from '../cell';
import Switch from '../switch';
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

export type SwitchCellEvents = {
  onChange?(checked: boolean): void;
};

const [createComponent, bem] = createNamespace('switch-cell');

function SwitchCell(
  h: CreateElement,
  props: SwitchCellProps,
  slots: DefaultSlots,
  ctx: RenderContext<SwitchCellProps>
) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      '[Vant] "SwitchCell" component is deprecated, see: https://vant-ui.github.io/vant/v2/#/zh-CN/switch-cell.'
    );
  }

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
    default: true,
  },
  size: {
    type: String,
    default: '24px',
  },
};

export default createComponent<SwitchCellProps, SwitchCellEvents>(SwitchCell);
