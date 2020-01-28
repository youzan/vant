// Utils
import { createNamespace, noop } from '../utils';
import { inherit } from '../utils/functional';
import { BORDER_BOTTOM } from '../utils/constant';

// Components
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../utils/types';

export type NavBarProps = {
  title?: string;
  fixed?: boolean;
  zIndex: number;
  border: boolean;
  leftText?: string;
  rightText?: string;
  leftArrow?: boolean;
};

export type NavBarSlots = DefaultSlots & {
  left?: ScopedSlot;
  title?: ScopedSlot;
  right?: ScopedSlot;
};

export type NavBarEvents = {
  'click-left'?(event: Event): void;
  'click-right'?(event: Event): void;
};

const [createComponent, bem] = createNamespace('nav-bar');

function NavBar(
  h: CreateElement,
  props: NavBarProps,
  slots: NavBarSlots,
  ctx: RenderContext<NavBarProps>
) {
  function LeftPart() {
    if (slots.left) {
      return slots.left();
    }

    return [
      props.leftArrow && <Icon class={bem('arrow')} name="arrow-left" />,
      props.leftText && <span class={bem('text')}>{props.leftText}</span>,
    ];
  }

  function RightPart() {
    if (slots.right) {
      return slots.right();
    }

    if (props.rightText) {
      return <span class={bem('text')}>{props.rightText}</span>;
    }
  }

  return (
    <div
      style={{ zIndex: props.zIndex }}
      class={[bem({ fixed: props.fixed }), { [BORDER_BOTTOM]: props.border }]}
      {...inherit(ctx)}
    >
      <div class={bem('left')} onClick={ctx.listeners['click-left'] || noop}>
        {LeftPart()}
      </div>
      <div class={[bem('title'), 'van-ellipsis']}>
        {slots.title ? slots.title() : props.title}
      </div>
      <div class={bem('right')} onClick={ctx.listeners['click-right'] || noop}>
        {RightPart()}
      </div>
    </div>
  );
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  zIndex: [Number, String],
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true,
  },
};

export default createComponent<NavBarProps, NavBarEvents>(NavBar);
