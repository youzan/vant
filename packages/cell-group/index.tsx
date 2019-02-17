import { use } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { FunctionalComponent } from '../utils/use/sfc';

const [sfc, bem] = use('cell-group');

const CellGroup: FunctionalComponent<CellGroupProps> = function (
  h,
  props,
  slots,
  ctx
) {
  return (
    <div
      class={[bem(), { 'van-hairline--top-bottom': props.border }]}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
    </div>
  );
};

export type CellGroupProps = {
  border?: boolean
};

CellGroup.props = {
  border: {
    type: Boolean,
    default: true
  }
};

export default sfc<CellGroupProps>(CellGroup);
