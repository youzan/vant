import { use, noop } from '../utils';
import { inherit } from '../utils/functional';
import Icon from '../icon';

const [sfc, bem] = use('nav-bar');

function NavBar(h, props, slots, ctx) {
  return (
    <div
      class={[
        bem({ fixed: props.fixed }),
        { 'van-hairline--bottom': props.border }
      ]}
      style={{ zIndex: props.zIndex }}
      {...inherit(ctx)}
    >
      <div class={bem('left')} onClick={ctx.listeners['click-left'] || noop}>
        {slots.left
          ? slots.left()
          : [
            props.leftArrow && (
              <Icon class={bem('arrow')} name="arrow-left" />
            ),
            props.leftText && (
              <span class={bem('text')}>{props.leftText}</span>
            )
          ]}
      </div>
      <div class={[bem('title'), 'van-ellipsis']}>
        {slots.title ? slots.title() : props.title}
      </div>
      <div class={bem('right')} onClick={ctx.listeners['click-right'] || noop}>
        {slots.right
          ? slots.right()
          : props.rightText && (
              <span class={bem('text')}>{props.rightText}</span>
          )}
      </div>
    </div>
  );
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1
  }
};

export default sfc(NavBar);
