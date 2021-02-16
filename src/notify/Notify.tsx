import { PropType } from 'vue';
import { createNamespace, UnknownProp } from '../utils';
import Popup, { popupSharedProps } from '../popup';

const [createComponent, bem] = createNamespace('notify');

export type NotifyType = 'primary' | 'success' | 'danger' | 'warning';

export default createComponent({
  props: {
    ...popupSharedProps,
    color: String,
    message: [Number, String],
    className: UnknownProp,
    background: String,
    lockScroll: Boolean,
    type: {
      type: String as PropType<NotifyType>,
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
          lockScroll={props.lockScroll}
        >
          {slots.default ? slots.default() : props.message}
        </Popup>
      );
    };
  },
});
