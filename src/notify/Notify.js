import { createNamespace } from '../utils';
import Popup, { popupSharedProps } from '../popup';

const [createComponent, bem] = createNamespace('notify');

export default createComponent({
  props: {
    ...popupSharedProps,
    color: String,
    message: [Number, String],
    className: null,
    background: String,
    type: {
      type: String,
      default: 'danger',
    },
  },

  setup(props, { slots }) {
    return () => {
      const style = {
        color: props.color,
        background: props.background,
      };

      return (
        <Popup
          show={props.show}
          class={[bem([props.type]), props.className]}
          style={style}
          overlay={false}
          position="top"
          duration={0.2}
          lockScroll={false}
        >
          {slots.default ? slots.default() : props.message}
        </Popup>
      );
    };
  },
});
