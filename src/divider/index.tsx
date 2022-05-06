// Utils
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type DividerProps = {
  dashed?: string;
  hairline: boolean;
  borderColor?: string;
  contentPosition: 'left' | 'center' | 'right';
  title?: string;
};

// import Text from '../text';

const [createComponent, bem] = createNamespace('divider');

function Divider(
  h: CreateElement,
  props: DividerProps,
  slots: DefaultSlots,
  ctx: RenderContext
) {
  return (
    <div
      role="separator"
      style={{ borderColor: props.borderColor }}
      class={bem({
        dashed: props.dashed !== 'a',
        hairline: props.hairline,
        [`content-${props.contentPosition}`]: props.title || slots.default,
      })}
      {...inherit(ctx, true)}
      vusion-slot-name="title"
    >
      {/* {slots.default && slots.default()} */}
      {props.title ? <span>{props.title}</span> : ''}
    </div>
  );
}

Divider.props = {
  dashed: {
    type: String,
    default: 'a',
  },
  hairline: {
    type: Boolean,
    default: true,
  },
  contentPosition: {
    type: String,
    default: 'center',
  },
  title: {
    type: String,
    default: '文本',
  },
};

export default createComponent<DividerProps>(Divider);
