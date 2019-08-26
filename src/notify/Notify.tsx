import { createNamespace } from '../utils';
import { WHITE } from '../utils/constant';
import { inherit } from '../utils/functional';
import { PopupMixin } from '../mixins/popup';
import Popup from '../popup';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';
import { PopupMixinProps } from '../mixins/popup/type';

export type NotifyProps = PopupMixinProps & {
  type: 'primary' | 'success' | 'danger' | 'warning';
  color: string;
  message: string | number;
  duration: number;
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
    background: props.background
  };

  return (
    <Popup
      value={props.value}
      style={style}
      position="top"
      overlay={false}
      lockScroll={false}
      class={[bem([props.type]), props.className]}
      {...inherit(ctx, true)}
    >
      {props.message}
    </Popup>
  );
}

Notify.props = {
  ...PopupMixin.props,
  background: String,
  className: null as any,
  message: [Number, String],
  getContainer: [String, Function],
  type: {
    type: String,
    default: 'danger'
  },
  color: {
    type: String,
    default: WHITE
  },
  duration: {
    type: Number,
    default: 3000
  }
};

export default createComponent<NotifyProps>(Notify);
