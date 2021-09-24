import { PropType, defineComponent } from 'vue';
import { createNamespace, extend, unknownProp } from '../utils';
import { Popup } from '../popup';
import { popupSharedProps } from '../popup/shared';
import type { NotifyType } from './types';

const [name, bem] = createNamespace('notify');

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
    return () => (
      <Popup
        show={props.show}
        class={[bem([props.type]), props.className]}
        style={{
          color: props.color,
          background: props.background,
        }}
        overlay={false}
        position="top"
        duration={0.2}
        lockScroll={props.lockScroll}
      >
        {slots.default ? slots.default() : props.message}
      </Popup>
    );
  },
});
