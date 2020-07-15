import { Transition } from 'vue';
import { createNamespace, isDef, noop } from '../utils';
import { preventDefault } from '../utils/dom/event';

const [createComponent, bem] = createNamespace('overlay');

function preventTouchMove(event) {
  preventDefault(event, true);
}

export default createComponent({
  props: {
    show: Boolean,
    zIndex: [Number, String],
    duration: [Number, String],
    className: null,
    customStyle: Object,
    lockScroll: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { slots }) {
    return function () {
      const style = {
        zIndex: props.zIndex,
        ...props.customStyle,
      };

      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`;
      }

      return (
        <Transition name="van-fade">
          <div
            vShow={props.show}
            style={style}
            class={[bem(), props.className]}
            onTouchmove={props.lockScroll ? preventTouchMove : noop}
          >
            {slots.default?.()}
          </div>
        </Transition>
      );
    };
  },
});
