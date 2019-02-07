import { use } from '../utils';
import Cell from '../cell';
import CellGroup from '../cell-group';

const [sfc, bem] = use('panel');

export default sfc({
  functional: true,

  props: {
    icon: String,
    desc: String,
    title: String,
    status: String
  },

  render(h, context) {
    const { props } = context;
    const slots = context.slots();

    return (
      <CellGroup class={bem()} {...context.data}>
        {slots.header || (
          <Cell
            class={bem('header')}
            icon={props.icon}
            label={props.desc}
            title={props.title}
            value={props.status}
          />
        )}
        <div class={bem('content')}>{slots.default}</div>
        {slots.footer && <div class={[bem('footer'), 'van-hairline--top']}>{slots.footer}</div>}
      </CellGroup>
    );
  }
});
