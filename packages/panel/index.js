import { use } from '../utils';
import Cell from '../cell';
import CellGroup from '../cell-group';

const [sfc, bem] = use('panel');

export default sfc({
  props: {
    icon: String,
    desc: String,
    title: String,
    status: String
  },

  render(h) {
    const slots = this.$slots;

    return (
      <CellGroup class={bem()}>
        {slots.header || (
          <Cell
            class={bem('header')}
            icon={this.icon}
            label={this.desc}
            title={this.title}
            value={this.status}
          />
        )}
        <div class={bem('content')}>{slots.default}</div>
        {slots.footer && <div class={[bem('footer'), 'van-hairline--top']}>{slots.footer}</div>}
      </CellGroup>
    );
  }
});
