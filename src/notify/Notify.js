import { createNamespace } from '../utils';
import { popupMixinProps } from '../mixins/popup';
import Popup from '../popup';

const [createComponent, bem] = createNamespace('notify');

export default createComponent({
  props: {
    ...popupMixinProps,
    color: String,
    message: [Number, String],
    duration: [Number, String],
    className: null,
    background: String,
    getContainer: [String, Function],
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
