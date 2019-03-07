import { use } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type CellGroupProps = {
  border: boolean
};

const [sfc, bem] = use('cell-group');

function CellGroup(
  h: CreateElement,
  props: CellGroupProps,
  slots: DefaultSlots,
  ctx: RenderContext<CellGroupProps>
) {
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

export default sfc<CellGroupProps>(CellGroup);
