// Utils
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';
import { BORDER_TOP } from '../utils/constant';

// Components
import Cell from '../cell';
import CellGroup from '../cell-group';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/types';

export type PanelProps = {
  icon?: string;
  desc?: string;
  title?: string;
  status?: string;
};

export type PanelSlots = DefaultSlots & {
  header?: ScopedSlot;
  footer?: ScopedSlot;
};

const [createComponent, bem] = createNamespace('panel');

function Panel(
  h: CreateElement,
  props: PanelProps,
  slots: PanelSlots,
  ctx: RenderContext<PanelProps>
) {
  const Content = () => [
    slots.header ? (
      slots.header()
    ) : (
      <Cell
        icon={props.icon}
        label={props.desc}
        title={props.title}
        value={props.status}
        class={bem('header')}
        valueClass={bem('header-value')}
      />
    ),
    <div class={bem('content')}>{slots.default && slots.default()}</div>,
    slots.footer && (
      <div class={[bem('footer'), BORDER_TOP]}>{slots.footer()}</div>
    ),
  ];

  return (
    <CellGroup
      class={bem()}
      scopedSlots={{ default: Content }}
      {...inherit(ctx, true)}
    />
  );
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String,
};

export default createComponent<PanelProps>(Panel);
