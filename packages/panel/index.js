import { use } from '../utils';
import Cell from '../cell';
import CellGroup from '../cell-group';
import { inherit } from '../utils/functional';

const [sfc, bem] = use('panel');

function Panel(h, props, slots, ctx) {
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
      <div class={[bem('footer'), 'van-hairline--top']}>{slots.footer()}</div>
    )
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
  status: String
};

export default sfc(Panel);
