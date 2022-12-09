// Utils
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';
import VanEmptyCol from '../emptycol';

export type DividerProps = {
  dashed?: string;
  hairline: boolean;
  borderColor?: string;
  contentPosition: 'left' | 'center' | 'right';
  title?: string;
  notitle?: Boolean
};

// import Text from '../text';

const [createComponent, bem] = createNamespace('divider');

function Divider(
  h: CreateElement,
  props: DividerProps,
  slots: DefaultSlots,
  ctx: RenderContext
) {
  const designer = ctx.parent?.$env?.VUE_APP_DESIGNER;
  return (
    <div
      role="separator"
      style={{ borderColor: props.borderColor }}
      class={bem({
        dashed: props.dashed !== 'a',
        hairline: props.hairline,
        [`content-${props.contentPosition}`]: true,
      })}
      {...inherit(ctx, true)}
    >
      {(props.title ? (
        <span vusion-slot-name-edit="title">{props.title}</span>
      ) : slots.default ? (
        slots.default()
      ) : (
        designer && !props.notitle &&(
          <span vusion-slot-name="default">
            <VanEmptyCol></VanEmptyCol>
          </span>
        )
      ))}
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
  },
  notitle: {
    type: Boolean,
  },
};

export default createComponent<DividerProps>(Divider);
