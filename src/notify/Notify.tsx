import { createNamespace } from '../utils';
import { RED, WHITE } from '../utils/color';
import { inherit } from '../utils/functional';
import { PopupMixin } from '../mixins/popup';
import Popup from '../popup';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';
import { PopupMixinProps } from '../mixins/popup/type';

export type NotifyProps = PopupMixinProps & {
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
      class={[bem(), props.className]}
      {...inherit(ctx, true)}
    >
      {props.message}
    </Popup>
  );
}

Notify.props = {
  ...PopupMixin.props,
  className: null as any,
  message: [Number, String],
  getContainer: [String, Function],
  color: {
    type: String,
    default: WHITE
  },
  background: {
    type: String,
    default: RED
  },
  duration: {
    type: Number,
    default: 3000
  }
};

export default createComponent<NotifyProps>(Notify);
