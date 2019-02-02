import { use, noop } from '../utils';
import Icon from '../icon';

const [sfc, bem] = use('nav-bar');

export default sfc(
  {
    props: {
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
    },

    render(h, context) {
      const { props, listeners } = context;
      const slots = context.slots();

      return (
        <div
          class={[bem({ fixed: props.fixed }), { 'van-hairline--bottom': props.border }]}
          style={{ zIndex: props.zIndex }}
          {...context.data}
        >
          <div
            class={bem('left')}
            onClick={listeners['click-left'] || noop}
          >
            {slots.left || [
              props.leftArrow && <Icon class={bem('arrow')} name="arrow-left" />,
              props.leftText && <span class={bem('text')}>{props.leftText}</span>
            ]}
          </div>
          <div class={[bem('title'), 'van-ellipsis']}>{slots.title || props.title}</div>
          <div
            class={bem('right')}
            onClick={listeners['click-right'] || noop}
          >
            {slots.right || (props.rightText && <span class={bem('text')}>{props.rightText}</span>)}
          </div>
        </div>
      );
    }
  },
  true
);
