import { PropType, defineComponent } from 'vue';
import { createNamespace, extend, unknownProp } from '../utils';
import { Popup } from '../popup';
import { popupSharedProps } from '../popup/shared';

const [name, bem] = createNamespace('notify');

export type NotifyType = 'primary' | 'success' | 'danger' | 'warning';

export default defineComponent({
  name,

  props: extend({}, popupSharedProps, {
    color: String,
    message: [Number, String],
    className: unknownProp,
    background: String,
    lockScroll: Boolean,
    type: {
      type: String as PropType<NotifyType>,
      default: 'danger',
    },
  }),

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
