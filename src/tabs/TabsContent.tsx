import { createNamespace } from '../utils';
import { useTouch } from '../composition/use-touch';

const [createComponent, bem] = createNamespace('tabs');
const MIN_SWIPE_DISTANCE = 50;

export default createComponent({
  props: {
    duration: [Number, String],
    animated: Boolean,
    swipeable: Boolean,
    count: {
      type: Number,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },

  emits: ['change'],

  setup(props, { emit, slots }) {
    const touch = useTouch();

    const onTouchEnd = () => {
      const { deltaX, offsetX } = touch;
      const { currentIndex } = props;

      /* istanbul ignore else */
      if (touch.isHorizontal() && offsetX.value >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX.value > 0 && currentIndex !== 0) {
          emit('change', currentIndex - 1);
        } else if (deltaX.value < 0 && currentIndex !== props.count - 1) {
          emit('change', currentIndex + 1);
        }
      }
    };

    const renderChildren = () => {
      const Content = slots.default?.();

      if (props.animated) {
        const style = {
          transform: `translate3d(${-1 * props.currentIndex * 100}%, 0, 0)`,
          transitionDuration: `${props.duration}s`,
        };

        return (
          <div class={bem('track')} style={style}>
            {Content}
          </div>
        );
      }

      return Content;
    };

    return () => {
      const listeners = props.swipeable
        ? {
            onTouchstart: touch.start,
            onTouchmove: touch.move,
            onTouchend: onTouchEnd,
            onTouchcancel: onTouchEnd,
          }
        : null;

      return (
        <div
          class={bem('content', { animated: props.animated })}
          {...listeners}
        >
          {renderChildren()}
        </div>
      );
    };
  },
});
