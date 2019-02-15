import { use } from '../utils';
import { inherit } from '../utils/functional';

const [sfc, bem] = use('cell-group');

function CellGroup(h, props, slots, ctx) {
  return (
    <div
      class={[bem(), { 'van-hairline--top-bottom': props.border }]}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
    </div>
  );
}

CellGroup.props = {
  border: {
    type: Boolean,
    default: true
  }
};

export default sfc(CellGroup);
