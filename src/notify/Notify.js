import { createNamespace } from '../utils';
import Popup, { popupSharedProps } from '../popup';

const [createComponent, bem] = createNamespace('notify');

export default createComponent({
  props: {
    ...popupSharedProps,
    color: String,
    message: [Number, String],
    duration: [Number, String],
    teleport: [String, Object],
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
          style={style}
          position="top"
          overlay={false}
          duration={0.2}
          lockScroll={false}
          class={[bem([props.type]), props.className]}
        >
          {slots.default?.() || props.message}
        </Popup>
      );
    };
  },
});
