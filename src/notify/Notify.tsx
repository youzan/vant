// Utils
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';

// Mixins
import { popupMixinProps } from '../mixins/popup';

// Components
import Popup from '../popup';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';
import { PopupMixinProps } from '../mixins/popup/type';

export type NotifyProps = PopupMixinProps & {
  type: 'primary' | 'success' | 'danger' | 'warning';
  color: string;
  message: number | string;
  duration: number | string;
  className?: any;
  background: string;
};

const [createComponent, bem] = createNamespace('notify');

function Notify(
  h: CreateElement,
  props: NotifyProps,
  slots: DefaultSlots,
  ctx: RenderContext<NotifyProps>
) {
  const style = {
    color: props.color,
    background: props.background,
  };

  return (
    <Popup
      value={props.value}
      style={style}
      position="top"
      overlay={false}
      duration={0.2}
      lockScroll={false}
      class={[bem([props.type]), props.className]}
      {...inherit(ctx, true)}
    >
      {slots.default?.() || props.message}
    </Popup>
  );
}

Notify.props = {
  ...popupMixinProps,
  color: String,
  message: [Number, String],
  duration: [Number, String],
  className: null as any,
  background: String,
  getContainer: [String, Function],
  type: {
    type: String,
    default: 'danger',
  },
};

export default createComponent<NotifyProps>(Notify);
