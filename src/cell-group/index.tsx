import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type CellGroupProps = {
  title?: string;
  border: boolean
};

const [createComponent, bem] = createNamespace('cell-group');

function CellGroup(
  h: CreateElement,
  props: CellGroupProps,
  slots: DefaultSlots,
  ctx: RenderContext<CellGroupProps>
) {
  const Group = (
    <div
      class={[bem(), { 'van-hairline--top-bottom': props.border }]}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
    </div>
  );

  if (props.title) {
    return (
      <div>
        <div class={bem('title')}>{props.title}</div>
        {Group}
      </div>
    );
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true
  }
};

export default createComponent<CellGroupProps>(CellGroup);
